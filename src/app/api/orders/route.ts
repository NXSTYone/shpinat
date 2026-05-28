export const runtime = "nodejs";

import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const botToken = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID;

    if (!botToken || !chatId) {
      return NextResponse.json(
        { error: "Missing env variables" },
        { status: 500 }
      );
    }

    const order = await request.json();

    const itemsText = order.items
      ?.map(
        (item: any, index: number) =>
          `${index + 1}. ${item.title} — ${item.quantity} шт. × ${item.price} ₽`
      )
      .join("\n");

    const message = `
🛒 Новый заказ ШПИНАТ

Имя: ${order.name}
Телефон: ${order.phone}
Адрес: ${order.address || "Не указан"}
Оплата: ${order.paymentMethod}

Состав заказа:
${itemsText || "-"}

Итого: ${order.totalPrice} ₽

Комментарий:
${order.comment || "Без комментария"}
`;

    const response = await fetch(
      `https://api.telegram.org/bot${botToken}/sendMessage`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          chat_id: chatId,
          text: message,
        }),
      }
    );

    const telegramResult = await response.json();

    return NextResponse.json({
      success: true,
      telegram: telegramResult,
    });
  } catch (error: any) {
    console.error("ORDER ERROR:", error);

    return NextResponse.json(
      {
        error: "Order failed",
        details: String(error?.message || error),
      },
      { status: 500 }
    );
  }
}
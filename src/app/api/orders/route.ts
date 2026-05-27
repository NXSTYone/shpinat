import { NextResponse } from "next/server";

type OrderItem = {
  title: string;
  price: number;
  quantity: number;
};

type OrderPayload = {
  name: string;
  phone: string;
  address?: string;
  comment?: string;
  paymentMethod: string;
  items: OrderItem[];
  totalPrice: number;
};

function escapeHtml(text: string) {
  return String(text || "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
}

export async function POST(request: Request) {
  try {
    const botToken = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID;

    if (!botToken || !chatId) {
      return NextResponse.json(
        { error: "Telegram settings are missing" },
        { status: 500 }
      );
    }

    const order: OrderPayload = await request.json();

    const itemsText = order.items
      .map(
        (item, index) =>
          `${index + 1}. ${escapeHtml(item.title)} — ${item.quantity} шт. × ${
            item.price
          } ₽ = ${item.price * item.quantity} ₽`
      )
      .join("\n");

    const message = `
<b>🛒 Новый заказ ШПИНАТ</b>

<b>Клиент:</b> ${escapeHtml(order.name)}
<b>Телефон:</b> ${escapeHtml(order.phone)}
<b>Адрес:</b> ${escapeHtml(order.address || "Не указан")}
<b>Оплата:</b> ${escapeHtml(order.paymentMethod)}

<b>Состав заказа:</b>
${itemsText}

<b>Итого:</b> ${order.totalPrice} ₽

<b>Комментарий:</b>
${escapeHtml(order.comment || "Без комментария")}
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
          parse_mode: "HTML",
        }),
      }
    );

    if (!response.ok) {
      return NextResponse.json(
        { error: "Failed to send Telegram message" },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
  console.log(error);
    return NextResponse.json(
      { error: "Order processing failed" },
      { status: 500 }
    );
  }
}
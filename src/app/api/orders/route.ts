import { NextResponse } from "next/server";
import axios from "axios";
import { SocksProxyAgent } from "socks-proxy-agent";

export async function POST(request: Request) {
  try {
    const botToken = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID;

    if (!botToken || !chatId) {
      return NextResponse.json(
        { error: "Telegram env not found" },
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

    const proxyHost = process.env.PROXY_HOST;
    const proxyPort = process.env.PROXY_PORT;
    const proxyUser = process.env.PROXY_USER;
    const proxyPass = process.env.PROXY_PASS;

    if (!proxyHost || !proxyPort || !proxyUser || !proxyPass) {
      return NextResponse.json(
        { error: "Proxy env not found" },
        { status: 500 }
      );
    }

    const proxyAgent = new SocksProxyAgent(
      `socks5h://${proxyUser}:${proxyPass}@${proxyHost}:${proxyPort}`
    );

    const telegramUrl = `https://api.telegram.org/bot${botToken}/sendMessage`;

    const response = await axios.post(
      telegramUrl,
      {
        chat_id: chatId,
        text: message,
      },
      {
        httpAgent: proxyAgent,
        httpsAgent: proxyAgent,
        proxy: false,
        timeout: 15000,
      }
    );

    return NextResponse.json({
      success: true,
      telegram: response.data,
    });
  } catch (error: any) {
    console.error("ORDER ERROR:", error?.response?.data || error);

    return NextResponse.json(
      {
        error: "Order processing failed",
        details: error?.response?.data || error?.message || String(error),
      },
      { status: 500 }
    );
  }
}
export const runtime = "nodejs";

import { NextResponse } from "next/server";
import { execFile } from "child_process";
import { promisify } from "util";

const execFileAsync = promisify(execFile);

export async function POST(request: Request) {
  try {
    const botToken = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID;

    const proxyHost = process.env.PROXY_HOST;
    const proxyPort = process.env.PROXY_PORT;
    const proxyUser = process.env.PROXY_USER;
    const proxyPass = process.env.PROXY_PASS;

    if (!botToken || !chatId || !proxyHost || !proxyPort || !proxyUser || !proxyPass) {
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

    const proxy = `${proxyUser}:${proxyPass}@${proxyHost}:${proxyPort}`;
    const url = `https://api.telegram.org/bot${botToken}/sendMessage`;

    const { stdout, stderr } = await execFileAsync("curl", [
      "--socks5-hostname",
      proxy,
      "-X",
      "POST",
      url,
      "-d",
      `chat_id=${chatId}`,
      "-d",
      `text=${message}`,
    ]);

    if (stderr) {
      console.error("Telegram curl stderr:", stderr);
    }

    return NextResponse.json({
      success: true,
      telegram: stdout,
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
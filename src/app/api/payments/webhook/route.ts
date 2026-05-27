import { NextResponse } from "next/server";

async function sendTelegramMessage(text: string) {
  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  if (!token || !chatId) {
    throw new Error("Telegram settings are not configured");
  }

  const response = await fetch(
    `https://api.telegram.org/bot${token}/sendMessage`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        chat_id: chatId,
        text,
        parse_mode: "HTML",
      }),
    }
  );

  if (!response.ok) {
    throw new Error("Telegram message failed");
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();

    if (body.event !== "payment.succeeded") {
      return NextResponse.json({ ok: true });
    }

    const payment = body.object;

    if (payment.status !== "succeeded") {
      return NextResponse.json({ ok: true });
    }

    const metadata = payment.metadata || {};

    let items = [];

    try {
      items = JSON.parse(metadata.items || "[]");
    } catch {
      items = [];
    }

    const itemsText = items
      .map((item: any, index: number) => {
        return `${index + 1}. ${item.title} — ${item.quantity} шт. × ${item.price} ₽`;
      })
      .join("\n");

    const message = `
✅ <b>ОПЛАЧЕННЫЙ ЗАКАЗ</b>

💳 <b>Оплата:</b> СБП
🧾 <b>ID платежа:</b> ${payment.id}

👤 <b>Имя:</b> ${metadata.name || "-"}
📞 <b>Телефон:</b> ${metadata.phone || "-"}
📍 <b>Адрес:</b> ${metadata.address || "-"}
💬 <b>Комментарий:</b> ${metadata.comment || "-"}

🛒 <b>Состав заказа:</b>
${itemsText || "-"}

💰 <b>Сумма:</b> ${metadata.totalPrice || payment.amount?.value} ₽
`;

    await sendTelegramMessage(message);

    return NextResponse.json({ ok: true });
  } catch (error) {
    return NextResponse.json(
      { error: "Webhook failed" },
      { status: 500 }
    );
  }
}
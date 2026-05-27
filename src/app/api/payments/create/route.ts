import { NextResponse } from "next/server";
import { randomUUID } from "crypto";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const shopId = process.env.YOOKASSA_SHOP_ID;
    const secretKey = process.env.YOOKASSA_SECRET_KEY;
    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://shpinat.shop";

    if (!shopId || !secretKey) {
      return NextResponse.json(
        { error: "YooKassa keys are not configured" },
        { status: 500 }
      );
    }

    const amount = Number(body.totalPrice);

    if (!amount || amount <= 0) {
      return NextResponse.json(
        { error: "Invalid payment amount" },
        { status: 400 }
      );
    }

    const paymentData = {
      amount: {
        value: amount.toFixed(2),
        currency: "RUB",
      },
      capture: true,
      payment_method_data: {
        type: "sbp",
      },
      confirmation: {
        type: "redirect",
        return_url: `${siteUrl}/success?payment=sbp`,
      },
      description: `Заказ ШПИНАТ на ${amount} ₽`,
      metadata: {
        name: body.name || "",
        phone: body.phone || "",
        address: body.address || "",
        comment: body.comment || "",
        paymentMethod: body.paymentMethod || "Онлайн по СБП",
        totalPrice: String(body.totalPrice || ""),
        items: JSON.stringify(body.items || []),
      },
    };

    const response = await fetch("https://api.yookassa.ru/v3/payments", {
      method: "POST",
      headers: {
        Authorization:
          "Basic " +
          Buffer.from(`${shopId}:${secretKey}`).toString("base64"),
        "Idempotence-Key": randomUUID(),
        "Content-Type": "application/json",
      },
      body: JSON.stringify(paymentData),
    });

    const data = await response.json();

    if (!response.ok) {
      return NextResponse.json(data, { status: response.status });
    }

    return NextResponse.json({
      paymentId: data.id,
      confirmationUrl: data.confirmation?.confirmation_url,
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Payment creation failed" },
      { status: 500 }
    );
  }
}
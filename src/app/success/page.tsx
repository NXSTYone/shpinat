"use client";

import Image from "next/image";
import { CheckCircle, ArrowRight, ShoppingBag } from "lucide-react";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";

import { useCart } from "@/context/CartContext";

export default function SuccessPage() {
  const searchParams = useSearchParams();
  const payment = searchParams.get("payment");
  const { clearCart } = useCart();

  useEffect(() => {
    clearCart();
  }, [clearCart]);

  const isSbp = payment === "sbp";

  return (
    <main className="min-h-screen bg-[#cdb78f] px-5 py-10 text-[#355f28]">
      <div className="mx-auto flex min-h-[80vh] max-w-3xl flex-col items-center justify-center text-center">
        <Image
          src="/images/logo.png"
          alt="ШПИНАТ"
          width={260}
          height={120}
          className="mb-8 h-28 w-auto object-contain"
        />

        <div className="w-full rounded-[3rem] border border-[#b89c6d] bg-white/30 p-8 shadow-2xl backdrop-blur-xl md:p-12">
          <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-[2rem] bg-[#39A935]/20">
            <CheckCircle size={52} className="text-[#39A935]" />
          </div>

          <h1 className="mt-8 text-4xl font-black text-[#1f5f2a] md:text-6xl">
            {isSbp ? "Оплата прошла успешно" : "Заказ принят"}
          </h1>

          <p className="mx-auto mt-5 max-w-xl text-lg font-semibold leading-8">
            {isSbp
              ? "Спасибо! Оплата по СБП успешно получена. Ваш заказ принят, мы скоро свяжемся с вами для подтверждения деталей."
              : "Спасибо! Ваш заказ успешно отправлен. Мы скоро свяжемся с вами для подтверждения деталей."}
          </p>

          <div className="mt-8 rounded-[2rem] bg-white/35 p-5 text-sm font-bold leading-7">
            {isSbp ? (
              <>
                <p>📲 Способ оплаты: СБП</p>
                <p>✅ Статус: оплачено</p>
              </>
            ) : (
              <>
                <p>💵 Способ оплаты: наличными при получении</p>
                <p>✅ Статус: заказ отправлен</p>
              </>
            )}
          </div>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <a
              href="/"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#39A935] px-8 py-5 font-black text-white shadow-xl shadow-[#7fbf5d]"
            >
              На главную
              <ArrowRight size={18} />
            </a>

            <a
              href="/#menu"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-[#b89c6d] bg-white/30 px-8 py-5 font-black text-[#1f7a32]"
            >
              <ShoppingBag size={18} />
              В меню
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
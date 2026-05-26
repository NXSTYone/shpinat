"use client";

import Image from "next/image";
import { useState } from "react";

import {
  ArrowLeft,
  Minus,
  Plus,
  ShoppingBag,
  Trash2,
  House,
  Menu,
  Send,
  ClipboardCheck,
  CheckCircle,
} from "lucide-react";

import { useCart } from "@/context/CartContext";

export default function CartPage() {
  const {
    cart,
    totalPrice,
    totalItems,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
    clearCart,
  } = useCart();

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [comment, setComment] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("Наличными при получении");
  const [isSending, setIsSending] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  async function submitOrder() {
    if (!name.trim() || !phone.trim()) {
      alert("Укажите имя и телефон");
      return;
    }

    if (cart.length === 0) {
      alert("Корзина пустая");
      return;
    }

    setIsSending(true);

    const response = await fetch("/api/orders", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        phone,
        address,
        comment,
        paymentMethod,
        items: cart,
        totalPrice,
      }),
    });

    setIsSending(false);

    if (!response.ok) {
      alert("Не удалось отправить заказ. Проверь Telegram-настройки.");
      return;
    }

    clearCart();
    setName("");
    setPhone("");
    setAddress("");
    setComment("");
    setPaymentMethod("Наличными при получении");
    setSuccessMessage("Заказ успешно отправлен!");

    setTimeout(() => {
      setSuccessMessage("");
    }, 2500);
  }

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#cdb78f] pb-24 text-[#355f28]">
      {successMessage && (
        <div className="fixed left-1/2 top-6 z-[200] flex w-[92%] max-w-md -translate-x-1/2 items-center gap-3 rounded-full border border-[#b89c6d] bg-white/90 px-5 py-4 font-black text-[#1f5f2a] shadow-2xl shadow-[#7c603b] backdrop-blur-2xl">
          <CheckCircle className="text-[#39A935]" size={24} />
          <span>{successMessage}</span>
        </div>
      )}

      <div
        className="fixed inset-0 -z-10 overflow-hidden"
        style={{
          backgroundColor: "#cdb78f",
          backgroundImage: `
            radial-gradient(circle at 20% 20%, rgba(255,255,255,0.16) 0, transparent 28%),
            radial-gradient(circle at 80% 10%, rgba(255,255,255,0.12) 0, transparent 24%),
            radial-gradient(circle at 30% 80%, rgba(111,78,45,0.12) 0, transparent 26%),
            linear-gradient(90deg, rgba(255,255,255,0.045) 1px, transparent 1px),
            linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px)
          `,
          backgroundSize: "auto, auto, auto, 22px 22px, 22px 22px",
        }}
      />

      <header className="fixed left-0 top-0 z-50 w-full border-b border-[#b89c6d] bg-[#cdb78f]/85 backdrop-blur-2xl">
        <div className="mx-auto flex max-w-7xl items-center justify-center px-5 py-4 md:justify-between">
          <a href="/" className="flex items-center justify-center">
            <Image
              src="/images/logo.png"
              alt="ШПИНАТ"
              width={420}
              height={200}
              priority
              className="h-36 w-auto object-contain md:h-40"
            />
          </a>

          <nav className="hidden items-center gap-8 text-sm font-bold text-[#355f28] md:flex">
            <a href="/" className="transition hover:text-[#39A935]">
              Главная
            </a>

            <a href="/#menu" className="transition hover:text-[#39A935]">
              Меню
            </a>

            <a href="/#contacts" className="transition hover:text-[#39A935]">
              Контакты
            </a>

            <a
              href="/cart"
              className="flex items-center gap-2 rounded-full bg-[#39A935] px-6 py-3 text-white shadow-xl shadow-[#7fbf5d]"
            >
              <ShoppingBag size={18} />
              Корзина {totalItems > 0 && `(${totalItems})`}
            </a>
          </nav>
        </div>
      </header>

      <section className="mx-auto max-w-7xl px-5 pt-52 md:pt-56">
        <a
          href="/#menu"
          className="inline-flex items-center gap-2 rounded-full border border-[#b89c6d] bg-white/20 px-5 py-3 font-black text-[#1f7a32] backdrop-blur-xl transition hover:bg-white/30 active:scale-95"
        >
          <ArrowLeft size={18} />
          Продолжить покупки
        </a>

        <div className="mt-10 rounded-[3rem] border border-[#b89c6d] bg-white/20 p-8 text-center shadow-[0_30px_100px_rgba(74,53,24,0.22)] backdrop-blur-xl md:p-14">
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-[1.7rem] bg-[#b89c6d]/60">
            <ShoppingBag size={36} className="text-[#39A935]" />
          </div>

          <h1 className="mt-8 text-5xl font-black tracking-[-0.05em] text-[#1f5f2a] md:text-7xl">
            Корзина
          </h1>

          <p className="mx-auto mt-5 max-w-3xl text-lg font-semibold leading-8 text-[#355f28] md:text-xl">
            Проверьте заказ и заполните данные для оформления.
          </p>
        </div>

        {cart.length === 0 ? (
          <div className="mt-12 rounded-[3rem] border border-[#b89c6d] bg-white/25 p-10 text-center shadow-[0_24px_80px_rgba(74,53,24,0.20)] backdrop-blur-xl">
            <h2 className="text-3xl font-black text-[#1f5f2a]">
              Корзина пока пустая
            </h2>

            <a
              href="/#menu"
              className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-[#39A935] px-8 py-5 font-black text-white shadow-xl shadow-[#7fbf5d] transition hover:bg-[#2F922C] active:scale-95"
            >
              Перейти в меню
            </a>
          </div>
        ) : (
          <div className="mt-12 grid gap-8 lg:grid-cols-[1fr_420px]">
            <div className="space-y-5">
              {cart.map((item) => (
                <div
                  key={item.id}
                  className="grid gap-5 rounded-[2.5rem] border border-[#b89c6d] bg-white/25 p-5 shadow-[0_24px_80px_rgba(74,53,24,0.18)] backdrop-blur-xl md:grid-cols-[160px_1fr]"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-40 w-full rounded-[2rem] object-cover md:h-full"
                  />

                  <div className="flex flex-col justify-between gap-5">
                    <div>
                      <h2 className="text-2xl font-black text-[#1f5f2a]">
                        {item.title}
                      </h2>

                      <div className="mt-3 inline-flex rounded-2xl bg-[#39A935] px-5 py-3 font-black text-white shadow-lg shadow-[#7fbf5d]">
                        {item.price} ₽ / шт.
                      </div>
                    </div>

                    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                      <div className="flex items-center justify-center gap-3 rounded-full bg-white/25 p-2">
                        <button
                          onClick={() => decreaseQuantity(item.id)}
                          className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-[#1f5f2a] transition active:scale-90"
                        >
                          <Minus size={18} />
                        </button>

                        <div className="min-w-10 text-center text-xl font-black text-[#1f5f2a]">
                          {item.quantity}
                        </div>

                        <button
                          onClick={() => increaseQuantity(item.id)}
                          className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-[#1f5f2a] transition active:scale-90"
                        >
                          <Plus size={18} />
                        </button>
                      </div>

                      <div className="text-center sm:text-right">
                        <div className="text-sm font-bold uppercase tracking-[0.2em] text-[#39A935]">
                          Сумма
                        </div>

                        <div className="mt-1 text-3xl font-black text-[#1f5f2a]">
                          {item.price * item.quantity} ₽
                        </div>
                      </div>

                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="flex items-center justify-center gap-2 rounded-full border border-[#b89c6d] bg-white/25 px-5 py-4 font-black text-[#1f7a32] transition hover:bg-white/35 active:scale-95"
                      >
                        <Trash2 size={18} />
                        Удалить
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <aside className="h-fit rounded-[3rem] border border-[#b89c6d] bg-white/25 p-7 shadow-[0_24px_80px_rgba(74,53,24,0.20)] backdrop-blur-xl md:p-8">
              <div className="flex h-20 w-20 items-center justify-center rounded-[1.7rem] bg-[#b89c6d]/60">
                <ClipboardCheck size={36} className="text-[#39A935]" />
              </div>

              <h2 className="mt-7 text-3xl font-black text-[#1f5f2a]">
                Оформление заказа
              </h2>

              <div className="mt-6 space-y-4">
                <input
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                  placeholder="Ваше имя"
                  className="w-full rounded-2xl border border-[#b89c6d] bg-white/50 px-5 py-4 font-bold text-[#1f5f2a] outline-none placeholder:text-[#355f28]/60"
                />

                <input
                  value={phone}
                  onChange={(event) => setPhone(event.target.value)}
                  placeholder="Телефон"
                  className="w-full rounded-2xl border border-[#b89c6d] bg-white/50 px-5 py-4 font-bold text-[#1f5f2a] outline-none placeholder:text-[#355f28]/60"
                />

                <input
                  value={address}
                  onChange={(event) => setAddress(event.target.value)}
                  placeholder="Адрес доставки"
                  className="w-full rounded-2xl border border-[#b89c6d] bg-white/50 px-5 py-4 font-bold text-[#1f5f2a] outline-none placeholder:text-[#355f28]/60"
                />

                <select
                  value={paymentMethod}
                  onChange={(event) => setPaymentMethod(event.target.value)}
                  className="w-full rounded-2xl border border-[#b89c6d] bg-white/50 px-5 py-4 font-bold text-[#1f5f2a] outline-none"
                >
                  <option>Наличными при получении</option>
                  <option>Онлайн по СБП</option>
                </select>

                <textarea
                  value={comment}
                  onChange={(event) => setComment(event.target.value)}
                  placeholder="Комментарий к заказу"
                  rows={4}
                  className="w-full resize-none rounded-2xl border border-[#b89c6d] bg-white/50 px-5 py-4 font-bold text-[#1f5f2a] outline-none placeholder:text-[#355f28]/60"
                />
              </div>

              <div className="mt-6 rounded-2xl bg-[#39A935] p-6 text-white shadow-2xl shadow-[#39A935]/30">
                <div className="text-sm font-bold uppercase tracking-[0.2em] text-white/80">
                  Общая сумма
                </div>

                <div className="mt-2 text-4xl font-black">{totalPrice} ₽</div>
              </div>

              <div className="mt-6 rounded-[2rem] border border-[#b89c6d] bg-white/35 p-5 shadow-lg backdrop-blur-xl">
  <p className="text-base font-black text-[#1f5f2a]">
    Информация о доставке
  </p>

  <div className="mt-3 space-y-2 text-sm font-semibold text-[#355f28]">
    <p>🚚 Стоимость доставки — 200₽</p>
    <p>🎁 При заказе от 5000₽ доставка бесплатная</p>
  </div>
</div>
              <button
                onClick={submitOrder}
                disabled={isSending}
                className="mt-6 flex w-full items-center justify-center gap-3 rounded-full bg-[#39A935] px-8 py-5 text-lg font-black text-white shadow-xl shadow-[#7fbf5d] transition hover:bg-[#2F922C] active:scale-95 disabled:opacity-60"
              >
                <Send size={20} />
                {isSending ? "Отправляем..." : "Оформить заказ"}
              </button>

              <button
                onClick={clearCart}
                className="mt-4 flex w-full items-center justify-center gap-2 rounded-full border border-[#b89c6d] bg-white/25 px-8 py-5 font-black text-[#1f7a32] transition hover:bg-white/35 active:scale-95"
              >
                Очистить корзину
              </button>
            </aside>
          </div>
        )}
      </section>

      <nav className="fixed bottom-4 left-1/2 z-50 flex w-[92%] max-w-md -translate-x-1/2 items-center justify-between rounded-full border border-[#b89c6d] bg-[#cdb78f]/85 px-3 py-3 shadow-2xl shadow-[#7c603b] backdrop-blur-2xl md:hidden">
        <a
          href="/"
          className="flex flex-col items-center gap-1 rounded-full px-3 py-2 text-xs font-bold text-[#355f28]"
        >
          <House size={20} />
          Главная
        </a>

        <a
          href="/#menu"
          className="flex flex-col items-center gap-1 rounded-full px-3 py-2 text-xs font-bold text-[#355f28]"
        >
          <Menu size={20} />
          Меню
        </a>

        <a
          href="/#contacts"
          className="flex flex-col items-center gap-1 rounded-full px-3 py-2 text-xs font-bold text-[#355f28]"
        >
          <Send size={20} />
          Контакты
        </a>

        <a
          href="/cart"
          className="flex flex-col items-center gap-1 rounded-full bg-[#39A935] px-4 py-2 text-xs font-black text-white shadow-lg shadow-[#7fbf5d]"
        >
          <ShoppingBag size={20} />
          Корзина
          {totalItems > 0 && <span>({totalItems})</span>}
        </a>
      </nav>
    </main>
  );
}
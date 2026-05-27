"use client";

import { useState } from "react";
import Image from "next/image";

import {
  ArrowLeft,
  Package,
  Info,
  Plus,
  ShoppingBag,
  House,
  Menu,
  Send,
  X,
  Minus,
  CheckCircle,
  CalendarDays,
} from "lucide-react";

import { sets } from "@/data/products";
import { useCart } from "@/context/CartContext";

type Product = (typeof sets)[number];

const scheduleMonth = "июнь";
const scheduleImage = "/images/pitanie.webp";

export default function SetsPage() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [addedMessage, setAddedMessage] = useState("");
  const [isScheduleOpen, setIsScheduleOpen] = useState(false);

  const { addToCart } = useCart();

  function openProduct(product: Product) {
    setSelectedProduct(product);
    setQuantity(1);
  }

  function closeProduct() {
    setSelectedProduct(null);
    setQuantity(1);
  }

  function showAddedMessage(title: string) {
    setAddedMessage(`${title} добавлен в корзину`);

    setTimeout(() => {
      setAddedMessage("");
    }, 1800);
  }

  function addProductToCart(product: Product, count = 1) {
    addToCart(
      {
        id: product.id,
        title: product.title,
        price: product.price,
        image: product.image,
      },
      count
    );

    showAddedMessage(product.title);
  }

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#cdb78f] pb-24 text-[#355f28]">
      {addedMessage && (
        <div className="fixed left-1/2 top-6 z-[200] flex w-[92%] max-w-md -translate-x-1/2 items-center gap-3 rounded-full border border-[#b89c6d] bg-white/90 px-5 py-4 font-black text-[#1f5f2a] shadow-2xl shadow-[#7c603b] backdrop-blur-2xl">
          <CheckCircle className="text-[#39A935]" size={24} />
          <span>{addedMessage}</span>
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
              className="flex items-center gap-2 rounded-full bg-[#39A935] px-6 py-3 text-white shadow-xl shadow-[#7fbf5d] transition hover:-translate-y-1 hover:bg-[#2F922C] active:scale-95"
            >
              <ShoppingBag size={18} />
              Корзина
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
          Назад в меню
        </a>

        <div className="mt-10 rounded-[3rem] border border-[#b89c6d] bg-white/20 p-8 text-center shadow-[0_30px_100px_rgba(74,53,24,0.22)] backdrop-blur-xl md:p-14">
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-[1.7rem] bg-[#b89c6d]/60">
            <Package size={36} className="text-[#39A935]" />
          </div>

          <h1 className="mt-8 text-5xl font-black tracking-[-0.05em] text-[#1f5f2a] md:text-7xl">
            Программы питания
          </h1>

          <p className="mx-auto mt-5 max-w-3xl text-lg font-semibold leading-8 text-[#355f28] md:text-xl">
            Готовые авторские программы питания для вас и вашего здоровья.
          </p>

          <button
            onClick={() => setIsScheduleOpen(true)}
            className="mx-auto mt-8 flex w-full max-w-xl items-center justify-center gap-3 rounded-full bg-[#39A935] px-8 py-5 text-lg font-black text-white shadow-xl shadow-[#7fbf5d] transition hover:bg-[#2F922C] active:scale-95"
          >
            <CalendarDays size={22} />
            Расписание программ на {scheduleMonth}
          </button>
        </div>

        <div className="mt-12 grid gap-7 md:grid-cols-3">
          {sets.map((product) => (
            <article
              key={product.id}
              className="group overflow-hidden rounded-[2.5rem] border border-[#b89c6d] bg-white/25 shadow-[0_24px_80px_rgba(74,53,24,0.20)] backdrop-blur-xl transition duration-300 hover:-translate-y-3"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.title}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                />

                <div className="absolute left-4 top-4 rounded-full bg-white/75 px-4 py-2 text-xs font-black text-[#39A935] backdrop-blur-xl">
                  ШПИНАТ
                </div>

                <div className="absolute bottom-4 right-4 rounded-2xl bg-[#39A935] px-6 py-4 shadow-2xl shadow-[#39A935]/40">
                  <div className="text-xs font-bold uppercase tracking-[0.2em] text-white/80">
                    Цена
                  </div>

                  <div className="mt-1 text-2xl font-black leading-none text-white">
                    {product.price} ₽
                  </div>
                </div>
              </div>

              <div className="p-7">
                <h2 className="text-2xl font-black text-[#1f5f2a]">
                  {product.title}
                </h2>

                <p className="mt-3 min-h-20 leading-7 text-[#355f28]">
                  {product.description}
                </p>

                <div className="mt-5 flex items-center gap-2 rounded-2xl bg-white/25 p-4 text-sm font-bold leading-6 text-[#355f28]">
                  <Info size={18} className="shrink-0 text-[#39A935]" />

                  {product.seasonal
                    ? "Состав набора может меняться в зависимости от сезона."
                    : "Постоянный состав."}
                </div>

                <div className="mt-6 grid grid-cols-2 gap-3">
                  <button
                    onClick={() => openProduct(product)}
                    className="rounded-full border border-[#b89c6d] bg-white/25 px-5 py-4 font-black text-[#1f7a32] transition hover:bg-white/35 active:scale-95"
                  >
                    Подробнее
                  </button>

                  <button
                    onClick={() => addProductToCart(product)}
                    className="flex items-center justify-center gap-2 rounded-full bg-[#39A935] px-5 py-4 font-black text-white shadow-lg shadow-[#7fbf5d] transition hover:bg-[#2F922C] active:scale-95"
                  >
                    <Plus size={18} />
                    В корзину
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {isScheduleOpen && (
        <div className="fixed inset-0 z-[120] flex items-end justify-center bg-black/50 px-4 pb-4 backdrop-blur-sm md:items-center md:pb-0">
          <div className="relative max-h-[92vh] w-full max-w-5xl overflow-y-auto rounded-[2.5rem] border border-[#b89c6d] bg-[#cdb78f] p-4 shadow-[0_40px_140px_rgba(0,0,0,0.35)]">
            <button
              onClick={() => setIsScheduleOpen(false)}
              className="absolute right-5 top-5 z-20 flex h-12 w-12 items-center justify-center rounded-full bg-white/80 text-[#1f5f2a] shadow-xl backdrop-blur-xl transition hover:scale-105 active:scale-95"
            >
              <X size={24} />
            </button>

            <div className="rounded-[2rem] bg-white/25 p-4 backdrop-blur-xl md:p-6">
              <div className="mb-5 text-center">
                <div className="inline-flex rounded-full bg-white/50 px-5 py-2 text-xs font-black uppercase tracking-[0.2em] text-[#39A935]">
                  Расписание
                </div>

                <h2 className="mt-4 text-3xl font-black text-[#1f5f2a] md:text-5xl">
                  Расписание программ на {scheduleMonth}
                </h2>
              </div>

              <img
                src={scheduleImage}
                alt={`Расписание программ на ${scheduleMonth}`}
                className="mx-auto max-h-[72vh] w-full rounded-[1.8rem] object-contain shadow-2xl"
              />
            </div>
          </div>
        </div>
      )}

      {selectedProduct && (
        <div className="fixed inset-0 z-[100] flex items-end justify-center bg-black/45 px-4 pb-4 backdrop-blur-sm md:items-center md:pb-0">
          <div className="relative max-h-[92vh] w-full max-w-4xl overflow-y-auto rounded-[2.5rem] border border-[#b89c6d] bg-[#cdb78f] p-4 shadow-[0_40px_140px_rgba(0,0,0,0.35)]">
            <button
              onClick={closeProduct}
              className="absolute right-5 top-5 z-20 flex h-12 w-12 items-center justify-center rounded-full bg-white/80 text-[#1f5f2a] shadow-xl backdrop-blur-xl transition hover:scale-105 active:scale-95"
            >
              <X size={24} />
            </button>

            <div className="grid gap-6 md:grid-cols-[0.95fr_1.05fr]">
              <div className="overflow-hidden rounded-[2rem]">
                <img
                  src={selectedProduct.image}
                  alt={selectedProduct.title}
                  className="h-80 w-full object-cover md:h-full"
                />
              </div>

              <div className="rounded-[2rem] bg-white/30 p-6 backdrop-blur-xl md:p-8">
                <div className="inline-flex rounded-full bg-white/50 px-4 py-2 text-xs font-black uppercase tracking-[0.2em] text-[#39A935]">
                  Набор ШПИНАТ
                </div>

                <h2 className="mt-5 text-4xl font-black tracking-[-0.04em] text-[#1f5f2a] md:text-5xl">
                  {selectedProduct.title}
                </h2>

                <p className="mt-5 whitespace-pre-line text-lg font-semibold leading-8 text-[#355f28]">
                  {selectedProduct.fullDescription}
                  </p>

                <div className="mt-6 rounded-2xl bg-white/35 p-5">
                  <div className="flex items-start gap-3">
                    <Info size={22} className="mt-1 shrink-0 text-[#39A935]" />

                    <p className="font-bold leading-7 text-[#355f28]">
                      {selectedProduct.seasonal
                        ? "Состав набора может меняться в зависимости от сезона и доступности свежих ингредиентов."
                        : "Набор имеет постоянный состав."}
                    </p>
                  </div>
                </div>

                <div className="mt-6 flex items-center justify-between rounded-2xl bg-[#39A935] p-5 text-white shadow-2xl shadow-[#39A935]/30">
                  <div>
                    <div className="text-xs font-bold uppercase tracking-[0.2em] text-white/80">
                      Цена за 1 шт.
                    </div>

                    <div className="mt-1 text-3xl font-black">
                      {selectedProduct.price} ₽
                    </div>
                  </div>

                  <div className="flex items-center gap-3 rounded-full bg-white/20 p-2">
                    <button
                      onClick={() =>
                        setQuantity((value) => Math.max(1, value - 1))
                      }
                      className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#1f5f2a] transition active:scale-90"
                    >
                      <Minus size={18} />
                    </button>

                    <div className="min-w-8 text-center text-xl font-black">
                      {quantity}
                    </div>

                    <button
                      onClick={() => setQuantity((value) => value + 1)}
                      className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#1f5f2a] transition active:scale-90"
                    >
                      <Plus size={18} />
                    </button>
                  </div>
                </div>

                <div className="mt-5 rounded-2xl bg-white/35 p-5 text-center">
                  <div className="text-sm font-bold uppercase tracking-[0.2em] text-[#39A935]">
                    Итого
                  </div>

                  <div className="mt-2 text-4xl font-black text-[#1f5f2a]">
                    {selectedProduct.price * quantity} ₽
                  </div>
                </div>

                <button
                  onClick={() => {
                    addProductToCart(selectedProduct, quantity);
                    closeProduct();
                  }}
                  className="mt-6 flex w-full items-center justify-center gap-3 rounded-full bg-[#39A935] px-8 py-5 text-lg font-black text-white shadow-xl shadow-[#7fbf5d] transition hover:bg-[#2F922C] active:scale-95"
                >
                  <ShoppingBag size={22} />
                  Добавить в корзину
                </button>
                <button
  onClick={closeProduct}
  className="mt-4 flex w-full items-center justify-center rounded-full border border-[#b89c6d] bg-white/35 px-8 py-5 text-lg font-black text-[#1f5f2a] shadow-lg transition hover:bg-white/50 active:scale-95"
>
  Закрыть
</button>
              </div>
            </div>
          </div>
        </div>
      )}

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
          className="flex flex-col items-center gap-1 rounded-full bg-[#39A935] px-4 py-2 text-xs font-black text-white shadow-lg shadow-[#7fbf5d]"
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
          className="flex flex-col items-center gap-1 rounded-full px-3 py-2 text-xs font-bold text-[#355f28]"
        >
          <ShoppingBag size={20} />
          Корзина
        </a>
      </nav>
    </main>
  );
}
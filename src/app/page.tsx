import Image from "next/image";

import {
  ArrowRight,
  Leaf,
  Package,
  Salad,
  Phone,
  MessageCircle,
  Send,
  ShoppingBag,
  Sparkles,
  House,
  Menu,
  Wheat,
  HeartPulse,
} from "lucide-react";

const menuSections = [
  {
    icon: Salad,
    title: "Блюда и ПП-боксы",
    text: "Авторские полезные блюда из свежих ингредиентов.",
    href: "/menu/dishes",
  },
  {
    icon: Package,
    title: "Программы питания",
    text: "Продуманные программы правильного питания для вас и вашего здоровья.",
    href: "/menu/sets",
  },
  {
    icon: Leaf,
    title: "Эко-продукты",
    text: "Домашние яйца, хлеб, зелень, рассада и натуральные продукты.",
    href: "/menu/products",
  },
];

const contacts = [
  {
    icon: Phone,
    title: "Телефон",
    text: "+7 (999) 999-99-99",
    href: "tel:+79656118254",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp",
    text: "Написать в WhatsApp",
    href: "https://wa.me/79656118254",
  },
  {
    icon: Send,
    title: "Telegram",
    text: "Открыть Telegram",
    href: "https://t.me/tatyana341",
  },
];

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#cdb78f] pb-24 text-[#355f28]">
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
      >
        <div className="absolute left-[-160px] top-[-120px] h-[460px] w-[460px] rounded-full bg-[#b89c6d]/60 blur-3xl" />
        <div className="absolute right-[-180px] top-[18%] h-[520px] w-[520px] rounded-full bg-[#c9ae7d]/50 blur-3xl" />
        <div className="absolute bottom-[-180px] left-[15%] h-[520px] w-[520px] rounded-full bg-[#a88b5b]/40 blur-3xl" />
      </div>

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

            <a href="#menu" className="transition hover:text-[#39A935]">
              Меню
            </a>

            <a href="#contacts" className="transition hover:text-[#39A935]">
              Контакты
            </a>

            <a
              href="/cart"
              className="flex items-center gap-2 rounded-full bg-[#39A935] px-6 py-3 text-white shadow-xl shadow-[#7fbf5d] transition hover:-translate-y-1 hover:bg-[#2F922C]"
            >
              <ShoppingBag size={18} />
              Корзина
            </a>
          </nav>
        </div>
      </header>

      <section
        id="home"
        className="relative mx-auto flex min-h-screen max-w-7xl items-center justify-center px-5 pb-16 pt-52 text-center md:grid md:grid-cols-[0.95fr_1.05fr] md:gap-14 md:pt-48 md:text-left"
      >
        <div className="absolute left-1/2 top-24 h-[360px] w-[360px] -translate-x-1/2 rounded-full bg-[#b89c6d]/50 blur-3xl md:left-[-180px] md:top-10 md:h-[520px] md:w-[520px] md:translate-x-0" />

        <div className="absolute bottom-20 right-[-140px] h-[420px] w-[420px] rounded-full bg-[#c9ae7d]/40 blur-3xl md:right-[-220px] md:top-32 md:h-[620px] md:w-[620px]" />

        <div className="relative z-10 mx-auto flex max-w-xl flex-col items-center md:mx-0 md:max-w-none md:items-start">
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#b89c6d] bg-white/25 px-5 py-2 text-center text-xs font-bold text-[#39A935] shadow-sm backdrop-blur-xl md:text-sm">
            <Sparkles size={16} />
            Натуральное и ползеное питание нового уровня
          </div>

          <h1 className="max-w-3xl text-center text-[44px] font-black leading-[0.95] tracking-[-0.055em] text-[#1f5f2a] md:text-left md:text-8xl">
            Свежесть,
            <br />
            вкус и забота
            <span className="mt-3 block text-[#39A935]">
              в каждой детали
            </span>
          </h1>

          <p className="mx-auto mt-8 max-w-md text-center text-lg leading-8 text-[#355f28] md:mx-0 md:max-w-xl md:text-left md:text-xl md:leading-9">
            «ШПИНАТ» — полезные блюда и натуральные
            эко-продукты с красивой подачей и честным составом.
          </p>

          <div className="mt-10 flex w-full flex-col gap-4 sm:max-w-md md:w-auto md:flex-row md:sm:max-w-none">
            <a
              href="#menu"
              className="group flex w-full items-center justify-center gap-3 rounded-full bg-[#39A935] px-9 py-5 text-lg font-black text-white shadow-[0_24px_70px_rgba(57,169,53,0.28)] transition hover:-translate-y-1 hover:bg-[#2F922C] md:w-auto"
            >
              Смотреть меню
              <ArrowRight
                size={20}
                className="transition group-hover:translate-x-1"
              />
            </a>

            <a
              href="#contacts"
              className="w-full rounded-full border border-[#b89c6d] bg-white/20 px-9 py-5 text-center text-lg font-black text-[#1f7a32] shadow-xl shadow-[#9c8157] backdrop-blur-xl transition hover:-translate-y-1 hover:bg-white/30 md:w-auto"
            >
              Связаться
            </a>
          </div>

          <div className="mt-10 grid w-full max-w-md grid-cols-3 gap-3 md:max-w-xl">
            <div className="rounded-3xl border border-[#b89c6d] bg-white/20 p-4 text-center shadow-lg shadow-[#9c8157] backdrop-blur-xl">
              <Leaf className="mx-auto text-[#39A935]" size={24} />
              <div className="mt-2 text-xs font-black text-[#1f5f2a]">
                Эко
              </div>
            </div>

            <div className="rounded-3xl border border-[#b89c6d] bg-white/20 p-4 text-center shadow-lg shadow-[#9c8157] backdrop-blur-xl">
              <HeartPulse className="mx-auto text-[#39A935]" size={24} />
              <div className="mt-2 text-xs font-black text-[#1f5f2a]">
                Здоровье
              </div>
            </div>

            <div className="rounded-3xl border border-[#b89c6d] bg-white/20 p-4 text-center shadow-lg shadow-[#9c8157] backdrop-blur-xl">
              <Wheat className="mx-auto text-[#39A935]" size={24} />
              <div className="mt-2 text-xs font-black text-[#1f5f2a]">
                Натурально
              </div>
            </div>
          </div>
        </div>

        <div className="relative z-10 hidden md:block">
          <div className="relative overflow-hidden rounded-[3.5rem] border border-white/30 bg-white/20 p-4 shadow-[0_40px_120px_rgba(74,53,24,0.28)] backdrop-blur-2xl">
            <img
              src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=1300&q=90"
              alt="Натуральные продукты ШПИНАТ"
              className="h-[620px] w-full rounded-[3rem] object-cover"
            />

            <div className="absolute left-10 top-10 rounded-[2rem] bg-white/55 p-6 shadow-2xl backdrop-blur-xl">
              <Image
                src="/images/logo.png"
                alt="ШПИНАТ"
                width={210}
                height={100}
                className="h-24 w-auto object-contain"
              />
            </div>

            <div className="absolute bottom-10 left-10 right-10 rounded-[2.2rem] border border-white/20 bg-white/45 p-7 shadow-2xl backdrop-blur-2xl">
              <div className="flex items-start justify-between gap-8">
                <div>
                  <div className="text-sm font-black uppercase tracking-[0.25em] text-[#39A935]">
                    Сезонное меню
                  </div>

                  <div className="mt-3 text-3xl font-black text-[#1f5f2a]">
                    Состав меняется по сезону
                  </div>

                  <p className="mt-3 max-w-md leading-7 text-[#355f28]">
                    Мы используем свежие продукты, поэтому ингридиенты и состав блюд и
                   может меняться в зависимости от сезона.
                  </p>
                </div>

                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-[#b89c6d]/60">
                  <Leaf size={30} className="text-[#39A935]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="menu"
        className="relative mx-auto max-w-7xl px-5 py-24 md:py-28"
      >
        <div className="mx-auto mb-14 max-w-3xl text-center md:mb-16">
          <div className="inline-flex rounded-full bg-[#b89c6d]/60 px-5 py-2 text-sm font-black uppercase tracking-[0.25em] text-[#39A935] shadow-sm">
            Меню
          </div>

          <h2 className="mt-5 text-4xl font-black tracking-[-0.04em] text-[#1f5f2a] md:text-6xl">
            Меню ШПИНАТ
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-lg font-semibold leading-8 text-[#355f28] md:text-xl">
            Выберите раздел и перейдите на отдельную страницу с товарами.
          </p>
        </div>

        <div className="grid gap-7 md:grid-cols-3">
          {menuSections.map((item) => {
            const Icon = item.icon;

            return (
              <a
                key={item.title}
                href={item.href}
                className="group rounded-[2.5rem] border border-[#b89c6d] bg-white/25 p-8 text-center shadow-[0_24px_80px_rgba(74,53,24,0.20)] backdrop-blur-xl transition duration-300 hover:-translate-y-3 md:text-left"
              >
                <div className="mx-auto mb-8 flex h-20 w-20 items-center justify-center rounded-[1.7rem] bg-[#b89c6d]/60 md:mx-0">
                  <Icon size={38} className="text-[#39A935]" />
                </div>

                <h3 className="text-3xl font-black text-[#1f5f2a]">
                  {item.title}
                </h3>

                <p className="mt-4 min-h-28 leading-8 text-[#355f28]">
                  {item.text}
                </p>

                <div className="mt-8 flex w-full items-center justify-center gap-2 rounded-full bg-[#39A935] px-6 py-4 font-black text-white transition group-hover:bg-[#2F922C]">
                  Открыть раздел
                  <ArrowRight size={18} />
                </div>
              </a>
            );
          })}
        </div>
      </section>

      <section id="contacts" className="mx-auto max-w-7xl px-5 pb-28">
        <div className="overflow-hidden rounded-[3rem] border border-[#b89c6d] bg-white/20 p-7 shadow-[0_30px_100px_rgba(74,53,24,0.22)] backdrop-blur-xl md:p-14">
          <div className="mb-12 text-center md:text-left">
            <div className="inline-flex rounded-full bg-[#b89c6d]/60 px-5 py-2 text-sm font-black uppercase tracking-[0.25em] text-[#39A935] shadow-sm">
              Контакты
            </div>

            <h2 className="mt-5 text-4xl font-black tracking-[-0.04em] text-[#1f5f2a] md:text-6xl">
              Свяжитесь с нами
            </h2>

            <p className="mt-4 max-w-3xl text-lg font-semibold leading-8 text-[#355f28] md:text-xl">
              Выберите удобный способ связи для заказа или консультации.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {contacts.map((contact) => {
              const Icon = contact.icon;

              return (
                <a
                  key={contact.title}
                  href={contact.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group rounded-[2.2rem] border border-[#b89c6d] bg-white/20 p-8 text-center shadow-xl shadow-[#8f7046] backdrop-blur-xl transition hover:-translate-y-2 md:text-left"
                >
                  <div className="mx-auto flex h-18 w-18 items-center justify-center rounded-2xl bg-[#b89c6d]/60 p-5 md:mx-0">
                    <Icon size={34} className="text-[#39A935]" />
                  </div>

                  <div className="mt-7 text-3xl font-black text-[#1f5f2a]">
                    {contact.title}
                  </div>

                  <div className="mt-3 text-[#355f28]">{contact.text}</div>

                  <div className="mt-8 flex items-center justify-center gap-2 font-black text-[#39A935] md:justify-start">
                    Перейти
                    <ArrowRight
                      size={18}
                      className="transition group-hover:translate-x-1"
                    />
                  </div>
                </a>
              );
            })}
          </div>

<div className="mt-12 flex justify-center">
  <a
    href="https://t.me/ecoclubbb"
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center justify-center gap-3 rounded-full bg-[#39A935] px-10 py-5 text-lg font-black text-white shadow-xl shadow-[#7fbf5d] transition hover:scale-[1.03] hover:bg-[#2F922C] active:scale-95"
  >
    <Send size={24} />
    Наш Telegram-канал
  </a>
</div>

        </div>
      </section>

      <section id="cart" className="mx-auto max-w-7xl px-5 pb-32">
        <div className="rounded-[3rem] border border-[#b89c6d] bg-white/20 p-8 text-center shadow-[0_30px_100px_rgba(74,53,24,0.22)] backdrop-blur-xl md:p-14">
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-[1.7rem] bg-[#b89c6d]/60">
            <ShoppingBag size={36} className="text-[#39A935]" />
          </div>

          <h2 className="mt-8 text-4xl font-black tracking-[-0.04em] text-[#1f5f2a] md:text-6xl">
            Корзина
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-[#355f28]">
            Корзину вынесем на отдельную страницу и подключим подсчёт суммы.
          </p>

          <a
            href="/cart"
            className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-[#39A935] px-8 py-4 font-black text-white shadow-xl shadow-[#7fbf5d] transition hover:bg-[#2F922C]"
          >
            Перейти в корзину
            <ArrowRight size={18} />
          </a>
        </div>
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
          href="#menu"
          className="flex flex-col items-center gap-1 rounded-full px-3 py-2 text-xs font-bold text-[#355f28]"
        >
          <Menu size={20} />
          Меню
        </a>

        <a
          href="#contacts"
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
        </a>
      </nav>
    </main>
  );
}
import type { Metadata } from "next";
import "./globals.css";

import { CartProvider } from "@/context/CartContext";

export const metadata: Metadata = {
  metadataBase: new URL("https://shpinat.shop"),

  title: {
    default: "ШПИНАТ — правильное питание с доставкой",
    template: "%s | ШПИНАТ",
  },

  description:
    "ШПИНАТ — эко-продукты, полезное питание, ПП-боксы и готовые наборы с доставкой. Свежие продукты и забота о здоровье каждый день.",

  keywords: [
    "ШПИНАТ",
    "правильное питание",
    "полезное питание",
    "эко продукты",
    "ПП бокс",
    "ПП-боксы",
    "готовые наборы еды",
    "доставка еды",
    "здоровое питание",
  ],

  openGraph: {
    title: "ШПИНАТ — правильное питание с доставкой",
    description:
      "Эко-продукты, полезное питание, ПП-боксы и готовые наборы с доставкой.",
    url: "https://shpinat.shop",
    siteName: "ШПИНАТ",
    locale: "ru_RU",
    type: "website",
  },

  robots: {
    index: true,
    follow: true,
  },

  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body>
        <CartProvider>
          <div className="min-h-screen">
            {children}

            <footer className="border-t border-[#b89c6d]/40 bg-[#d7c29a] px-5 pb-32 pt-6 text-center md:pb-6">
              <div className="mx-auto flex max-w-7xl flex-col items-center justify-center gap-3 text-sm font-bold text-[#355f28] md:flex-row md:gap-8">
                <a href="/privacy" className="transition hover:text-[#39A935]">
                  Политика конфиденциальности
                </a>

                <a href="/terms" className="transition hover:text-[#39A935]">
                  Пользовательское соглашение
                </a>
              </div>
            </footer>
          </div>
        </CartProvider>
      </body>
    </html>
  );
}
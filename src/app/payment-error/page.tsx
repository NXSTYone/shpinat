import Image from "next/image";
import { AlertCircle, ArrowRight } from "lucide-react";

export default function PaymentErrorPage() {
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
          <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-[2rem] bg-white/40">
            <AlertCircle size={52} className="text-[#1f5f2a]" />
          </div>

          <h1 className="mt-8 text-4xl font-black text-[#1f5f2a] md:text-6xl">
            Оплата не прошла
          </h1>

          <p className="mx-auto mt-5 max-w-xl text-lg font-semibold leading-8">
            Платёж был отменён или не завершён. Вы можете вернуться в корзину и
            попробовать снова.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <a
              href="/cart"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#39A935] px-8 py-5 font-black text-white shadow-xl shadow-[#7fbf5d]"
            >
              Вернуться в корзину
              <ArrowRight size={18} />
            </a>

            <a
              href="/"
              className="inline-flex items-center justify-center rounded-full border border-[#b89c6d] bg-white/30 px-8 py-5 font-black text-[#1f7a32]"
            >
              На главную
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
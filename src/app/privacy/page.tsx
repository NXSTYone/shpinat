import Image from "next/image";

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-[#cdb78f] px-5 py-10 text-[#355f28]">
      <div className="mx-auto max-w-4xl rounded-[2rem] bg-white/35 p-6 shadow-2xl backdrop-blur-xl md:p-10">
        <a href="/" className="mb-8 inline-flex">
          <Image
            src="/images/logo.png"
            alt="ШПИНАТ"
            width={260}
            height={120}
            className="h-28 w-auto object-contain"
          />
        </a>

        <h1 className="text-4xl font-black text-[#1f5f2a]">
          Политика конфиденциальности
        </h1>

        <p className="mt-4 leading-8">
          Настоящая политика конфиденциальности описывает порядок обработки
          персональных данных пользователей сайта «ШПИНАТ».
        </p>

        <h2 className="mt-8 text-2xl font-black text-[#1f5f2a]">
          1. Какие данные мы собираем
        </h2>

        <p className="mt-3 leading-8">
          При оформлении заказа пользователь может передать имя, номер телефона,
          адрес доставки, комментарий к заказу и состав заказа.
        </p>

        <h2 className="mt-8 text-2xl font-black text-[#1f5f2a]">
          2. Для чего используются данные
        </h2>

        <p className="mt-3 leading-8">
          Данные используются только для обработки заказа, связи с клиентом,
          уточнения деталей и доставки продукции.
        </p>

        <h2 className="mt-8 text-2xl font-black text-[#1f5f2a]">
          3. Передача данных третьим лицам
        </h2>

        <p className="mt-3 leading-8">
          Мы не передаём персональные данные третьим лицам, за исключением
          случаев, когда это необходимо для исполнения заказа или требуется по
          закону.
        </p>

        <h2 className="mt-8 text-2xl font-black text-[#1f5f2a]">
          4. Хранение данных
        </h2>

        <p className="mt-3 leading-8">
          Данные заказа могут передаваться в Telegram для уведомления о новом
          заказе и хранятся только в объёме, необходимом для обработки заказа.
        </p>

        <h2 className="mt-8 text-2xl font-black text-[#1f5f2a]">
          5. Права пользователя
        </h2>

        <p className="mt-3 leading-8">
          Пользователь может запросить удаление или уточнение своих данных,
          связавшись с нами любым доступным способом.
        </p>

        <h2 className="mt-8 text-2xl font-black text-[#1f5f2a]">
          6. Контакты
        </h2>

        <p className="mt-3 leading-8">
          По вопросам обработки персональных данных можно связаться с нами через
          телефон, WhatsApp или Telegram, указанные на сайте.
        </p>

        <p className="mt-10 text-sm font-bold text-[#355f28]/80">
          Дата публикации: 2026 г.
        </p>
      </div>
    </main>
  );
}
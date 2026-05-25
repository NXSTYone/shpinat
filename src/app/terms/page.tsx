import Image from "next/image";

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-[#cdb78f] px-4 py-8 text-[#355f28]">
      <div className="mx-auto w-full max-w-4xl rounded-[2rem] bg-white/35 p-6 shadow-2xl backdrop-blur-xl md:p-10">
        <a href="/" className="mb-8 flex justify-center md:justify-start">
          <Image
            src="/images/logo.png"
            alt="ШПИНАТ"
            width={260}
            height={120}
            className="h-24 w-auto object-contain md:h-28"
          />
        </a>

        <h1 className="break-words text-3xl font-black leading-tight tracking-[-0.03em] text-[#1f5f2a] md:text-5xl">
          Пользовательское соглашение
        </h1>

        <p className="mt-5 text-base leading-8 md:text-lg">
          Настоящее пользовательское соглашение регулирует порядок использования
          сайта «ШПИНАТ», оформления заказов, оплаты и получения продукции.
        </p>

        <h2 className="mt-8 text-2xl font-black leading-tight text-[#1f5f2a] md:text-3xl">
          1. Общие положения
        </h2>

        <p className="mt-3 leading-8">
          Используя сайт, пользователь подтверждает, что ознакомился с условиями
          настоящего соглашения и принимает их.
        </p>

        <h2 className="mt-8 text-2xl font-black leading-tight text-[#1f5f2a] md:text-3xl">
          2. Оформление заказа
        </h2>

        <p className="mt-3 leading-8">
          Пользователь самостоятельно выбирает товары, указывает контактные
          данные и отправляет заказ через форму на сайте. После оформления заказа
          представитель «ШПИНАТ» может связаться с пользователем для уточнения
          деталей.
        </p>

        <h2 className="mt-8 text-2xl font-black leading-tight text-[#1f5f2a] md:text-3xl">
          3. Состав и наличие продукции
        </h2>

        <p className="mt-3 leading-8">
          Состав блюд, наборов и эко-продуктов может меняться в зависимости от
          сезона, наличия свежих ингредиентов и особенностей производства.
        </p>

        <h2 className="mt-8 text-2xl font-black leading-tight text-[#1f5f2a] md:text-3xl">
          4. Оплата
        </h2>

        <p className="mt-3 leading-8">
          Оплата может производиться наличными при получении либо онлайн, если
          соответствующий способ оплаты доступен на сайте. Итоговая сумма заказа
          отображается в корзине перед оформлением.
        </p>

        <h2 className="mt-8 text-2xl font-black leading-tight text-[#1f5f2a] md:text-3xl">
          5. Доставка и получение
        </h2>

        <p className="mt-3 leading-8">
          Условия доставки, время получения и детали передачи заказа
          согласовываются с пользователем после оформления заказа.
        </p>

        <h2 className="mt-8 text-2xl font-black leading-tight text-[#1f5f2a] md:text-3xl">
          6. Возврат и отмена заказа
        </h2>

        <p className="mt-3 leading-8">
          Пользователь может отменить заказ до начала его приготовления или
          сборки. Возврат денежных средств осуществляется в соответствии с
          применимыми правилами и способом оплаты.
        </p>

        <h2 className="mt-8 text-2xl font-black leading-tight text-[#1f5f2a] md:text-3xl">
          7. Персональные данные
        </h2>

        <p className="mt-3 leading-8">
          При оформлении заказа пользователь передаёт имя, телефон, адрес и
          комментарий к заказу. Обработка данных осуществляется согласно
          политике конфиденциальности.
        </p>

        <h2 className="mt-8 text-2xl font-black leading-tight text-[#1f5f2a] md:text-3xl">
          8. Контакты
        </h2>

        <p className="mt-3 leading-8">
          По вопросам заказов, оплаты, доставки и обработки данных пользователь
          может связаться через контакты, указанные на сайте.
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <a
            href="/privacy"
            className="rounded-full bg-[#39A935] px-6 py-4 text-center font-black text-white"
          >
            Политика конфиденциальности
          </a>

          <a
            href="/"
            className="rounded-full border border-[#b89c6d] bg-white/30 px-6 py-4 text-center font-black text-[#1f7a32]"
          >
            На главную
          </a>
        </div>

        <p className="mt-10 text-sm font-bold text-[#355f28]/80">
          Дата публикации: 2026 г.
          Шарипова Татьяна Владимировна
          ИНН 162802340528
        </p>
      </div>
    </main>
  );
}
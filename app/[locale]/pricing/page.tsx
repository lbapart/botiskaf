import React from "react";

export default function PricingPage() {
  const monthlyPrice = 20; // Базовая цена за месяц
  const threeMonthsPrice = monthlyPrice * 3 * 0.9; // Скидка 10% за 3 месяца
  const sixMonthsPrice = monthlyPrice * 6 * 0.85; // Скидка 15% за 6 месяцев

  return (
    <div className="min-h-screen flex flex-col items-center justify-start bg-white text-gray-800">
      <main className="max-w-4xl mx-auto w-full space-y-8 mt-8 px-4">
        <section className="text-center">
          <h1 className="text-4xl font-bold mb-4">Цены</h1>
          <p className="text-lg text-gray-600 mb-8">
            Выберите подходящий тарифный план для доступа к нашему боту.
          </p>
          {/* Таблица цен */}
          <div className="overflow-x-auto">
            <table className="min-w-full border-collapse border border-gray-300">
              <thead>
                <tr>
                  <th className="border border-gray-300 px-6 py-3 bg-gray-100 text-left text-lg font-semibold">Тариф</th>
                  <th className="border border-gray-300 px-6 py-3 bg-gray-100 text-left text-lg font-semibold">Стоимость</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-6 py-3">1 месяц</td>
                  <td className="border border-gray-300 px-6 py-3">${monthlyPrice.toFixed(2)}</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-6 py-3">3 месяца (скидка 10%)</td>
                  <td className="border border-gray-300 px-6 py-3">${threeMonthsPrice.toFixed(2)}</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-6 py-3">6 месяцев (скидка 15%)</td>
                  <td className="border border-gray-300 px-6 py-3">${sixMonthsPrice.toFixed(2)}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="text-center">
          {/* Ссылка на бота */}
          <p className="text-lg">
            Покупка подписки осуществляется в нашем Telegram-боте:{" "}
            <a
              href="https://t.me/BotiskafTON_bot"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent-foreground underline"
            >
              Botiskaf (@BotiskafTON_bot)
            </a>
          </p>
          {/* Информация о пробной подписке */}
          <div className="mt-6">
            <p className="text-gray-700">
              <strong>Пробная подписка</strong> на 7 дней доступна бесплатно, если вы зарегистрировались на Kucoin{" "}
              <a
                href="https://www.kucoin.com/r/rf/QBSWD41C"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent-foreground underline"
              >
                по нашей реферальной ссылке.
              </a>
            </p>
            <p className="text-gray-700 mt-2">
              Для получения пробной подписки, пожалуйста, обратитесь в нашу{" "}
              <a
                href="https://t.me/lbapart"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent-foreground underline"
              >
                поддержку в Telegram
              </a>.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}

import React from "react";
import { getMessages } from "next-intl/server";
import { Messages } from "@/types/messages";
import { useTranslations } from "next-intl";
import { links } from "@/config/site";

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const messages = await getMessages({ locale }) as Messages;
  const title = messages.NavBarLinks["pricing"];
  const description = messages.NavBarLinks["pricing_description"];
  const keywords = messages.NavBarLinks["pricing_keywords"];

  return {
    title,
    description,
    keywords,
    openGraph: {
      title,
      description,
      url: `https://botiskaf.com/${locale}/pricing`,
      type: 'website',
      locale,
    },
  };
}

export default function PricingPage() {
  const monthlyPrice = 20; // Базовая цена за месяц
  const threeMonthsPrice = monthlyPrice * 3 * 0.9; // Скидка 10% за 3 месяца
  const sixMonthsPrice = monthlyPrice * 6 * 0.85; // Скидка 15% за 6 месяцев
  const t = useTranslations("PricingPage");

  return (
    <>
      <div className="min-h-screen flex flex-col items-center justify-start bg-white text-gray-800">
        <main className="max-w-4xl mx-auto w-full space-y-8 mt-8 px-4">
          <section className="text-center">
            <h1 className="text-4xl font-bold mb-4">{t("title")}</h1>
            <p className="text-lg text-gray-600 mb-8">
              {t("page_description")}
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
                    <td className="border border-gray-300 px-6 py-3">{t("one_month")}</td>
                    <td className="border border-gray-300 px-6 py-3">${monthlyPrice.toFixed(2)}</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-6 py-3">{t("three_months")} ({t("discount")} 10%)</td>
                    <td className="border border-gray-300 px-6 py-3">${threeMonthsPrice.toFixed(2)}</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-6 py-3">{t("six_months")} ({t("discount")} 15%)</td>
                    <td className="border border-gray-300 px-6 py-3">${sixMonthsPrice.toFixed(2)}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className="text-center">
            {/* Ссылка на бота */}
            <p className="text-lg">
              {t("additional_info_one")}
              <a
                href={links.bot_link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent-foreground underline"
              >
                {t("botiskaf")}
              </a>
            </p>
            {/* Информация о пробной подписке */}
            <div className="mt-6">
              <p className="text-gray-700">
                <strong>{t("trial_subscription")}</strong> {t("trial_subscription_description")}
                <a
                  href={links.kucoin_link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent-foreground underline"
                >
                  {t("our_referal_link")}
                </a>
              </p>
              <p className="text-gray-700 mt-2">
                {t("to_get_trial")}
                <a
                  href="https://t.me/lbapart"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent-foreground underline"
                >
                  {t("support_at_telegram")}
                </a>.
              </p>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}

import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { getMessages } from "next-intl/server";
import { Messages } from "@/types/messages";

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const messages = await getMessages({ locale }) as Messages;
  const title = messages.NavBarLinks["useful-info"];
  const description = messages.NavBarLinks["useful-info_description"];
  const keywords = messages.NavBarLinks["useful-info_keywords"];

  return {
    title,
    description,
    keywords,
    openGraph: {
      title,
      description,
      url: `https://botiskaf.com/${locale}/useful-info`,
      type: 'website',
      locale,
    },
  };
}

export default function UsefulInformationPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-start bg-white text-gray-800">
      {/* Main Content */}
      <main className="max-w-4xl mx-auto w-full space-y-8 mt-8 px-4">
        <section>
          {/* Рекомендованные настройки */}
          <Card className="bg-white border border-gray-200 shadow-sm rounded-lg">
            <CardHeader>
              <CardTitle className="text-2xl font-bold">Рекомендованные настройки</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4 text-sm text-gray-600">
                Здесь <strong>X</strong> обозначает сумму покупки, которую вы указываете в настройках. Например, если вы выбрали сумму покупки 5 USDT, то ваш рекомендуемый депозит будет от 200 USDT до 250 USDT.
              </p>
              <ul className="list-disc ml-6 mt-2 space-y-2">
                <li>Сумма покупки: <strong>X USDT</strong></li>
                <li>Депозит: <strong> от 40 * X до 50 * X USDT</strong></li>
                <li>Процент прибыли: <strong>0.7%</strong></li>
                <li>Шаг покупки: <strong>1%</strong></li>
              </ul>
            </CardContent>
          </Card>
        </section>

        <section>
          {/* Полезные ссылки */}
          <Card className="bg-white border border-gray-200 shadow-sm rounded-lg">
            <CardHeader>
              <CardTitle className="text-2xl font-bold">Полезные ссылки</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc ml-6 mt-2 space-y-2">
                <li>
                  <a 
                    href="https://www.kucoin.com/r/rf/QBSWD41C" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-accent-foreground underline"
                  >
                    Регистрация на Kucoin
                  </a>
                </li>
                <li>
                  <a 
                    href="https://t.me/BotiskafTON_bot" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-accent-foreground underline"
                  >
                    Telegram-бот Botiskaf
                  </a>
                </li>
                <li>
                  <a 
                    href="https://t.me/lbapart" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-accent-foreground underline"
                  >
                    Поддержка в Telegram
                  </a>
                </li>
              </ul>
            </CardContent>
          </Card>
        </section>
      </main>
    </div>
  );
}

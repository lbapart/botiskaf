import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
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
  const t = useTranslations("UsefulInfoPage");

  return (
    <div className="min-h-screen flex flex-col items-center justify-start bg-white text-gray-800">
      {/* Main Content */}
      <main className="max-w-4xl mx-auto w-full space-y-8 mt-8 px-4">
        <section>
          {/* Рекомендованные настройки */}
          <Card className="bg-white border border-gray-200 shadow-sm rounded-lg">
            <CardHeader>
              <CardTitle className="text-2xl font-bold">{t("recommended_settigs")}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4 text-sm text-gray-600">
                {t("here")} <strong>X</strong> {t("settings_description")}
              </p>
              <ul className="list-disc ml-6 mt-2 space-y-2">
                <li>{t("buy_amount")}: <strong>X USDT</strong></li>
                <li>{t("deposit")}: <strong> {t("from")} 40 * X {t("to")} 50 * X USDT</strong></li>
                <li>{t("profit_percent")}: <strong>0.7%</strong></li>
                <li>{t("step_percent")}: <strong>1%</strong></li>
              </ul>
            </CardContent>
          </Card>
        </section>

        <section>
          {/* Полезные ссылки */}
          <Card className="bg-white border border-gray-200 shadow-sm rounded-lg">
            <CardHeader>
              <CardTitle className="text-2xl font-bold">{t("useful_links")}</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc ml-6 mt-2 space-y-2">
                <li>
                  <a 
                    href={links.kucoin_link}
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-accent-foreground underline"
                  >
                    {t("register_on_kucoin")}
                  </a>
                </li>
                <li>
                  <a 
                    href={links.bot_link}
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-accent-foreground underline"
                  >
                    {t("telegram_bot_botiskaf")}
                  </a>
                </li>
                <li>
                  <a 
                    href={links.support_link}
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-accent-foreground underline"
                  >
                    {t("support_at_telegram")}
                  </a>
                </li>
                <li>
                  <a 
                    href={links.telgram_channel_link}
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-accent-foreground underline"
                  >
                    {t("telegram_channel")}
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

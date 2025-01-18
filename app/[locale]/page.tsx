import React from "react";
import { Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
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
  const title = messages.NavBarLinks["main"];
  const description = messages.NavBarLinks["main_description"];
  const keywords = messages.NavBarLinks["main_keywords"];

  return {
    title,
    description,
    keywords,
    openGraph: {
      title,
      description,
      url: `https://botiskaf.com/${locale}/main`,
      type: 'website',
      locale,
    },
  };
}

export default function MainPage() {
  const t = useTranslations("MainPage");

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white text-gray-800">
      {/* Main Content */}
      <main className="max-w-4xl mx-auto space-y-8">
        {/* About the Creator */}
        <section>
          <Card className="bg-white border-none shadow-none">
            <div className="py-6 text-center">
              <h1 className="text-4xl font-bold">{t("title")}</h1>
              <p className="mt-2 text-lg">{t("welcome_message")}</p>
            </div>
            <CardHeader>
              <CardTitle>{t("our_bot")}</CardTitle>
              <CardContent>
                <ul className="list-disc ml-6 mt-2 space-y-2">
                  <li>
                    <a href={links.bot_link} target="_blank" rel="noopener noreferrer" className="text-accent-foreground underline">
                     {t("bot_name")}
                    </a>
                    {" "}{t("for_automated_trading")} <a href={links.kucoin_link} target="_blank" rel="noopener noreferrer" className="text-accent-foreground underline">{t("kucoin")}</a>.
                  </li>
                </ul>
              </CardContent>
            </CardHeader>
            <CardHeader>
              <CardTitle>{t("features")}</CardTitle>
              <CardContent>
                <ul className="list-disc ml-6 mt-2 space-y-2">
                  <li>{t("features_bullet_one")}</li>
                  <li>{t("features_bullet_two")}</li>
                  <li>{t("features_bullet_three")}</li>
                  <li>{t("features_bullet_four")}</li>
                </ul>
              </CardContent>
            </CardHeader>
            <CardHeader>
              <CardTitle>{t("why_us")}</CardTitle>
              <CardContent>
                <ul className="list-disc ml-6 mt-2 space-y-2">
                  <li>
                    <strong>{t("why_us_bullet_one_part_one")}</strong>{t("why_us_bullet_one_part_two")}
                  </li>
                  <li>
                    <strong>{t("why_us_bullet_two_part_one")}</strong>{t("why_us_bullet_two_part_two")}
                  </li>
                  <li>
                    <strong>{t("why_us_bullet_three_part_one")}</strong>{t("why_us_bullet_three_part_two")}
                  </li>
                  <li>
                    <strong>{t("why_us_bullet_four_part_one")}</strong>{t("why_us_bullet_four_part_two")}
                  </li>
                  <li>
                    <strong>{t("why_us_bullet_five_part_one")}</strong>{t("why_us_bullet_five_part_two")}
                  </li>
                </ul>
              </CardContent>
            </CardHeader>
            <CardHeader>
              <CardTitle>{t("about_us")}</CardTitle>
              <CardContent>
                {t("about_us_description")}
              </CardContent>
            </CardHeader>
          </Card>
        </section>
      </main>
    </div>
  );
}

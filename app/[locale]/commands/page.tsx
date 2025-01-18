import React from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { getMessages } from "next-intl/server";
import { Messages } from "@/types/messages";
import { useTranslations } from "next-intl";

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const messages = await getMessages({ locale }) as Messages;
  const title = messages.NavBarLinks["commands"];
  const description = messages.NavBarLinks["commands_description"];
  const keywords = messages.NavBarLinks["commands_keywords"];

  return {
    title,
    description,
    keywords,
    openGraph: {
      title,
      description,
      url: `https://botiskaf.com/${locale}/commands`,
      type: 'website',
      locale,
    },
  };
}

const commands = [
  { id: "start", title: "/start", description: "start_description" },
  { id: "update_api_keys", title: "/update_api_keys", description: "update_api_keys_description" },
  { id: "get_api_details", title: "/get_api_details", description: "get_api_details_description" },
  { id: "update_trade_settings", title: "/update_trade_settings", description: "update_trade_settings_description" },
  { id: "get_trade_settings", title: "/get_trade_settings", description: "get_trade_settings_description" },
  { id: "cancel", title: "/cancel", description: "cancel_description" },
  { id: "get_subscription_status", title: "/get_subscription_status", description: "get_subscription_status_description" },
  { id: "renew_subscription", title: "/renew_subscription", description: "renew_subscription_description" },
  { id: "start_trading", title: "/start_trading", description: "start_trading_description" },
  { id: "stop_trading", title: "/stop_trading", description: "stop_trading_description" },
  { id: "set_language", title: "/set_language", description: "set_language_description" },
  { id: "buy_coin", title: "/buy_coin", description: "buy_coin_description" },
  { id: "help", title: "/help", description: "help_description" },
];

export default function CommandsPage() {
  const t = useTranslations("CommandsPage");

  return (
    <div className="flex">
      {/* Scroll Area */}
      <div className="hidden md:block fixed top-16 left-0 h-[calc(100vh-8rem)] w-64 bg-white border-none overflow-y-auto">
        <ScrollArea className="h-full flex flex-col items-center justify-start px-6 space-y-6">
          <h2 className="text-lg text-gray-800 font-bold text-center">{t("title")}</h2>
          <div className="flex flex-col w-full space-y-2">
            {commands.map((command) => (
              <Button asChild
                variant="ghost"
                key={command.id}
                className="w-full text-left justify-start transition-colors hover:bg-accent hover:rounded-lg"
              >
                <Link
                  href={`#${command.id}`}
                >
                  {command.title}
                </Link>
              </Button>
            ))}
          </div>
        </ScrollArea>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6 space-y-8 md:ml-64">
        {commands.map((command) => (
          <Card key={command.id} id={command.id} className="scroll-mt-20">
            <CardHeader>
              <CardTitle>{command.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>{t(command.description)}</p>
              {/* Additional command details */}
              {command.id === "update_api_keys" && (
                <ul className="mt-2 list-disc ml-6">
                  <li><span className="italic font-bold">API Key</span></li>
                  <li><span className="italic font-bold">API Secret</span></li>
                  <li><span className="italic font-bold">API Passphrase</span></li>
                </ul>
              )}
              {command.id === "buy_coin" && (
                <span>
                  <p className="mt-2">{t("buy_coin_description_additional")}</p>
                  <strong className="mt-2">{t("minimal_value")} - 5</strong>
                </span>
              )}
              {command.id === "update_trade_settings" && (
                <ul className="mt-2 list-disc ml-6">
                  <li><span className="italic font-bold">{t("current_balance")} </span>- {t("current_balance_description")}</li>
                  <li><p className="mt-2"><span className="italic font-bold">{t("profit_percent")} </span>-<strong> {t("minimal_value")} - 0.1, {t("maximum_value")} - 99. </strong></p>{t("profit_percent_description")}
                  </li>
                  <li><p className="mt-2"><span className="italic font-bold">{t("step_percent")} </span>-<strong> {t("minimal_value")} - 0.1, {t("maximum_value")} - 99. </strong></p>{t("step_percent_description")}
                  </li>
                  <li><p className="mt-2"><span className="italic font-bold">{t("buy_amount")} </span>-<strong> {t("minimal_value")} - 5. </strong></p>{t("buy_amount_description")}
                  </li>
                </ul>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

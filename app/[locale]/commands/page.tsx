import React from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const commands = [
  { id: "start", title: "/start", description: "Запускает бота и инициализирует сеанс взаимодействия." },
  { id: "update_api_keys", title: "/update_api_keys", description: "Позволяет обновить ключи API для подключения к бирже." },
  { id: "get_api_details", title: "/get_api_details", description: "Показывает текущие ключи API, которые вы использовали для подключения." },
  { id: "update_trade_settings", title: "/update_trade_settings", description: "Позволяет изменить настройки вашей торговой стратегии." },
  { id: "get_trade_settings", title: "/get_trade_settings", description: "Отображает текущие параметры вашей торговли." },
  { id: "cancel", title: "/cancel", description: "Отменяет текущую операцию." },
  { id: "get_subscription_status", title: "/get_subscription_status", description: "Показывает статус вашей подписки и дату её окончания." },
  { id: "renew_subscription", title: "/renew_subscription", description: "Позволяет продлить подписку." },
  { id: "start_trading", title: "/start_trading", description: "Активирует торговлю на основе текущих настроек." },
  { id: "stop_trading", title: "/stop_trading", description: "Останавливает торговлю." },
  { id: "set_language", title: "/set_language", description: "Позволяет выбрать язык взаимодействия с ботом." },
  { id: "buy_coin", title: "/buy_coin", description: "Выполняет покупку криптовалюты на определённую сумму." },
];

export default function CommandsPage() {
  return (
    <div className="flex">
      {/* Scroll Area */}
      <div className="hidden md:block fixed top-16 left-0 h-[calc(100vh-4rem)] w-64 bg-white border-none overflow-y-auto">
        <ScrollArea className="h-full flex flex-col items-center justify-start px-6 space-y-6">
          <h2 className="text-lg text-gray-800 font-bold text-center">Команды</h2>
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
              <p>{command.description}</p>
              {/* Additional command details */}
              {command.id === "start" && (
                <p className="mt-2">
                  Если вы используете бота впервые, он добавит вас в базу данных и предложит настроить основные параметры.
                </p>
              )}
              {command.id === "update_api_keys" && (
                <ul className="mt-2 list-disc ml-6">
                  <li>API Key</li>
                  <li>API Secret</li>
                  <li>API Passphrase</li>
                </ul>
              )}
              {command.id === "buy_coin" && (
                <p className="mt-2">Бот запросит ввести сумму покупки. Минимальная сумма — 5 USDT.</p>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

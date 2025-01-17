import React from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const commands = [
  { id: "start", title: "/start", description: "Старт работы с Telegram ботом." },
  { id: "update_api_keys", title: "/update_api_keys", description: "Позволяет обновить ключи API для подключения к бирже. Ключи обновяться только при смене всех трех значений на новые." },
  { id: "get_api_details", title: "/get_api_details", description: "Показывает текущие ключи API, которые вы использовали для подключения." },
  { id: "update_trade_settings", title: "/update_trade_settings", description: "Позволяет изменить настройки вашей торговой стратегии." },
  { id: "get_trade_settings", title: "/get_trade_settings", description: "Отображает текущие параметры вашей торговли." },
  { id: "cancel", title: "/cancel", description: "Отменяет текущее действие и возвращает вас в главное меню." },
  { id: "get_subscription_status", title: "/get_subscription_status", description: "Показывает статус вашей подписки и дату её окончания." },
  { id: "renew_subscription", title: "/renew_subscription", description: "Позволяет продлить подписку. Продление возможно не ранее чем за 3 недели до окончания текущей подписки." },
  { id: "start_trading", title: "/start_trading", description: "Активирует торговлю на основе текущих настроек." },
  { id: "stop_trading", title: "/stop_trading", description: "Останавливает торговлю." },
  { id: "set_language", title: "/set_language", description: "Позволяет выбрать язык взаимодействия с ботом." },
  { id: "buy_coin", title: "/buy_coin", description: "Выполняет покупку криптовалюты на определённую сумму." },
];

export default function CommandsPage() {
  return (
    <div className="flex">
      {/* Scroll Area */}
      <div className="hidden md:block fixed top-16 left-0 h-[calc(100vh-8rem)] w-64 bg-white border-none overflow-y-auto">
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
              {command.id === "update_api_keys" && (
                <ul className="mt-2 list-disc ml-6">
                  <li><span className="italic font-bold">API Key</span></li>
                  <li><span className="italic font-bold">API Secret</span></li>
                  <li><span className="italic font-bold">API Passphrase</span></li>
                </ul>
              )}
              {command.id === "buy_coin" && (
                <span>
                  <p className="mt-2">Бот запросит ввести сумму покупки в USDT.</p>
                  <strong className="mt-2">Минимальное значение - 5</strong>
                </span>
              )}
              {command.id === "update_trade_settings" && (
                <ul className="mt-2 list-disc ml-6">
                  <li><span className="italic font-bold">Текущий баланс </span>- сумма в USDT, которую бот может использовать для совершения сделок.</li>
                  <li><p className="mt-2"><span className="italic font-bold">Процент прибыли </span>-<strong> Минимальное значение - 0.1, Максимальное значение - 99. </strong></p>Процент, который бот будет использовать для расчета цены продажи от цены покупки.
                  </li>
                  <li><p className="mt-2"><span className="italic font-bold">Процент шага </span>-<strong> Минимальное значение - 0.1, Максимальное значение - 99. </strong></p>Процент, который бот будет использовать для расчета цены покупки от цены последней покупки/продажи.
                  </li>
                  <li><p className="mt-2"><span className="italic font-bold">Сумма покупки </span>-<strong> Минимальное значение - 5. </strong></p>Сумма в USDT, которую бот будет использовать для покупки криптовалюты.
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

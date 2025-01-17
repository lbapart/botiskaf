import React from "react";
import { Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";

export default function MainPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white text-gray-800">
      {/* Main Content */}
      <main className="max-w-4xl mx-auto space-y-8">
        {/* About the Creator */}
        <section>
          <Card className="bg-white border-none shadow-none">
            <div className="py-6 text-center">
              <h1 className="text-4xl font-bold">Главная</h1>
              <p className="mt-2 text-lg">Добро пожаловать в мир автоматической торговли!</p>
            </div>
            <CardHeader>
              <CardTitle>Наш бот</CardTitle>
              <CardContent>
                <ul className="list-disc ml-6 mt-2 space-y-2">
                  <li>
                    <strong>
                      <a href="https://t.me/BotiskafTON_bot" target="_blank" rel="noopener noreferrer" className="text-accent-foreground underline">
                        Бот Botiskaf (@BotiskafTON_bot)
                      </a>
                    </strong> для автоматизации торговли на бирже <strong><a href="https://www.kucoin.com/r/rf/QBSWD41C" target="_blank" rel="noopener noreferrer" className="text-accent-foreground underline">Kucoin</a></strong>.
                  </li>
                </ul>
              </CardContent>
            </CardHeader>
            <CardHeader>
              <CardTitle>Особенности</CardTitle>
              <CardContent>
                <ul className="list-disc ml-6 mt-2 space-y-2">
                  <li>Автоматические покупки и продажи.</li>
                  <li>Адаптивные настройки</li>
                  <li>Уведомления о сделках в реальном времени</li>
                  <li>Регулярные обновления</li>
                </ul>
              </CardContent>
            </CardHeader>
            <CardHeader>
              <CardTitle>Почему стоит выбрать нас?</CardTitle>
              <CardContent>
                <ul className="list-disc ml-6 mt-2 space-y-2">
                  <li>
                    <strong>Небольшая команда, личный подход</strong>: Мы не огромная корпорация, поэтому уделяем внимание деталям и учитываем потребности пользователей.
                  </li>
                  <li>
                    <strong>Фокус на эффективности</strong>: Наш бот разработан для максимальной простоты и продуктивности.
                  </li>
                  <li>
                    <strong>Постоянное развитие</strong>: Мы постоянно работаем над улучшением и добавлением новых функций.
                  </li>
                  <li>
                    <strong>Прозрачность и открытость</strong>: Мы честны с нашими пользователями и открыты к обратной связи и предложениям.
                  </li>
                  <li>
                    <strong>Доступность</strong>: Наш бот подойдет как новичкам, так и опытным трейдерам.
                  </li>
                </ul>
              </CardContent>
            </CardHeader>
            <CardHeader>
              <CardTitle>О нас</CardTitle>
              <CardContent>
                Мы - небольшая команда разработчиков и энтузиастов, объединённых стремлением создать удобные и эффективные инструменты для успешной торговли. За годы работы в сфере криптовалют мы накопили ценный опыт и рады делиться своими разработками с вами.
              </CardContent>
            </CardHeader>
          </Card>
        </section>
      </main>
    </div>
  );
}

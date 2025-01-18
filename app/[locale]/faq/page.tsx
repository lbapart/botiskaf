import React from "react";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { getMessages } from "next-intl/server";
import { Messages } from "@/types/messages";

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const messages = await getMessages({ locale }) as Messages;
  const title = messages.NavBarLinks["faq"];
  const description = messages.NavBarLinks["faq_description"];
  const keywords = messages.NavBarLinks["faq_keywords"];

  return {
    title,
    description,
    keywords,
    openGraph: {
      title,
      description,
      url: `https://botiskaf.com/${locale}/faq`,
      type: 'website',
      locale,
    },
  };
}

const faqs = [
  { 
    question: "Как начать пользоваться ботом?", 
    answer: "Для начала работы с ботом зарегистрируйтесь на платформе Kucoin, пройдите KYC и подключите двойную аутентификацию. Затем создайте API ключ (на текущий момент это возможно сделать только в Desktop версии биржи Kucoin) с разрешениями на спотовую торговлю. После этого укажите ваши торговые настройки и API ключи в боте и активируйте торговлю."
  },
  { 
    question: "Безопасно ли делиться с вами API данными?", 
    answer: "Ваши API данные хранятся в зашифрованном виде, и бот использует их исключительно для выполнения торговых операций. Ни при каких обстоятельствах мы не передаем вашу информацию третьим лицам. Также мы запрашиваем разрешения только на спотовую торговлю, и не имеем доступа к выводу средств с вашего счета." 
  },
  { 
    question: "По какой стратегии торгует бот?", 
    answer: "Бот Botiskaf использует стратегию Enhanced Grid Trading. Эта стратегия строит цепочку лимитных ордеров на покупку и продажу, оптимально используя рыночные колебания. После выполнения одного ордера автоматически создается новый с пересчитанным уровнем цены. Такой подход позволяет извлекать прибыль как при росте, так и при падении рынка, обеспечивая постоянное участие в торговле. В отличие от классической сетки, бот динамически адаптирует уровни ордеров под текущие условия рынка, что делает стратегию более эффективной в условиях высокой волатильности."
  },
  { 
    question: "Какими монетами торгует бот?", 
    answer: "На текущий момент бот торгует только парой TON-USDT на бирже Kucoin. В будущем планируется добавление новых торговых пар."
  },
  { 
    question: "Почему Kucoin?", 
    answer: "Kucoin — это надёжная биржа с низкими комиссиями и широким выбором торговых пар. Она предоставляет удобный и надежный API, что делает её отличным выбором для автоматической торговли." 
  },
  { 
    question: "Могу ли я отменить ордера выставленные ботом?", 
    answer: "Да, вы можете отменить активные ордера через биржу Kucoin, но мы настоятельно рекомендуем не вмешиваться в работу бота, так как это может привести к нежелательным результатам." 
  },
  {
    question: "Какие риски связаны с использованием бота?",
    answer: "Как и в любых финансовых операциях, торговля криптовалютой сопряжена с рисками. В нашем случае худший сценарий — это перелив USDT в монету, которая упадет в цене. Однако, благодаря стратегии Enhanced Grid Trading, бот умеет зарабатывать как на росте, так и на падении рынка, что снижает риски и увеличивает вероятность получения прибыли в долгосрочной перспективе. Также мы рекомендуем указывать сумму покупки, которая поделила бы ваш депозит на 40-50 частей, чтобы минимизировать риски и увеличить вероятность получения прибыли."
  },
  {
    question: "Какие комиссии берет бот?",
    answer: "Мы не берем комиссий за использование бота. Все комиссии, связанные с торговлей, взимает биржа Kucoin."
  },
  {
    question: "Какова прибыльность бота?",
    answer: "Прибыльность бота зависит от многих факторов, таких как волатильность рынка, настройки торговли, объем торгов и др. Мы не можем гарантировать прибыль, но средний доход наших пользователей около 10% в месяц от депозита, что соответствует 120% годовых."
  },
  {
    question: "Куда обратиться, если я не нашел ответа на свой вопрос?", 
    answer: "Вы можете обратиться к нашей поддержке через Telegram (команда /help), и мы с радостью ответим на ваши вопросы. Также вы можете посетить наш канал в Telegram, где вы найдете много полезной информации и сможете общаться с другими пользователями." 
  },
];

export default function FAQPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-start bg-white text-gray-800">
      {/* Main Content */}
      <main className="max-w-4xl mx-auto w-full space-y-8">
        <section className="mt-4"> {/* Уменьшен верхний отступ */}
          <div className="bg-white border-none shadow-none">
            <div className="py-4 text-center"> {/* Уменьшены отступы сверху и снизу */}
              <h1 className="text-4xl font-bold">FAQ</h1>
              <p className="mt-1 text-lg">Часто задаваемые вопросы</p> {/* Уменьшен отступ сверху */}
            </div>
              <Accordion type="single" collapsible className="space-y-4 w-full">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`faq-${index}`} className="w-full min-w-full">
                    <AccordionTrigger className="w-full text-left px-4 italic font-bold">{faq.question}</AccordionTrigger>
                    <AccordionContent className="w-full text-left px-4">{faq.answer}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
          </div>
        </section>
      </main>
    </div>
  );
}


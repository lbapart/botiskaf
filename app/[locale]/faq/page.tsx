import React from "react";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { getMessages } from "next-intl/server";
import { Messages } from "@/types/messages";
import { useTranslations } from "next-intl";

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
    question: "how_to_start", 
    answer: "how_to_start_answer"
  },
  { 
    question: "is_it_safe", 
    answer: "is_it_safe_answer" 
  },
  { 
    question: "which_strategy", 
    answer: "which_strategy_answer"
  },
  { 
    question: "which_coins", 
    answer: "which_coins_answer"
  },
  { 
    question: "why_kucoin", 
    answer: "why_kucoin_answer" 
  },
  { 
    question: "can_i_close_orders", 
    answer: "can_i_close_orders_answer" 
  },
  {
    question: "what_risks",
    answer: "what_risks_answer"
  },
  {
    question: "what_commission",
    answer: "what_commission_answer"
  },
  {
    question: "what_is_profit",
    answer: "what_is_profit_answer"
  },
  {
    question: "did_not_find_an_answer", 
    answer: "did_not_find_an_answer_answer" 
  },
];

export default function FAQPage() {
  const t = useTranslations("FAQPage");

  return (
    <div className="min-h-screen flex flex-col items-center justify-start bg-white text-gray-800">
      {/* Main Content */}
      <main className="max-w-4xl mx-auto w-full space-y-8">
        <section className="mt-4">
          <div className="bg-white border-none shadow-none">
            <div className="py-4 text-center">
              <h1 className="text-4xl font-bold">FAQ</h1>
              <p className="mt-1 text-lg">{t("title")}</p>
            </div>
              <Accordion type="single" collapsible className="space-y-4 w-full">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`faq-${index}`} className="w-full min-w-full">
                    <AccordionTrigger className="w-full text-left px-4 italic font-bold">{t(faq.question)}</AccordionTrigger>
                    <AccordionContent className="w-full text-left px-4">{t(faq.answer)}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
          </div>
        </section>
      </main>
    </div>
  );
}


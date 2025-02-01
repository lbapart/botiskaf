import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { getMessages } from "next-intl/server";
import { Messages } from "@/types/messages";
import { useTranslations } from "next-intl";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger 
} from "@/components/ui/accordion";

const yearlyStats = {
  "2024": [
    { month: "Dec", users: 3, profit: 438 }
  ],
  "2025": [
    { month: "Jan", users: 5, profit: 1140 },
  ]
};

const totalUsers = 5;

const calculateTotalProfit = (stats: Record<string, { month: string; users: number; profit: number }[]>) => {
  return Object.values(stats).flat().reduce((total, stat) => total + stat.profit, 0);
};

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const messages = await getMessages({ locale }) as Messages;
  const title = messages.NavBarLinks["statistics"];
  const description = messages.NavBarLinks["statistics_description"];
  const keywords = messages.NavBarLinks["statistics_keywords"];

  return {
    title,
    description,
    keywords,
    openGraph: {
      title,
      description,
      url: `https://botiskaf.com/${locale}/statistics`,
      type: 'website',
      locale,
    },
  };
}

export default function StatisticsPage() {
  const t = useTranslations("StatisticsPage");
  const totalProfit = calculateTotalProfit(yearlyStats);

  return (
    <div className="min-h-screen flex flex-col items-center justify-start bg-white text-gray-800">
      <main className="max-w-6xl mx-auto w-full space-y-8 mt-8 px-4">
        {/* Аккордеон с годами */}
        <Card className="bg-white border border-gray-200 shadow-sm rounded-lg">
          <CardHeader>
            <CardTitle className="text-2xl font-bold">
              {t("statistics_by_year")}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible className="w-full">
              {Object.entries(yearlyStats).map(([year, stats]) => (
                <AccordionItem key={year} value={year}>
                  <AccordionTrigger className="hover:no-underline">
                    <div className="flex items-center space-x-4">
                      <span className="text-lg font-semibold">{year}</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    {stats.length > 0 ? (
                      <Table>
                        <TableHeader>
                          <TableRow>
                            <TableHead>{t("month")}</TableHead>
                            <TableHead className="text-right">{t("active_users")}</TableHead>
                            <TableHead className="text-right">{t("total_profit")} (USDT)</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {stats.map((stat) => (
                            <TableRow key={`${year}-${stat.month}`}>
                              <TableCell className="font-medium">{t(stat.month)}</TableCell>
                              <TableCell className="text-right">{stat.users}</TableCell>
                              <TableCell className="text-right">
                                {stat.profit.toLocaleString()}
                              </TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    ) : (
                      <div className="py-4 text-center text-gray-500">
                        {t("no_data_available")}
                      </div>
                    )}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </CardContent>
        </Card>

        {/* Общая статистика */}
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-white border border-gray-200 shadow-sm">
            <CardHeader>
              <CardTitle className="text-lg">{t("total_users")}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold">{totalUsers}</p>
            </CardContent>
          </Card>

          <Card className="bg-white border border-gray-200 shadow-sm">
            <CardHeader>
              <CardTitle className="text-lg">{t("total_profit")}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold">{totalProfit} USDT</p>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}
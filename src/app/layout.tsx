import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Детский массаж в Атакенте | Kindy Massage",
  description: "Профессиональный детский массаж в Атакенте. Улучшите здоровье и развитие вашего ребенка с помощью наших опытных массажистов. Запишитесь на сеанс уже сегодня!, Балаларға арналған массаж Атакентте | Kindy Massage, Профессионалды балалар массажы Атакентте. Біздің тәжірибелі массажистерімізбен балаңыздың денсаулығы мен дамуын жақсартыңыз. Бүгін сеансқа жазылыңыз!",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
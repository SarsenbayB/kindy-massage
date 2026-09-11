import { HeartHandshake, ShieldCheck, Users, Clock } from "lucide-react";
import { Container } from "@/shared/ui/Container";

const ITEMS = [
  { icon: HeartHandshake, label: "Мейірімді қарым-қатынас" },
  { icon: ShieldCheck, label: "Қауіпсіз әрі таза орта" },
  { icon: Users, label: "Жеке бағдарлама" },
  { icon: Clock, label: "Ыңғайлы кесте" },
];

export function TrustStrip() {
  return (
    <section className="w-full border-y border-forest/8 bg-beige/40">
      <Container className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4 py-6">
        {ITEMS.map(({ icon: Icon, label }) => (
          <div key={label} className="flex items-center gap-2.5 text-[14px] font-medium text-forest/70">
            <Icon className="size-[18px] text-cocoa" strokeWidth={1.75} />
            {label}
          </div>
        ))}
      </Container>
    </section>
  );
}

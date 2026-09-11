import { Award } from "lucide-react";
import { Container } from "@/shared/ui/Container";
import { SectionHeading } from "@/shared/ui/SectionHeading";

export function Certificates() {
  return (
    <section className="w-full bg-ivory py-16 xl:py-20">
      <Container className="flex flex-col items-center gap-8 text-center">
        <SectionHeading eyebrow="Біліктілік" title="Сертификаттар мен тәжірибе" align="center" />
        <div className="flex flex-col items-center gap-3 rounded-2xl border border-dashed border-forest/15 px-10 py-10">
          <Award className="size-8 text-forest/30" strokeWidth={1.5} />
          {/* TODO: клиенттен нақты сертификаттар мен тәжірибе деректерін алу */}
          <p className="max-w-[420px] text-[15px] leading-relaxed text-forest/55">
            Маманның сертификаттары мен тәжірибе деректері жуырда осы жерде қосылады.
          </p>
        </div>
      </Container>
    </section>
  );
}

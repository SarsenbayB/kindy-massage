import Image from "next/image";
import { Container } from "@/shared/ui/Container";
import { WhatsappButton } from "@/features/whatsapp-cta/WhatsappButton";
import { CallButton } from "@/features/whatsapp-cta/CallButton";

export function FinalCta() {
  return (
    <section className="relative w-full overflow-hidden">
      <div className="relative min-h-[480px] w-full">
        <Image
          src="/assets/photoshoot/final-cta.png"
          alt="Массаж орталығының жайлы интерьері"
          fill
          loading="lazy"
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-forest/70 via-forest/40 to-transparent" />
      </div>

      <Container className="absolute inset-0 flex flex-col items-start justify-center gap-6 py-16">
        <h2 className="font-heading max-w-[520px] text-[32px] leading-[1.15] text-ivory sm:text-[42px]">
          Балаңызға жылы қамқорлықты бүгін сыйлаңыз
        </h2>
        <p className="max-w-[420px] text-[16px] leading-relaxed text-ivory/80">
          Хабарласыңыз — біз сізге қолайлы уақыт пен қызмет түрін таңдауға көмектесеміз.
        </p>
        <div className="flex flex-col gap-3 sm:flex-row">
          <WhatsappButton label="WhatsApp арқылы жазу" />
          <CallButton className="border-ivory/40 text-ivory hover:border-ivory hover:text-ivory" />
        </div>
      </Container>
    </section>
  );
}

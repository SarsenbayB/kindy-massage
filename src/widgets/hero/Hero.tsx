"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Container } from "@/shared/ui/Container";
import { WhatsappButton } from "@/features/whatsapp-cta/WhatsappButton";
import { CallButton } from "@/features/whatsapp-cta/CallButton";

const TRUST_POINTS = ["Жеке тәсіл", "Тәжірибе", "Таза орта"];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] as const },
  }),
};

export function Hero() {
  return (
    <section id="hero" className="relative w-full overflow-hidden bg-ivory pt-[96px]">
      <Container className="grid grid-cols-1 items-center gap-10 py-12 xl:grid-cols-2 xl:gap-8 xl:py-24">
        <div className="flex flex-col items-center gap-6 text-center xl:items-start xl:text-left">
          <motion.h1
            custom={0}
            initial="hidden"
            animate="show"
            variants={fadeUp}
            className="font-heading text-[34px] leading-[1.12] text-forest sm:text-[44px] lg:text-[58px]"
          >
            Балаңыздың денсаулығына жылы қамқорлық.
          </motion.h1>

          <motion.p
            custom={1}
            initial="hidden"
            animate="show"
            variants={fadeUp}
            className="max-w-[480px] text-[18px] leading-relaxed text-forest/70"
          >
            Дені сау қозғалыс — бақытты балалық шақ. Балаларға арналған кәсіби массаж және моторлы дамыту бағдарламалары.
          </motion.p>

          <motion.div custom={2} initial="hidden" animate="show" variants={fadeUp} className="flex flex-wrap justify-center gap-5 xl:justify-start">
            {TRUST_POINTS.map((point) => (
              <span key={point} className="flex items-center gap-1.5 text-[14px] font-medium text-forest/70">
                <Check className="size-4 text-sage" strokeWidth={2.5} />
                {point}
              </span>
            ))}
          </motion.div>

          <motion.div
            custom={3}
            initial="hidden"
            animate="show"
            variants={fadeUp}
            className="mt-2 flex flex-col gap-3 sm:flex-row"
          >
            <WhatsappButton label="Кеңес алуға жазылу" />
            <CallButton showLabel />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative aspect-[3/2] w-full overflow-hidden rounded-2xl"
        >
          <Image
            src="/assets/photoshoot/hero.png"
            alt="Балалар массаж терапевті сәбиге жайлы бөлмеде массаж жасап жатыр"
            fill
            priority
            sizes="(min-width: 1280px) 50vw, 100vw"
            className="object-cover"
          />
        </motion.div>
      </Container>
    </section>
  );
}

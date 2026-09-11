"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Container } from "@/shared/ui/Container";
import { SectionHeading } from "@/shared/ui/SectionHeading";
import { SPECIALIST_NAME, SPECIALIST_ROLE } from "@/shared/config/site";

export function AboutSpecialist() {
  return (
    <section className="w-full bg-beige/30 py-16 xl:py-24">
      <Container className="grid grid-cols-1 items-center gap-12 xl:grid-cols-[380px_1fr] xl:gap-16">
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="relative mx-auto aspect-[3/4] w-full max-w-[340px] overflow-hidden rounded-2xl xl:mx-0"
        >
          <Image
            src="/assets/photoshoot/about.png"
            alt={`${SPECIALIST_NAME} — ${SPECIALIST_ROLE}`}
            fill
            loading="lazy"
            sizes="(min-width: 1280px) 380px, 60vw"
            className="object-cover"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col gap-5"
        >
          <SectionHeading eyebrow="Маман туралы" title={SPECIALIST_NAME} />
          <span className="text-[15px] font-medium text-cocoa">{SPECIALIST_ROLE}</span>
          {/* TODO: клиенттен маманның нақты тәжірибесі мен hikaya-сын алу */}
          <p className="max-w-[520px] text-[17px] leading-relaxed text-forest/70">
            Әр клиентті — баласы да, ересегі де — жеке тұлға ретінде қабылдап, жылы әрі сенімді атмосфера
            қалыптастыруға тырысады.
          </p>
        </motion.div>
      </Container>
    </section>
  );
}

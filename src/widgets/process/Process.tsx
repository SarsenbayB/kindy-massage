"use client";

import { motion } from "framer-motion";
import { Container } from "@/shared/ui/Container";
import { SectionHeading } from "@/shared/ui/SectionHeading";
import { processSteps } from "@/entities/process-step/data";

export function Process() {
  return (
    <section className="w-full bg-forest py-16 text-ivory xl:py-24">
      <Container className="flex flex-col gap-14">
        <SectionHeading
          eyebrow="Қалай жұмыс істейміз"
          title="Төрт қадамдық процесс"
          align="center"
          titleClassName="text-ivory"
        />

        <div className="relative grid grid-cols-1 gap-10 sm:grid-cols-2 xl:grid-cols-4">
          <div className="absolute top-[26px] right-0 left-0 hidden h-px bg-ivory/12 xl:block" />
          {processSteps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
              className="relative flex flex-col gap-4"
            >
              <span className="relative z-10 flex size-[52px] items-center justify-center rounded-full border border-sand/40 bg-forest font-heading text-[18px] text-sand">
                {step.number}
              </span>
              <h3 className="text-[18px] font-semibold text-ivory">{step.title}</h3>
              <p className="max-w-[240px] text-[14px] leading-relaxed text-ivory/60">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}

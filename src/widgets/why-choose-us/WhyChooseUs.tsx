"use client";

import { motion } from "framer-motion";
import { Heart, Sparkles, Moon, Shield, type LucideIcon } from "lucide-react";
import { Container } from "@/shared/ui/Container";
import { SectionHeading } from "@/shared/ui/SectionHeading";
import { benefits, type Benefit } from "@/entities/benefit/data";

const ICONS: Record<Benefit["icon"], LucideIcon> = {
  heart: Heart,
  sparkles: Sparkles,
  moon: Moon,
  shield: Shield,
};

export function WhyChooseUs() {
  return (
    <section id="why-us" className="w-full bg-ivory py-16 xl:py-24">
      <Container className="flex flex-col gap-12">
        <SectionHeading eyebrow="Біз ұсынатын артықшылықтар" title="Неге бізді таңдайды" align="center" />

        <div className="grid grid-cols-1 gap-x-10 gap-y-10 sm:grid-cols-2 xl:grid-cols-4">
          {benefits.map((item, i) => {
            const Icon = ICONS[item.icon];
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-col items-center gap-4 text-center"
              >
                <div className="flex size-16 items-center justify-center rounded-full bg-sage/20 text-cocoa">
                  <Icon className="size-7" strokeWidth={1.5} />
                </div>
                <h3 className="text-[18px] font-semibold text-forest">{item.title}</h3>
                <p className="max-w-[220px] text-[14px] leading-relaxed text-forest/65">{item.description}</p>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

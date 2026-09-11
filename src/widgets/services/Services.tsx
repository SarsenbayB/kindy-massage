"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/shared/ui/Container";
import { SectionHeading } from "@/shared/ui/SectionHeading";
import { services } from "@/entities/service/data";
import { openWhatsapp } from "@/shared/lib/whatsapp";

export function Services() {
  return (
    <section id="services" className="w-full bg-beige/30 py-16 xl:py-24">
      <Container className="flex flex-col gap-12">
        <SectionHeading eyebrow="Балаларға арналған" title="Балалар массажы қызметтері" align="center" />

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {services.map((service, i) => (
            <motion.button
              key={service.id}
              type="button"
              onClick={() => openWhatsapp(`Сәлеметсіз бе! "${service.title}" қызметі туралы толығырақ білгім келеді.`)}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ scale: 1.02 }}
              className="group flex flex-col gap-4 rounded-2xl bg-white p-8 text-left shadow-[0_1px_12px_rgba(38,53,47,0.06)] transition-shadow hover:shadow-[0_8px_28px_rgba(38,53,47,0.1)]"
            >
              <div className="flex items-start justify-between">
                <span className="font-heading text-[32px] text-sand">{service.number}</span>
                <ArrowUpRight className="size-5 text-forest/30 transition-colors group-hover:text-cocoa" />
              </div>
              <h3 className="text-[20px] font-semibold text-forest">{service.title}</h3>
              <p className="text-[15px] leading-relaxed text-forest/65">{service.shortDescription}</p>
              <div className="mt-auto flex items-center justify-between border-t border-forest/8 pt-4 text-[14px]">
                <span className="text-forest/60">{service.duration}</span>
                <span className="font-semibold text-cocoa">{service.price.toLocaleString("ru-RU")} ₸</span>
              </div>
            </motion.button>
          ))}
        </div>
      </Container>
    </section>
  );
}

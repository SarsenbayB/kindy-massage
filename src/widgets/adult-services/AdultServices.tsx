"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Container } from "@/shared/ui/Container";
import { SectionHeading } from "@/shared/ui/SectionHeading";
import { adultServices } from "@/entities/adult-service/data";
import { openWhatsapp } from "@/shared/lib/whatsapp";

export function AdultServices() {
  return (
    <section id="adult-services" className="w-full bg-ivory py-16 xl:py-24">
      <Container className="flex flex-col gap-12">
        <SectionHeading
          eyebrow="Ересектерге арналған"
          title="Релаксация және күтім қызметтері"
          align="center"
        />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {adultServices.map((service, i) => (
            <motion.button
              key={service.id}
              type="button"
              onClick={() =>
                openWhatsapp(`Сәлеметсіз бе! "${service.title}" қызметі туралы толығырақ білгім келеді.`)
              }
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.1, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ scale: 1.02 }}
              className="group flex flex-col overflow-hidden rounded-2xl bg-white text-left shadow-[0_1px_12px_rgba(38,53,47,0.06)] transition-shadow hover:shadow-[0_8px_28px_rgba(38,53,47,0.1)]"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <Image
                  src={service.imageSrc}
                  alt={service.title}
                  fill
                  loading="lazy"
                  sizes="(min-width: 1280px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-col gap-2 p-6">
                <h3 className="text-[18px] font-semibold text-forest">{service.title}</h3>
                <p className="text-[14px] leading-relaxed text-forest/65">{service.description}</p>
                <span className="mt-2 text-[13px] font-medium text-cocoa">Бағасы хабарласу арқылы →</span>
              </div>
            </motion.button>
          ))}
        </div>
      </Container>
    </section>
  );
}

"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Container } from "@/shared/ui/Container";
import { SectionHeading } from "@/shared/ui/SectionHeading";

const GALLERY_ITEMS = [
  { src: "/assets/photoshoot/hero.png", alt: "Массаж терапевті сәбиге массаж жасап жатыр", className: "sm:col-span-2 sm:row-span-2" },
  { src: "/assets/photoshoot/about.png", alt: "Массаж терапевтінің портреті", className: "" },
  { src: "/assets/photoshoot/service.png", alt: "Терапевт қолдары сәбидің қолын ұстап отыр", className: "" },
  { src: "/assets/photoshoot/interior.png", alt: "Массаж студиясының интерьері", className: "sm:col-span-2" },
  { src: "/assets/photoshoot/detail.png", alt: "Табиғи массаж майы мен сүлгілер", className: "" },
  { src: "/assets/photoshoot/emotional.png", alt: "Ата-ана мен бала жылы атмосферада", className: "" },
];

export function Gallery() {
  return (
    <section className="w-full bg-ivory py-16 xl:py-24">
      <Container className="flex flex-col gap-12">
        <SectionHeading eyebrow="Фотогалерея" title="Біздің орталықтан көрініс" align="center" />

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 sm:[grid-auto-rows:200px]">
          {GALLERY_ITEMS.map((item, i) => (
            <motion.div
              key={item.src}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: (i % 4) * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className={`relative aspect-square overflow-hidden rounded-xl sm:aspect-auto ${item.className}`}
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                loading="lazy"
                sizes="(min-width: 640px) 25vw, 50vw"
                className="object-cover transition-transform duration-500 hover:scale-105"
              />
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}

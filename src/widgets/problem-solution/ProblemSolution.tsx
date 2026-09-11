"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { SectionHeading } from "@/shared/ui/SectionHeading";
import { Container } from "@/shared/ui/Container";

export function ProblemSolution() {
  return (
    <section className="w-full bg-ivory py-16 xl:py-24">
      <Container className="grid grid-cols-1 items-center gap-12 xl:grid-cols-2 xl:gap-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="relative order-2 aspect-[4/3] w-full overflow-hidden rounded-2xl xl:order-1"
        >
          <Image
            src="/assets/photoshoot/emotional.png"
            alt="Ата-ана мен бала жылы атмосферада бірге"
            fill
            loading="lazy"
            sizes="(min-width: 1280px) 45vw, 100vw"
            className="object-cover"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="order-1 flex flex-col gap-5 xl:order-2"
        >
          <SectionHeading
            eyebrow="Ата-аналарға түсінікті"
            title="Әр бала бөлек — сондықтан тәсіл де жеке болуы керек"
          />
          <p className="max-w-[480px] text-[17px] leading-relaxed text-forest/70">
            Баланың мазасыздануы, ұйқысының бұзылуы немесе қимыл-қозғалысының баяу дамуы туралы алаңдаушылық —
            қалыпты жағдай. Біз диагноз қоймаймыз және емдеу уәде етпейміз — біз әр баланың сипатына, көңіл-күйіне
            және қажеттілігіне бейімделген жеке массаж тәсілін ұсынамыз.
          </p>
          <p className="max-w-[480px] text-[17px] leading-relaxed text-forest/70">
            Мамандарымыз баламен сенімді байланыс орнатып, отбасыңызға жайлы әрі тыныш процесс сыйлайды.
          </p>
        </motion.div>
      </Container>
    </section>
  );
}

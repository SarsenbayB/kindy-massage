"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Container } from "@/shared/ui/Container";
import { SectionHeading } from "@/shared/ui/SectionHeading";
import { services } from "@/entities/service/data";
import { WhatsappButton } from "@/features/whatsapp-cta/WhatsappButton";
import { cn } from "@/lib/utils";

export function Pricing() {
  return (
    <section className="w-full bg-ivory py-16 xl:py-24">
      <Container className="flex flex-col gap-12">
        <SectionHeading eyebrow="Балалар массажына бағалар" title="Өзіңізге қолайлы жоспарды таңдаңыз" align="center" />

        <div className="grid grid-cols-1 gap-6 xl:grid-cols-3">
          {services.map((plan, i) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className={cn(
                "relative flex flex-col gap-6 rounded-2xl border p-8 xl:p-10",
                plan.popular ? "border-cocoa bg-white shadow-[0_12px_36px_rgba(139,94,60,0.14)]" : "border-forest/10 bg-white"
              )}
            >
              {plan.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-cocoa px-4 py-1 text-[12px] font-semibold tracking-wide text-ivory">
                  Ең көп таңдау
                </span>
              )}

              <div className="flex flex-col gap-2 border-b border-forest/8 pb-6">
                <span className="text-[20px] font-semibold text-forest">{plan.title}</span>
                <p className="text-[14px] text-forest/60">{plan.subTitle}</p>
              </div>

              <ul className="flex flex-col gap-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5 text-[14px] text-forest/75">
                    <Check className="mt-0.5 size-4 shrink-0 text-sage" strokeWidth={2.5} />
                    {feature}
                  </li>
                ))}
              </ul>

              <div className="mt-auto flex flex-col gap-5">
                <div className="flex items-baseline gap-1">
                  <span className="font-heading text-[36px] text-forest">{plan.price.toLocaleString("ru-RU")} ₸</span>
                  <span className="text-[14px] text-forest/50">/сеанс</span>
                </div>
                <WhatsappButton
                  label="Жазылу"
                  message={`Сәлеметсіз бе! "${plan.title}" тарифі бойынша жазылғым келеді.`}
                  variant={plan.popular ? "solid" : "outline"}
                  className="w-full justify-center"
                />
              </div>
            </motion.div>
          ))}
        </div>

        <p className="text-center text-[13px] text-forest/40">
          Алдын ала жазылу қажет. Ересектерге арналған қызметтер бағасы{" "}
          <a href="#adult-services" className="font-medium text-cocoa underline underline-offset-2">
            төменде
          </a>
          .
        </p>
      </Container>
    </section>
  );
}

import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { Container } from "@/shared/ui/Container";
import { SectionHeading } from "@/shared/ui/SectionHeading";
import { faqItems } from "@/entities/faq-item/data";

export function Faq() {
  return (
    <section id="faq" className="w-full bg-beige/30 py-16 xl:py-24">
      <Container className="flex flex-col gap-12">
        <SectionHeading eyebrow="Жиі қойылатын сұрақтар" title="Сұрақтарыңыз бар ма?" align="center" />

        <div className="mx-auto w-full max-w-[720px] rounded-2xl bg-white px-6 py-2 shadow-[0_1px_12px_rgba(38,53,47,0.06)] sm:px-8">
          <Accordion>
            {faqItems.map((item, i) => (
              <AccordionItem key={item.question} value={`item-${i}`}>
                <AccordionTrigger className="py-5 text-[16px] font-semibold text-forest">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="pb-5 text-[15px] leading-relaxed text-forest/65">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </Container>
    </section>
  );
}

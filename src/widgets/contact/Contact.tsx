import { Phone, MapPin, Clock, Camera, MessageCircle } from "lucide-react";
import { Container } from "@/shared/ui/Container";
import { SectionHeading } from "@/shared/ui/SectionHeading";
import {
  PHONE_DISPLAY,
  PHONE_RAW,
  ADDRESS_FULL,
  OUTCALL_NOTE,
  WORKING_HOURS_PLACEHOLDER,
  SOCIALS,
} from "@/shared/config/site";

const CONTACT_ROWS = [
  { icon: Phone, label: "Телефон", value: PHONE_DISPLAY, href: `tel:${PHONE_RAW}` },
  { icon: MessageCircle, label: "WhatsApp", value: PHONE_DISPLAY, href: SOCIALS.whatsapp },
  { icon: MapPin, label: "Мекенжай", value: `${ADDRESS_FULL}. ${OUTCALL_NOTE}.`, href: undefined },
  { icon: Clock, label: "Жұмыс уақыты", value: WORKING_HOURS_PLACEHOLDER, href: undefined },
];

const MAP_EMBED_SRC = `https://www.google.com/maps?q=${encodeURIComponent(ADDRESS_FULL)}&output=embed`;

export function Contact() {
  return (
    <section id="contact" className="w-full bg-ivory py-16 xl:py-24">
      <Container className="grid grid-cols-1 gap-12 xl:grid-cols-2 xl:gap-16">
        <div className="flex flex-col gap-8">
          <SectionHeading eyebrow="Байланыс" title="Бізбен хабарласыңыз" />

          <div className="flex flex-col gap-5">
            {CONTACT_ROWS.map(({ icon: Icon, label, value, href }) => (
              <div key={label} className="flex items-start gap-4">
                <div className="flex size-11 shrink-0 items-center justify-center rounded-full bg-sage/20 text-cocoa">
                  <Icon className="size-5" strokeWidth={1.75} />
                </div>
                <div className="flex flex-col">
                  <span className="text-[13px] tracking-wide text-forest/45 uppercase">{label}</span>
                  {href ? (
                    <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" className="text-[16px] font-medium text-forest hover:text-cocoa">
                      {value}
                    </a>
                  ) : (
                    <span className="text-[16px] font-medium text-forest">{value}</span>
                  )}
                </div>
              </div>
            ))}

            {SOCIALS.instagram && (
              <div className="flex items-start gap-4">
                <div className="flex size-11 shrink-0 items-center justify-center rounded-full bg-sage/20 text-cocoa">
                  <Camera className="size-5" strokeWidth={1.75} />
                </div>
                <div className="flex flex-col">
                  <span className="text-[13px] tracking-wide text-forest/45 uppercase">Instagram</span>
                  <a href={SOCIALS.instagram} target="_blank" rel="noopener noreferrer" className="text-[16px] font-medium text-forest hover:text-cocoa">
                    {SOCIALS.instagramHandle}
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="min-h-[280px] overflow-hidden rounded-2xl border border-forest/10">
          <iframe
            src={MAP_EMBED_SRC}
            title="Мекенжай картасы"
            className="h-full min-h-[280px] w-full grayscale-[0.15]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </Container>
    </section>
  );
}

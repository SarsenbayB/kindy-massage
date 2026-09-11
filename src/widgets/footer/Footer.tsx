import { MessageCircle, Phone, Camera } from "lucide-react";
import { Container } from "@/shared/ui/Container";
import { NAV_LINKS, PHONE_DISPLAY, PHONE_RAW, BUSINESS_NAME, SOCIALS } from "@/shared/config/site";

export function Footer() {
  return (
    <footer className="w-full bg-forest text-ivory">
      <Container className="flex flex-col gap-12 py-14">
        <div className="flex flex-col gap-10 lg:flex-row lg:justify-between lg:gap-16">
          <div className="flex max-w-[420px] flex-col gap-4">
            <span className="font-heading text-[22px] text-ivory">{BUSINESS_NAME}</span>
            <p className="text-[14px] leading-relaxed text-ivory/55">
              Балаларға арналған кәсіби массаж мен моторлы дамыту, сонымен қатар ересектерге арналған релаксация
              қызметтері. Жеке тәсіл, тәжірибелі маман, жайлы қауіпсіз орта, үйге шақыру мүмкіндігі.
            </p>
            <div className="mt-2 flex items-center gap-3">
              <a
                href={SOCIALS.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="flex size-10 items-center justify-center rounded-full bg-ivory/10 text-ivory transition-colors hover:bg-ivory/20"
              >
                <MessageCircle className="size-[18px]" />
              </a>
              <a
                href={SOCIALS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex size-10 items-center justify-center rounded-full bg-ivory/10 text-ivory transition-colors hover:bg-ivory/20"
              >
                <Camera className="size-[18px]" />
              </a>
              <a
                href={`tel:${PHONE_RAW}`}
                aria-label="Телефон"
                className="flex size-10 items-center justify-center rounded-full bg-ivory/10 text-ivory transition-colors hover:bg-ivory/20"
              >
                <Phone className="size-[18px]" />
              </a>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <span className="text-[11px] font-medium tracking-[0.12em] text-ivory/40 uppercase">Навигация</span>
            {NAV_LINKS.map(({ label, href }) => (
              <a key={href} href={href} className="w-fit text-[15px] text-ivory/70 transition-colors hover:text-ivory">
                {label}
              </a>
            ))}
          </div>

          <div className="flex flex-col gap-3">
            <span className="text-[11px] font-medium tracking-[0.12em] text-ivory/40 uppercase">Байланыс</span>
            <a href={`tel:${PHONE_RAW}`} className="w-fit text-[15px] text-ivory/70 transition-colors hover:text-ivory">
              {PHONE_DISPLAY}
            </a>
            {/* TODO: клиенттен нақты email/Telegram берілген соң осы жерге қосу */}
          </div>
        </div>

        <div className="h-px w-full bg-ivory/10" />

        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <span className="text-[13px] text-ivory/35">
            © {new Date().getFullYear()} {BUSINESS_NAME}. Барлық құқықтар қорғалған.
          </span>
          <div className="flex items-center gap-5">
            {["Privacy Policy", "Terms of Use"].map((item) => (
              <a key={item} href="#" className="text-[13px] text-ivory/35 transition-colors hover:text-ivory/60">
                {item}
              </a>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  );
}

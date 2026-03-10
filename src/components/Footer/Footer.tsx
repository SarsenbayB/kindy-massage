"use client";

import InstagramIcon from "@/app/icons/InstagramIcon";
import WhatsappIcon from "@/app/icons/WhatsappIcon";


const NAV_LINKS = [
  { label: "Басты бет", href: "#", id: "hero" },
  { label: "Біз туралы", href: "#about", id: "about" },
  { label: "Қызметтер", href: "#services", id: "services" },
  { label: "Байланыс", href: "#communication", id: "communication" },
  { label: "Контакттар", href: "#contact", id: "contact" },
];

const SOCIALS = [
  { label: "WhatsApp", href: "https://wa.me/77473009392", icon: <WhatsappIcon /> },
  { label: "Instagram", href: "https://instagram.com", icon: <InstagramIcon /> },
];

const CONTACTS = [
  { label: "Email", value: "bakbergen.sarsenbay@mail.ru", href: "mailto:bakbergen.sarsenbay@mail.ru" },
  { label: "Telegram", value: "@bakbergen1998", href: "https://t.me/bakbergen1998" },
  { label: "Support", value: "support@syrdariya.dev", href: "mailto:support@syrdariya.dev" },
];

export default function Footer() {
  return (
    <footer id="contact" className="relative bg-[#1E2C30] border-t border-white/10 overflow-hidden">
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-[1px] pointer-events-none"
        style={{
          background: "linear-gradient(90deg, transparent, rgba(92,36,255,0.6), rgba(255,59,255,0.4), transparent)",
        }}
      />
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-24 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse, rgba(92,36,255,0.12) 0%, transparent 70%)",
          filter: "blur(20px)",
        }}
      />

      <div className="container mx-auto pt-14 pb-8 px-4 md:px-8 xl:px-[100px]">
        {/* Main row: brand left, nav+contacts right — drivenow style */}
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 xl:gap-40 mb-12 justify-between">

          {/* LEFT: Brand block */}
          <div className="flex flex-col gap-4 xl:w-[500px]">
            <a href="/" className="inline-block">
              <h2 className="text-white font-[var(--font-montserrat)] font-medium text-[22px] tracking-wide">
                Массаж орталығы
              </h2>
            </a>
            <p
              className="font-[var(--font-montserrat)] font-normal text-white/50 leading-relaxed"
              style={{ fontSize: "14px" }}
            >
              Егер сіз кәсіби массаж қызметін іздесеңіз,
              біздің орталыққа хабарласыңыз. Біз сізге жоғары сапалы
              қызмет, жайлы атмосфера және тәжірибелі
              мамандар ұсынамыз. Сіздің денсаулығыңыз бен
              демалысыңыз – біздің басты мақсатымыз.
            </p>
            <div className="flex items-center gap-4 mt-2">
              {SOCIALS.map(({ label, href, icon }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="text-white flex opacity-50 transition-opacity duration-200 hover:opacity-100"
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* RIGHT: Navigation + Contacts side by side */}
          <div className="flex gap-8 lg:gap-28">
            <div className="flex flex-col gap-3">
              <span
                className="font-[var(--font-montserrat)] font-medium text-white/40 uppercase tracking-[0.12em] mb-1"
                style={{ fontSize: "11px" }}
              >
                Navigation
              </span>
              {NAV_LINKS.map((Link) => (
                <a
                  key={Link.label}
                  href={Link.href}
                  className="font-[var(--font-montserrat)] font-normal text-white/70 no-underline transition-colors duration-200 hover:text-white w-fit"
                  style={{ fontSize: "15px" }}
                >
                  {Link.label}
                </a>
              ))}
            </div>

            <div className="flex flex-col gap-3">
              <span
                className="font-[var(--font-montserrat)] font-medium text-white/40 uppercase tracking-[0.12em] mb-1"
                style={{ fontSize: "11px" }}
              >
                Contacts
              </span>
              {CONTACTS.map(({ label, value, href }) => (
                <div key={label} className="flex flex-col gap-0.5">
                  <span
                    className="font-[var(--font-montserrat)] text-white/35"
                    style={{ fontSize: "11px", letterSpacing: "0.08em" }}
                  >
                    {label}
                  </span>
                  <a
                    href={href}
                    className="font-[var(--font-montserrat)] font-normal text-white/70 no-underline transition-colors duration-200 hover:text-white w-fit"
                    style={{ fontSize: "15px" }}
                  >
                    {value}
                  </a>
                </div>
              ))}
            </div>
          </div>

        </div>

        <div className="w-full h-[1px] bg-white/10 mb-6" />

        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <span
            className="font-[var(--font-montserrat)] text-white/30"
            style={{ fontSize: "13px" }}
          >
            © {new Date().getFullYear()} Syrdariya.dev. Барлық құқықтар қорғалған.
          </span>
          <div className="flex items-center gap-5">
            {["Privacy Policy", "Terms of Use"].map((item) => (
              <a
                key={item}
                href="#"
                className="font-[var(--font-montserrat)] text-white/30 no-underline transition-colors duration-200 hover:text-white/60"
                style={{ fontSize: "13px" }}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
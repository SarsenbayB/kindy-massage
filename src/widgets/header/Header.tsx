"use client";

import { useEffect, useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { cn } from "@/lib/utils";
import { NAV_LINKS, PHONE_RAW, PHONE_DISPLAY, BUSINESS_NAME } from "@/shared/config/site";
import { useScrollSpy } from "@/features/scroll-spy/useScrollSpy";
import { WhatsappButton } from "@/features/whatsapp-cta/WhatsappButton";

const SECTION_IDS = NAV_LINKS.map((l) => l.href.replace("#", ""));

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const activeId = useScrollSpy(SECTION_IDS);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1024) setMenuOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 right-0 left-0 z-50 transition-all duration-300",
          scrolled ? "bg-ivory/80 shadow-[0_2px_24px_rgba(38,53,47,0.08)] backdrop-blur-md" : "bg-ivory/0"
        )}
      >
        <div className="container mx-auto flex h-[76px] items-center justify-between gap-4">
          <a href="#hero" className="shrink-0">
            <span className="font-heading text-[20px] font-medium tracking-tight text-forest">
              {BUSINESS_NAME}
            </span>
          </a>

          <nav className="hidden items-center gap-0.5 xl:flex">
            {NAV_LINKS.map(({ label, href }) => {
              const id = href.replace("#", "");
              const isActive = activeId === id;
              return (
                <a
                  key={id}
                  href={href}
                  className={cn(
                    "relative px-3 py-2 text-[13.5px] font-medium whitespace-nowrap transition-colors duration-200",
                    isActive ? "text-cocoa" : "text-forest/70 hover:text-forest"
                  )}
                >
                  {label}
                  {isActive && <span className="absolute right-3 bottom-0 left-3 h-[2px] rounded-full bg-cocoa" />}
                </a>
              );
            })}
          </nav>

          <div className="hidden items-center gap-3 xl:flex">
            <a
              href={`tel:${PHONE_RAW}`}
              aria-label={PHONE_DISPLAY}
              title={PHONE_DISPLAY}
              className="flex size-9 shrink-0 items-center justify-center rounded-full text-forest/70 transition-colors hover:bg-forest/5 hover:text-cocoa"
            >
              <Phone className="size-4" />
            </a>
            <WhatsappButton label="Жазылуға өтініш" className="whitespace-nowrap" />
          </div>

          <button
            className="flex size-10 items-center justify-center rounded-full bg-forest/5 text-forest transition-colors hover:bg-forest/10 xl:hidden"
            onClick={() => setMenuOpen((o) => !o)}
            aria-label="Мәзірді ашу"
          >
            {menuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </header>

      {menuOpen && (
        <div
          className="fixed inset-0 z-40 bg-forest/40"
          onClick={() => setMenuOpen(false)}
          aria-hidden
        />
      )}

      <div
        className={cn(
          "fixed top-0 right-0 bottom-0 z-50 flex w-[min(320px,90vw)] flex-col overflow-y-auto bg-ivory transition-transform duration-300 ease-out xl:hidden",
          menuOpen ? "translate-x-0 shadow-2xl" : "translate-x-full"
        )}
      >
        <div className="flex items-center justify-between border-b border-forest/10 px-5 py-5">
          <span className="font-heading text-[18px] font-medium text-forest">{BUSINESS_NAME}</span>
          <button
            onClick={() => setMenuOpen(false)}
            className="flex size-9 items-center justify-center rounded-full bg-forest/5 text-forest"
            aria-label="Жабу"
          >
            <X className="size-5" />
          </button>
        </div>

        <nav className="flex flex-col gap-1 px-5 pt-6">
          {NAV_LINKS.map(({ label, href }) => {
            const id = href.replace("#", "");
            const isActive = activeId === id;
            return (
              <a
                key={id}
                href={href}
                onClick={() => setMenuOpen(false)}
                className={cn(
                  "rounded-lg px-3 py-3 text-[16px] font-medium transition-colors",
                  isActive ? "bg-sage/20 text-cocoa" : "text-forest/80"
                )}
              >
                {label}
              </a>
            );
          })}
        </nav>

        <div className="mt-6 flex flex-col gap-4 px-5">
          <a
            href={`tel:${PHONE_RAW}`}
            className="flex items-center gap-2 text-[15px] font-semibold text-forest"
          >
            <Phone className="size-4 text-cocoa" />
            {PHONE_DISPLAY}
          </a>
          <WhatsappButton label="Жазылуға өтініш" className="w-full justify-center" />
        </div>

        <p className="mt-auto px-5 py-6 text-center text-[13px] text-forest/40">
          © {new Date().getFullYear()} {BUSINESS_NAME}
        </p>
      </div>
    </>
  );
}

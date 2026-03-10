"use client";

import { useState, useEffect } from "react";

// ─── SVG Icons ──────────────────────────────────────────────────────────────

const PhoneIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 8.8a19.79 19.79 0 01-3.07-8.64A2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92z" />
  </svg>
);

const WhatsAppIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.12 1.526 5.855L.057 23.143a.75.75 0 00.916.899l5.453-1.437A11.932 11.932 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75a9.713 9.713 0 01-4.95-1.352l-.355-.211-3.678.969.984-3.595-.231-.369A9.72 9.72 0 012.25 12C2.25 6.615 6.615 2.25 12 2.25S21.75 6.615 21.75 12 17.385 21.75 12 21.75z" />
  </svg>
);

const InstagramIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const CalendarIcon = () => (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
    <line x1="16" y1="2" x2="16" y2="6" />
    <line x1="8" y1="2" x2="8" y2="6" />
    <line x1="3" y1="10" x2="21" y2="10" />
  </svg>
);

const CloseIcon = () => (
  <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
  </svg>
);

const BurgerIcon = () => (
  <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
  </svg>
);

// ─── Config ─────────────────────────────────────────────────────────────────

const NAV_LINKS = [
  { label: "Басты бет", href: "#", id: "hero" },
  { label: "Біз туралы", href: "#about", id: "about" },
  { label: "Бізбен байланысыңыз", href: "#communication", id: "communication" },
];

const goToWhatsapp = (phoneNumber: string) => {
  if (!phoneNumber) {
    console.error("Номер телефона не передан");
    return;
  }
  const cleanNumber = phoneNumber.replace(/\D/g, "");
  const formattedNumber = cleanNumber.startsWith("8")
    ? "7" + cleanNumber.slice(1)
    : cleanNumber;
  const message =
    "Сәлеметсіз бе! Мен массаж орталығына жазылу үшін хабарласып отырмын. Қолжетімді уақыт пен қызмет түрлері туралы ақпарат берсеңіз.";
  const encodedMessage = encodeURIComponent(message);
  const url = `https://wa.me/${formattedNumber}?text=${encodedMessage}`;
  window.open(url, "_blank");
};


const PHONE = "(+7747) 300 93 92";
const PHONE_RAW = "+77473009392";

const SOCIALS = [
  { label: "WhatsApp", href: "https://wa.me/77473009392", icon: <WhatsAppIcon /> },
  { label: "Instagram", href: "https://instagram.com", icon: <InstagramIcon /> },
];

// ─── Component ───────────────────────────────────────────────────────────────

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeId, setActiveId] = useState("hero");
  const [scrolled, setScrolled] = useState(false);

  // Shadow on scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Active section tracking
  useEffect(() => {
    const handleScroll = () => {
      const mid = window.scrollY + window.innerHeight / 2;
      let closest = NAV_LINKS[0].id;
      let minDist = Infinity;
      NAV_LINKS.forEach(({ id }) => {
        const el = document.getElementById(id);
        if (!el) return;
        const top = window.scrollY + el.getBoundingClientRect().top;
        const dist = Math.abs(mid - (top + el.offsetHeight / 2));
        if (dist < minDist) { minDist = dist; closest = id; }
      });
      setActiveId(closest);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  // Close menu on lg+ resize
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1024) setMenuOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 bg-white transition-shadow duration-300"
        style={{ boxShadow: scrolled ? "0 2px 16px rgba(92,134,146,0.10)" : "0 1px 0 #f0f0f0" }}
      >
        <div className="container mx-auto px-4 md:px-8 xl:px-[100px] h-[68px] flex items-center justify-between gap-4">

          {/* Logo */}
          <a href="/" className="flex-shrink-0">
            <span className="font-extrabold text-[20px] tracking-tight" style={{ color: "#1a1a1a" }}>
              Массаж <span style={{ color: "#5C8692" }}>орталығы</span>
            </span>
          </a>

          {/* Desktop nav — lg+ only */}
          <nav className="hidden xl:flex items-center gap-1">
            {NAV_LINKS.map(({ label, href, id }) => (
              <a
                key={id}
                href={href}
                className="relative px-4 py-2 text-[15px] font-medium transition-colors duration-200"
                style={{ color: activeId === id ? "#5C8692" : "#333333" }}
              >
                {label}
                {activeId === id && (
                  <span
                    className="absolute bottom-0 left-4 right-4 h-[2px] rounded-full"
                    style={{ backgroundColor: "#5C8692" }}
                  />
                )}
              </a>
            ))}
          </nav>

          {/* Desktop right side — lg+ only */}
          <div className="hidden xl:flex items-center gap-5">
            {/* Phone */}
            <a
              href={`tel:${PHONE_RAW}`}
              className="flex items-center gap-2 text-[15px] font-medium text-gray-700 hover:text-[#5C8692] transition-colors duration-200"
            >
              <PhoneIcon />
              {PHONE}
            </a>

            {/* Socials */}
            <div className="flex items-center gap-2">
              {SOCIALS.map(({ label, href, icon }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full flex items-center justify-center transition-colors duration-200"
                  style={{ color: "#5C8692", backgroundColor: "#f0f6f7" }}
                  onMouseEnter={e => (e.currentTarget.style.backgroundColor = "#daeaed")}
                  onMouseLeave={e => (e.currentTarget.style.backgroundColor = "#f0f6f7")}
                >
                  {icon}
                </a>
              ))}
            </div>

            {/* CTA button */}
            <button
              onClick={() => goToWhatsapp(PHONE_RAW)}
              className="flex items-center gap-2 px-5 py-2.5 text-white text-[14px] font-semibold rounded-sm transition-opacity duration-200 hover:opacity-90"
              style={{ backgroundColor: "#5C8692", border: "none", cursor: "pointer" }}
            >
              <CalendarIcon />
              БРОНДАУ
            </button>
          </div>

          {/* Burger — visible below lg (mobile + tablet) */}
          <button
            className="flex xl:hidden items-center justify-center w-10 h-10 rounded-full bg-gray-100 text-gray-800 cursor-pointer transition-colors duration-200 hover:bg-gray-200"
            onClick={() => setMenuOpen(o => !o)}
            aria-label="Toggle menu"
            style={{ border: "none" }}
          >
            {menuOpen ? <CloseIcon /> : <BurgerIcon />}
          </button>
        </div>
      </header>

      {/* ── Mobile/Tablet overlay ── */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-40"
          style={{ backgroundColor: "rgba(0,0,0,0.45)" }}
          onClick={closeMenu}
        />
      )}

      {/* ── Mobile/Tablet slide-in menu ── */}
      <div
        className="fixed top-0 right-0 bottom-0 z-50 flex flex-col bg-white xl:hidden overflow-y-auto"
        style={{
          width: "min(320px, 90vw)",
          transform: menuOpen ? "translateX(0)" : "translateX(100%)",
          transition: "transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
          boxShadow: menuOpen ? "-4px 0 24px rgba(0,0,0,0.12)" : "none",
        }}
      >
        {/* Menu header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100">
          <span className="font-extrabold text-[18px]" style={{ color: "#1a1a1a" }}>
            Массаж<span style={{ color: "#5C8692" }}>орталығы</span>
          </span>
          <button
            onClick={closeMenu}
            className="w-9 h-9 rounded-full flex items-center justify-center bg-gray-100 text-gray-700"
            style={{ border: "none", cursor: "pointer" }}
          >
            <CloseIcon />
          </button>
        </div>

        {/* Nav links */}
        <nav className="flex flex-col px-5 pt-6 gap-1">
          {NAV_LINKS.map(({ label, href, id }) => (
            <a
              key={id}
              href={href}
              onClick={closeMenu}
              className="flex items-center gap-3 py-3 px-3 rounded-lg text-[17px] font-medium transition-colors duration-200"
              style={{
                color: activeId === id ? "#5C8692" : "#333333",
                backgroundColor: activeId === id ? "#f0f6f7" : "transparent",
              }}
            >
              {activeId === id && (
                <span className="w-1 h-5 rounded-full flex-shrink-0" style={{ backgroundColor: "#5C8692" }} />
              )}
              {label}
            </a>
          ))}
        </nav>

        {/* Divider */}
        <div className="mx-5 my-5 border-t border-gray-100" />

        {/* Phone */}
        <a
          href={`tel:${PHONE_RAW}`}
          className="flex items-center gap-3 px-8 py-3 text-[16px] font-semibold text-gray-800 hover:text-[#5C8692] transition-colors"
        >
          <span style={{ color: "#5C8692" }}><PhoneIcon /></span>
          {PHONE}
        </a>

        {/* Socials */}
        <div className="flex items-center gap-3 px-8 pt-4">
          {SOCIALS.map(({ label, href, icon }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 rounded-full flex items-center justify-center"
              style={{ color: "#5C8692", backgroundColor: "#f0f6f7" }}
            >
              {icon}
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="px-5 mt-6">
          <button
            onClick={() => {
              closeMenu();
              goToWhatsapp(PHONE_RAW);
            }}
            className="flex items-center justify-center gap-2 w-full py-3.5 text-white font-semibold text-[15px] rounded-sm"
            style={{ backgroundColor: "#5C8692", border: "none", cursor: "pointer" }}
          >
            <CalendarIcon />
            БРОНДАУ
          </button>
        </div>

        {/* Footer note */}
        <p className="mt-auto px-8 py-6 text-[13px] text-gray-400 text-center">
          © 2025 Массаж орталығы
        </p>
      </div>
    </>
  );
}
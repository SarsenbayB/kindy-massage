//src/components/Hero/Hero.tsx
"use client";

import WelcomeIcon from '@/app/icons/Welcome';
import Image from 'next/image';

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


const PHONE_RAW = "+77473009392";

export default function Hero() {
  return (
    <section
      className="relative w-full min-h-screen overflow-hidden"
      style={{ backgroundColor: '#F5F0E9' }}
    >
      <div className="container mx-auto mt-24 flex flex-col xl:flex-row items-center justify-between px-4 md:px-8 xl:px-[100px] lg:pr-0 pb-3">

        {/* LEFT CONTENT */}
        <div className="flex flex-col justify-center items-center text-center xl:items-start xl:text-left gap-6 max-w-140 z-10 py-8 xl:py-16 w-full">

          {/* Welcome badge */}
          <div className="flex items-center gap-2">
            <WelcomeIcon
              className="w-4 h-4 flex shrink-0"
              style={{ color: '#5C8692' }}
            />
            <span
              className="uppercase tracking-widest font-medium"
              style={{
                color: '#5C8692',
                fontSize: '15px',
                letterSpacing: '0.12em',
              }}
            >
              Қош келдіңіз!!!
            </span>
          </div>

          {/* Heading */}
          <h1
            className="font-bold leading-[1.1] text-[#141414] text-[32px] lg:text-[55px]"
          >
            Моторлы дамыту және Балалар массаж орталығы!!!
          </h1>

          {/* Subtext */}
          <p
            className="font-semibold leading-relaxed"
            style={{
              color: '#141414',
              fontSize: '19px',
              maxWidth: '480px',
            }}
          >
            Дені сау қозғалыс — бақытты балалық шақ. Балаларға арналған кәсіби
            массаж және моторлы дамыту бағдарламалары.
          </p>

          {/* CTA Button */}
          <div className="mt-2">
            <button
              onClick={() => goToWhatsapp(PHONE_RAW)}
              className="uppercase tracking-widest px-12 py-5 font-medium transition-opacity duration-200 hover:opacity-90 active:opacity-80"
              style={{
                backgroundColor: '#5C8692',
                color: '#FFFFFF',
                fontSize: '14px',
                letterSpacing: '0.15em',
              }}
            >
              Брондау
            </button>
          </div>
        </div>

        {/* RIGHT IMAGE - desktop only (unchanged) */}
        <div className="hidden xl:flex absolute right-0 top-0 shrink-0 items-center justify-end">
          <Image
            src="/assets/baby_no.png"
            alt="Балалар массаж орталығы"
            width={1020}
            height={680}
            className="object-contain overflow-hidden"
            priority
          />
        </div>

      </div>

      {/* MOBILE & TABLET IMAGE - Rectangle.png, below text in normal flow */}
      <div className="xl:hidden w-full">
        <Image
          src="/assets/baby_no.png"
          alt="Балалар массаж орталығы"
          width={800}
          height={600}
          className="w-full h-auto object-cover"
          priority
        />
      </div>

    </section>
  );
}
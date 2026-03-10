//src/components/LifeContent/LifeContent.tsx
import Image from 'next/image';

export default function LifeContent() {
  return (
    <section
      id="about"
      className="relative w-full min-h-screen overflow-hidden"
      style={{ backgroundColor: '#F5F0E9' }}
    >
      <div className="container mx-auto mt-24 flex flex-col xl:flex-row items-center justify-between px-4 md:px-8 xl:px-[100px] pb-3">

        {/* LEFT CONTENT */}
        <div className="flex flex-col justify-center items-center text-center xl:items-start xl:text-left gap-6 max-w-140 z-10 py-8 xl:py-16 w-full">

          <div className="flex items-center gap-2">
            <span
              className="uppercase tracking-widest font-medium"
              style={{
                color: '#5C8692',
                fontSize: '15px',
                letterSpacing: '0.12em',
              }}
            >
              Балаңызға қамқорлық жасаңыз
            </span>
          </div>

          {/* Heading */}
          <h1
            className="font-Regular leading-[1.1] text-[#141414] text-[32px] lg:text-[40px]"
          >
            Баланың өмір сапасын жақсартып, дене мен жан тепе-теңдігін қалыптастырыңыз
          </h1>

          {/* Subtext */}
          <p
            className="font-Regular leading-relaxed"
            style={{
              color: '#141414',
              fontSize: '19px',
              maxWidth: '480px',
            }}
          >
            Біздің орталық балаларыңыздың тынығып, өзін қауіпсіз әрі сенімді
            сезінуі үшін арнайы жасалған. Әрбір массаж мейірімді, тәжірибелі
            мамандардың бақылауымен өтеді. Біз үшін ең бастысы — тазалық,
            қауіпсіздік және баланың жайлылығы.
          </p>
        </div>

        {/* RIGHT IMAGE - desktop only (unchanged) */}
        <div className="hidden xl:flex items-center justify-end w-full">
          <Image
            src="/assets/IMAGE.png"
            alt="Балалар массаж орталығы"
            width={520}
            height={576}
            className="object-contain overflow-hidden"
            priority
          />
        </div>



        {/* MOBILE & TABLET IMAGE - Rectangle.png, below text in normal flow */}
        <div className="xl:hidden w-full">
          <Image
            src="/assets/IMAGE.png"
            alt="Балалар массаж орталығы"
            width={500}
            height={576}
            className="w-full h-auto object-cover"
            priority
          />
        </div>
      </div>

    </section>
  );
}
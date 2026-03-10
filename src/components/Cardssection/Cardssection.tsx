import Link from "next/link";
import Image from "next/image";
import { CardItemProps } from "@/types/cards";
import React from "react";

const CardsItemTwo: React.FC<CardItemProps> = ({
  cardImageSrc,
  cardTitle,
  cardContent,
}) => {
  return (
    <div className="rounded-[10px] bg-white shadow-1 dark:bg-gray-dark dark:shadow-card">
      <Link href="#" className="block px-4 pt-4">
        <Image
          width={432}
          height={238}
          src={cardImageSrc || ""}
          alt="Cards"
          className="w-full h-[238px] object-cover rounded-[6px]"
        />
      </Link>

      <div className="p-6">
        <h4 className="mb-3 text-xl font-semibold text-dark hover:text-primary dark:text-white dark:hover:text-primary">
          <Link href="#">{cardTitle}</Link>
        </h4>
        <p className="w-full max-w-[290px] font-medium text-body-color dark:text-body-color-dark">
          {cardContent}
        </p>

        <div className="mt-6">
          <Link
            href="#"
            className="inline-flex items-center justify-center border border-[#5C8692] text-dark dark:text-white hover:bg-[#5C8692] hover:text-white transition-colors duration-200 text-sm tracking-widest font-medium"
            style={{ width: "157px", height: "57px" }}
          >
            READ MORE
          </Link>
        </div>
      </div>
    </div>
  );
};

const cards: CardItemProps[] = [
  {
    cardImageSrc: "/assets/BackIMAGE.png",
    cardTitle: "Нәресте массажы",
    cardContent:
      "Нәрестенің денесін жұмсақ әрі қауіпсіз тәсілмен уқалау оның бұлшық еттерін босаңсытып...",
  },
  {
    cardImageSrc: "/assets/LegsIMAGE.png",
    cardTitle: "Даму мен саулық",
    cardContent:
      "Арнайы массаж қозғалыстары қан айналымын жақсартып, моторлық дағдылардың дамуына ықпал етеді.",
  },
  {
    cardImageSrc: "/assets/InsideIMAGE.png",
    cardTitle: "Ұйқыны жақсарту",
    cardContent:
      "Массаж баланың денесін босаңсытып, жүйке жүйесін тыныштандырады. Бұл баланың тез ұйықтауына,",
  },
];

const CardsSection: React.FC = () => {
  return (
    <section className="relative w-full min-h-screen overflow-hidden bg-gray-100">
      <div className="container mx-auto mt-24 flex flex-col xl:flex-row items-center justify-between px-4 md:px-8 xl:px-[100px] lg:pr-0 pb-3">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 w-full">
          {cards.map((card, index) => (
            <CardsItemTwo key={index} {...card} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CardsSection;
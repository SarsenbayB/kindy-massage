import type { AdultService } from "./model";

// Бағасы жеке келісім бойынша — клиенттен нақты баға тізімі алынған соң толықтырылады.
export const adultServices: AdultService[] = [
  {
    id: "classic",
    title: "Классикалық массаж",
    description: "Дене бұлшықеттерін босаңсытып, шаршауды алатын дәстүрлі релаксация массажы.",
    imageSrc: "/assets/photoshoot/adult-classic.png",
  },
  {
    id: "fire",
    title: "От массажы",
    description: "Жылу әсерін қолданатын, қан айналымын жандандыратын ерекше техника.",
    imageSrc: "/assets/photoshoot/adult-fire.png",
  },
  {
    id: "facial",
    title: "Бет әлпетке массаж",
    description: "Бет бұлшықеттерін жұмсартып, терінің тонусын жақсартатын жайлы процедура.",
    imageSrc: "/assets/photoshoot/adult-facial.png",
  },
  {
    id: "bamboo",
    title: "Бамбук массажы",
    description: "Табиғи бамбук таяқшаларымен жасалатын тереңдетілген релаксация массажы.",
    imageSrc: "/assets/photoshoot/adult-bamboo.png",
  },
  {
    id: "honey",
    title: "Бал массажы",
    description: "Табиғи бал қолданылатын, теріні тазартуға және тынығуға көмектесетін массаж.",
    imageSrc: "/assets/photoshoot/adult-honey.png",
  },
];

export type Benefit = {
  icon: "heart" | "sparkles" | "moon" | "shield";
  title: string;
  description: string;
};

export const benefits: Benefit[] = [
  {
    icon: "sparkles",
    title: "Жеке тәсіл",
    description: "Тәжірибелі мамандар әр балаға жеке бағдарлама ұсынады.",
  },
  {
    icon: "heart",
    title: "Моторлы дамуды қолдау",
    description: "Бұлшықетті нығайтып, қимыл-қозғалысты жақсартады.",
  },
  {
    icon: "moon",
    title: "Тыныш ұйқы",
    description: "Жүйкені тыныштандырып, ұйқы сапасын арттырады.",
  },
  {
    icon: "shield",
    title: "Қауіпсіздік пен тазалық",
    description: "Балаларға арналған табиғи және гипоаллергенді құралдар.",
  },
];

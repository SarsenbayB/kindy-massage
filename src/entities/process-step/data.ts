export type ProcessStep = {
  number: string;
  title: string;
  description: string;
};

export const processSteps: ProcessStep[] = [
  { number: "01", title: "Хабарласу", description: "WhatsApp немесе телефон арқылы жазылу, өзіңізге қолайлы уақытты таңдау." },
  { number: "02", title: "Кездесу", description: "Алғашқы кеңесте баланың қажеттілігі анықталып, жеке бағдарлама құрылады." },
  { number: "03", title: "Сеанс", description: "Жайлы, таза және қауіпсіз ортада жеке бағдарлама бойынша массаж." },
  { number: "04", title: "Қолдау", description: "Үй жағдайында жалғастыру бойынша ата-анаға кеңес беріледі." },
];

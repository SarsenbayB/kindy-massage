import Check from "@/app/icons/Check";

const benefits = [
  {
    title: "Денсаулыққа қамқорлық",
    description: "Қауіпсіз және тиімді массаж – балаңыздың дұрыс дамуына қолдау.",
  },
  {
    title: "Жеке тәсіл",
    description: "Тәжірибелі мамандар әр балаға жеке бағдарлама ұсынады.",
  },
  {
    title: "Моторлы дамуды қолдау",
    description: "Бұлшықетті нығайтып, қимыл-қозғалысты жақсартады.",
  },
  {
    title: "Тыныш ұйқы",
    description: "Жүйкені тыныштандырып, ұйқы сапасын арттырады.",
  },
  {
    title: "Иммунитетті күшейту",
    description: "Қан айналымын жақсартып, ағзаны нығайтады.",
  },
  {
    title: "Қауіпсіздік пен тазалық",
    description: "Балаларға арналған табиғи және гипоаллергенді құралдар.",
  },
];

export default function BenefitsSection() {
  return (
    <section className="w-full">
      <div className="container px-4 md:px-8 xl:px-[100px] pb-16 mx-auto ">
        {/* Header */}
        <div className="mb-12">
          <p
            className="text-center mb-3 tracking-widest uppercase"
            style={{ color: "#5C8692", fontSize: "15px" }}
          >
            Біз ұсынатын артықшылықтар
          </p>
          <h2
            className="text-center font-normal"
            style={{ color: "#141414", fontSize: "45px", lineHeight: "1.2" }}
          >
            Баланың денсаулығына
            <br />
            қамқорлық
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-x-10 gap-y-12">
          {benefits.map((item, index) => (
            <div key={index} className="flex flex-col gap-4">
              {/* Icon box */}
              <div
                className="cursor-pointer flex items-center rounded-md border-4 border-double justify-center flex-shrink-0"
                style={{
                  backgroundColor: "#5C8692",
                  width: "84px",
                  height: "84px",
                  color: "#FFFFFF",
                }}
              >
                <Check />
              </div>

              {/* Text */}
              <div className="flex flex-col gap-2">
                <h3
                  className="font-normal"
                  style={{ color: "#141414", fontSize: "26px" }}
                >
                  {item.title}
                </h3>
                <p
                  className="font-normal leading-relaxed"
                  style={{ color: "#555555", fontSize: "18px" }}
                >
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
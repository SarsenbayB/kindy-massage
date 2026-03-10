//PricingTable.tsx
"use client";

import React from "react";

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

const PHONE = "77473009392";

const pricingPlans = [
  {
    popular: false,
    type: "Бастапқы",
    subTitle: "Жаңа туған және 1 жасқа дейінгі балаларға арналған массаж.",
    price: "8 000",
    features: [
      "20–25 минут массаж",
      "Жалпы нығайтушы массаж",
      "Қан айналымды жақсарту",
      "Бұлшықетті босаңсыту",
      "Тәжірибелі маман",
    ],
    button: { text: "Жазылу" },
  },
  {
    popular: true,
    type: "Стандарт",
    subTitle: "1–3 жас аралығындағы балаларға арналған кешенді массаж.",
    price: "12 000",
    features: [
      "30–35 минут массаж",
      "Моторлы дамытушы массаж",
      "Омыртқа мен бұлшықетке жұмыс",
      "Ұйқыны жақсартуға көмектеседі",
      "Баламен жеке жұмыс",
    ],
    button: { text: "Жазылу" },
  },
  {
    popular: false,
    type: "Премиум",
    subTitle: "Емдік және түзетуге арналған кәсіби массаж.",
    price: "18 000",
    features: [
      "40–45 минут массаж",
      "Емдік массаж",
      "Ортопедиялық элементтер",
      "Жеке бағдарлама",
      "Ата-анаға кеңес беру",
    ],
    button: { text: "Жазылу" },
  },
];

const PricingTable: React.FC = () => {
  return (
    <section id="services" className="w-full bg-white py-16">
      {/* Header */}
      <div className="text-center mb-12">
        <p
          className="uppercase tracking-widest font-medium mb-3"
          style={{ color: "#5C8692", fontSize: "15px" }}
        >
          Біздің қызметтер
        </p>
        <h2
          className="font-normal"
          style={{ color: "#141414", fontSize: "45px", lineHeight: 1.1 }}
        >
          Бағалар кестесі
        </h2>
      </div>

      {/* Cards */}
      <div className="container flex flex-col gap-4 xl:flex-row md:gap-6 justify-between mx-auto px-4 md:px-8 xl:px-[100px]">
        {pricingPlans.map((plan, index) => (
          <div
            key={index}
            className="relative overflow-hidden flex-1 rounded-[10px] bg-white px-5 py-11 text-center md:px-9 xl:px-12"
            style={{ boxShadow: "0 1px 8px 0 rgba(0,0,0,0.08)" }}
          >
            {/* Popular badge */}
            {plan.popular && (
              <p
                className="absolute -right-9 top-5 inline-flex rotate-45 px-12 py-2 text-base font-medium text-white"
                style={{ backgroundColor: "#5C8692" }}
              >
                Ең көп таңдау
              </p>
            )}

            {/* Title block */}
            <div
              className="mb-7 border-b pb-7"
              style={{ borderColor: "#E8E8E8", minHeight: "150px" }}
            >
              <span
                className="mb-3 block font-bold"
                style={{ color: "#141414", fontSize: "22px" }}
              >
                {plan.type}
              </span>
              <p
                className="mx-auto font-medium"
                style={{ maxWidth: "210px", color: "#6B7280" }}
              >
                {plan.subTitle}
              </p>
            </div>

            {/* Features */}
            <ul className="mb-9 flex flex-col gap-3">
              {plan.features.map((feature, featureIndex) => (
                <li
                  key={featureIndex}
                  className="font-medium"
                  style={{ color: "#374151" }}
                >
                  {feature}
                </li>
              ))}
            </ul>

            {/* Price */}
            <h2
              className="mb-6 font-bold"
              style={{ color: "#141414", fontSize: "42px", lineHeight: 1.21 }}
            >
              <span>{plan.price} ₸</span>
              <span
                className="text-base font-medium"
                style={{ color: "#6B7280" }}
              >
                {" "}
                /сеанс
              </span>
            </h2>

            {/* Button */}
            <button
              onClick={() => goToWhatsapp(PHONE)}
              className="cursor-pointer mt-6 flex w-full justify-center rounded-[7px] border px-9 py-3 font-bold transition-all duration-200"
              style={
                plan.popular
                  ? {
                    backgroundColor: "#5C8692",
                    borderColor: "#5C8692",
                    color: "#fff",
                  }
                  : {
                    backgroundColor: "transparent",
                    borderColor: "#5C8692",
                    color: "#5C8692",
                  }
              }
              onMouseEnter={(e) => {
                if (!plan.popular) {
                  (e.currentTarget as HTMLButtonElement).style.backgroundColor =
                    "#5C8692";
                  (e.currentTarget as HTMLButtonElement).style.color = "#fff";
                }
              }}
              onMouseLeave={(e) => {
                if (!plan.popular) {
                  (e.currentTarget as HTMLButtonElement).style.backgroundColor =
                    "transparent";
                  (e.currentTarget as HTMLButtonElement).style.color =
                    "#5C8692";
                }
              }}
            >
              {plan.button.text}
            </button>

            <p className="mt-3 font-medium" style={{ color: "#6B7280" }}>
              Алдын ала жазылу қажет
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PricingTable;
//src/components/Cta/Cta.tsx
"use client";

import { useState } from "react";
import { InputGroup } from "../InputGroup";
import { TextArea } from "../Text-area/text-area";

const PHONE = "77473009392";

const goToWhatsapp = (name: string, email: string, phone: string, note: string) => {
  const cleanNumber = PHONE.replace(/\D/g, "");
  const formattedNumber = cleanNumber.startsWith("8")
    ? "7" + cleanNumber.slice(1)
    : cleanNumber;

  const message = [
    `Сәлеметсіз бе! Мен массаж орталығына жазылу үшін хабарласып отырмын.`,
    ``,
    `👤 Аты жөні: ${name}`,
    email ? `📧 Email: ${email}` : null,
    phone ? `📞 Тел: ${phone}` : null,
    note ? `📝 Анықтама: ${note}` : null,
  ]
    .filter(Boolean)
    .join("\n");

  const url = `https://wa.me/${formattedNumber}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank");
};

export default function Cta() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [note, setNote] = useState("");

  const handleSubmit = () => {
    if (!name.trim()) {
      alert("Аты жөнін енгізіңіз");
      return;
    }
    goToWhatsapp(name, email, phone, note);
  };

  return (
    <section
      id="communication"
      className="relative w-full min-h-screen overflow-hidden"
      style={{ backgroundColor: "#F5F0E9" }}
    >
      <div className="container mx-auto mt-24 flex flex-col xl:flex-row items-center justify-between px-4 md:px-8 xl:px-[100px] pb-3">

        {/* LEFT CONTENT */}
        <div className="flex flex-col justify-center items-center text-center xl:items-start xl:text-left gap-6 max-w-140 z-10 py-8 xl:py-16 w-full">
          <div className="flex items-center gap-2">
            <span
              className="uppercase tracking-widest font-medium"
              style={{ color: "#5C8692", fontSize: "15px", letterSpacing: "0.12em" }}
            >
              Арнайы жеңілдік
            </span>
          </div>

          <h1 className="font-Regular leading-[1.1] text-[#141414] text-[32px] lg:text-[40px]">
            50%-ға дейін жеңілдік,<br />
            Ең сұранысқа ие балалар массаж қызметтеріне тиімді ұсыныс.
          </h1>

          <p
            className="font-Regular leading-relaxed"
            style={{ color: "#141414", fontSize: "19px", maxWidth: "480px" }}
          >
            Біздің орталық – жай ғана бір реттік процедура емес.
            Бұл балаңыздың тұрақты дамуы мен денсаулығын қолдаудың маңызды бөлігі.
            Тепе-теңдік, тыныштық және дұрыс даму – әр күннің бір бөлігі болуы тиіс.
          </p>
        </div>

        {/* RIGHT */}
        <div className="flex-col items-center w-full xl:w-[560px] justify-end pb-15">
          <div className="flex-col bg-white p-4 xl:p-10 rounded-xl">
            <InputGroup
              label="Аты жөні"
              type="text"
              placeholder=""
              customClasses="mb-5"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <InputGroup
              label="Email"
              type="email"
              placeholder=""
              customClasses="mb-5"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <InputGroup
              label="Тел"
              type="text"
              placeholder=""
              customClasses="mb-5"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            <TextArea
              label="Анықтама"
              textAreaProps={{
                value: note,
                onChange: (e) => setNote(e.target.value),
              }}
            />
            <button
              onClick={handleSubmit}
              className="bg-[#5C8692] text-[#FFFFFF] cursor-pointer mt-6 flex w-full justify-center rounded-[7px] border px-9 py-3 font-bold transition-all duration-200"
            >
              Жазылу
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
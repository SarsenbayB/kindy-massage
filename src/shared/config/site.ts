export const PHONE_DISPLAY = "+7 771 130 75 23";
export const PHONE_RAW = "+77711307523";

export const BUSINESS_NAME = "Массаж орталығы";

export const ADDRESS_REGION = "Түркістан облысы";
export const ADDRESS_DISTRICT = "Мақтаарал ауданы";
export const ADDRESS_RURAL_DISTRICT = "А.Қалыбеков а/о";
export const ADDRESS_VILLAGE = "Атамұра ауылы";
export const ADDRESS_STREET = "А.Оспанов көшесі, 23/1 үй";
export const ADDRESS_FULL = `${ADDRESS_REGION}, ${ADDRESS_DISTRICT}, ${ADDRESS_RURAL_DISTRICT}, ${ADDRESS_VILLAGE}, ${ADDRESS_STREET}`;
export const BUSINESS_AREA = `${ADDRESS_VILLAGE}, ${ADDRESS_DISTRICT}`;

export const OUTCALL_NOTE = "Үйге шақыру (выезд) қызметі бар";

// TODO: клиенттен нақты жұмыс кестесін алу
export const WORKING_HOURS_PLACEHOLDER = "Жұмыс уақыты алдын ала келісім бойынша";

export const SPECIALIST_NAME = "Жәмила Бақытбек";
export const SPECIALIST_ROLE = "Массаж терапевті — балаларға және ересектерге";

export const WHATSAPP_DEFAULT_MESSAGE =
  "Сәлеметсіз бе! Мен массаж орталығына жазылу үшін хабарласып отырмын. Қолжетімді уақыт пен қызмет түрлері туралы ақпарат берсеңіз.";

export const NAV_LINKS = [
  { label: "Басты бет", href: "#hero" },
  { label: "Қызметтер", href: "#services" },
  { label: "Артықшылықтар", href: "#why-us" },
  { label: "Пікірлер", href: "#reviews" },
  { label: "FAQ", href: "#faq" },
  { label: "Байланыс", href: "#contact" },
] as const;

export const SOCIALS = {
  whatsapp: `https://wa.me/${PHONE_RAW.replace(/\D/g, "")}`,
  instagram: "https://instagram.com/dr.zhami.massage",
  instagramHandle: "@dr.zhami.massage",
};

// TODO: меншікті домен қосылған соң осы мәнді сол доменге ауыстыру
export const SITE_URL = "https://kindy-massage.vercel.app";

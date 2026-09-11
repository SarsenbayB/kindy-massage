import { PHONE_RAW, WHATSAPP_DEFAULT_MESSAGE } from "@/shared/config/site";

function normalizePhone(phone: string): string {
  const digits = phone.replace(/\D/g, "");
  return digits.startsWith("8") ? "7" + digits.slice(1) : digits;
}

export function buildWhatsappUrl(message: string = WHATSAPP_DEFAULT_MESSAGE, phone: string = PHONE_RAW): string {
  return `https://wa.me/${normalizePhone(phone)}?text=${encodeURIComponent(message)}`;
}

export function openWhatsapp(message?: string, phone?: string): void {
  window.open(buildWhatsappUrl(message, phone), "_blank");
}

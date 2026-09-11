"use client";

import { MessageCircle, Phone } from "lucide-react";
import { PHONE_RAW } from "@/shared/config/site";
import { openWhatsapp } from "@/shared/lib/whatsapp";

export function MobileActionBar() {
  return (
    <div className="fixed right-0 bottom-0 left-0 z-40 flex gap-px border-t border-forest/10 bg-ivory/95 backdrop-blur-md xl:hidden">
      <button
        onClick={() => openWhatsapp()}
        className="flex flex-1 items-center justify-center gap-2 bg-cocoa py-4 text-[14px] font-semibold text-ivory"
      >
        <MessageCircle className="size-[18px]" />
        WhatsApp
      </button>
      <a
        href={`tel:${PHONE_RAW}`}
        className="flex flex-1 items-center justify-center gap-2 bg-forest py-4 text-[14px] font-semibold text-ivory"
      >
        <Phone className="size-[18px]" />
        Қоңырау шалу
      </a>
    </div>
  );
}

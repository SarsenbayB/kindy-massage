import { Phone } from "lucide-react";
import { cn } from "@/lib/utils";
import { PHONE_RAW, PHONE_DISPLAY } from "@/shared/config/site";

export function CallButton({ className, showLabel = true }: { className?: string; showLabel?: boolean }) {
  return (
    <a
      href={`tel:${PHONE_RAW}`}
      className={cn(
        "inline-flex items-center gap-2 rounded-sm border border-forest/15 px-6 py-4 text-[13px] font-semibold tracking-[0.1em] text-forest uppercase transition-colors hover:border-cocoa hover:text-cocoa",
        className
      )}
    >
      <Phone className="size-4" />
      {showLabel ? "Қоңырау шалу" : PHONE_DISPLAY}
    </a>
  );
}

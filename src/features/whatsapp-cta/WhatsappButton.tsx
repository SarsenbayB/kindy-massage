"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { openWhatsapp } from "@/shared/lib/whatsapp";

type WhatsappButtonProps = {
  label: string;
  message?: string;
  className?: string;
  variant?: "solid" | "outline";
};

export function WhatsappButton({ label, message, className, variant = "solid" }: WhatsappButtonProps) {
  return (
    <Button
      onClick={() => openWhatsapp(message)}
      className={cn(
        "h-auto rounded-sm px-8 py-4 text-[13px] font-semibold tracking-[0.14em] uppercase transition-opacity hover:opacity-90",
        variant === "solid" && "bg-cocoa text-ivory hover:bg-cocoa",
        variant === "outline" && "border border-cocoa bg-transparent text-cocoa hover:bg-cocoa hover:text-ivory",
        className
      )}
    >
      {label}
    </Button>
  );
}

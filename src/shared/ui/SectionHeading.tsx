import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow: string;
  title: React.ReactNode;
  align?: "left" | "center";
  className?: string;
  titleClassName?: string;
};

export function SectionHeading({ eyebrow, title, align = "left", className, titleClassName }: SectionHeadingProps) {
  return (
    <div className={cn("flex flex-col gap-3", align === "center" && "items-center text-center", className)}>
      <span className="text-sm font-medium uppercase tracking-[0.18em] text-cocoa">{eyebrow}</span>
      <h2
        className={cn(
          "font-heading text-[32px] leading-[1.15] text-forest sm:text-[40px] lg:text-[48px]",
          titleClassName
        )}
      >
        {title}
      </h2>
    </div>
  );
}

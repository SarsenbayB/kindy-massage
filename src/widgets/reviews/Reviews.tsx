import { MessageCircleHeart } from "lucide-react";
import { Container } from "@/shared/ui/Container";
import { SectionHeading } from "@/shared/ui/SectionHeading";
import { reviews } from "@/entities/review/model";

export function Reviews() {
  return (
    <section id="reviews" className="w-full bg-beige/30 py-16 xl:py-24">
      <Container className="flex flex-col gap-12">
        <SectionHeading eyebrow="Ата-аналар пікірі" title="Пікірлер" align="center" />

        {reviews.length === 0 ? (
          <div className="mx-auto flex max-w-[420px] flex-col items-center gap-3 rounded-2xl border border-dashed border-forest/15 bg-white/60 px-10 py-12 text-center">
            <MessageCircleHeart className="size-8 text-forest/30" strokeWidth={1.5} />
            {/* TODO: клиенттен нақты пікірлерді алу — ойдан құрастырылмайды */}
            <p className="text-[15px] leading-relaxed text-forest/55">
              Нақты клиент пікірлері жуырда осы жерде қосылады.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {reviews.map((review) => (
              <div key={review.authorName} className="flex flex-col gap-4 rounded-2xl bg-white p-7 shadow-[0_1px_12px_rgba(38,53,47,0.06)]">
                <p className="text-[15px] leading-relaxed text-forest/75">&ldquo;{review.text}&rdquo;</p>
                <span className="text-[14px] font-semibold text-forest">{review.authorName}</span>
              </div>
            ))}
          </div>
        )}
      </Container>
    </section>
  );
}

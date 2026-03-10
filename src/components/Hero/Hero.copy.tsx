import Image from "next/image";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center pt-[292px] relative overflow-hidden">

      <div className="orb w-[13px] h-[13px] bg-[#FF3BFF] top-[32%] left-[11%]" style={{ animationDelay: "0s" }} />
      <div className="orb w-[11px] h-[11px] bg-[#D94FD5] top-[60%] left-[46%]" style={{ animationDelay: "1.5s" }} />
      <div
        className="orb w-[28px] h-[28px] top-[43%] right-[5.5%]"
        style={{ background: "linear-gradient(135deg,#5C24FF,#00ccff)", animationDelay: "1s" }}
      />
      <div className="orb w-[17px] h-[17px] bg-[#5C24FF] top-[66%] right-[11%]" style={{ animationDelay: "3s" }} />

      <div className="flex flex-col items-center text-center  px-6 max-w-[1100px] w-full relative z-[2]">

        <h1
          className="gradient-text font-[var(--font-montserrat)] font-medium tracking-[0.02em] mb-2 leading-none"
          style={{ fontSize: "clamp(30px, 5.5vw, 80px)" }}
        >
          THE BEST WEBSITE EVER
        </h1>

        <h1
          className="font-[var(--font-montserrat)] font-medium tracking-[0.02em] text-white mb-8 leading-none"
          style={{ fontSize: "clamp(30px, 5.5vw, 80px)" }}
        >
          Scalable.
        </h1>

        <p
          className="font-[var(--font-montserrat)] font-normal text-white max-w-[640px] mb-12 tracking-[0.72px]"
          style={{ fontSize: "clamp(14px, 1.5vw, 20px)", lineHeight: "33px" }}
        >
          Our technology performing fast blockchain (120K TPS) and it has
          guaranteed AI-based data security. Proof of Stake, its consensus
          algorithm enables unlimited speeds.
        </p>
      </div>

      <div
        className="relative w-full max-w-[1200px] mx-auto"
        style={{ height: "clamp(180px, 38vw, 520px)" }}
      >

        <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-[55%] rounded-[50%] pointer-events-none z-[1]"
          style={{
            background: "radial-gradient(ellipse, rgba(92,36,255,0.5) 0%, rgba(217,79,213,0.22) 50%, transparent 70%)",
            filter: "blur(38px)",
          }}
        />

        <Image
          src="/assets/baby_no_bg.png"
          alt="Hero illustration"
          fill
          priority
          className="object-contain overflow-hidden object-bottom z-[2]"
        />

        <div className="absolute bottom-[70%] left-1/2 -translate-x-1/2 flex gap-4 flex-wrap justify-center z-[3] max-[600px]:flex-col max-[600px]:items-center">
          <button className="btn-gradient">Get started</button>

          <button className="bg-black border-2 border-white rounded-full lg:w-[167px] lg:h-[70px] md:w-[150px] md:h-[70px] w-[100px] h-[50px] font-[var(--font-montserrat)] text-[16px] font-medium text-white cursor-pointer transition-colors duration-200 hover:bg-white/[0.08]">
            Read more
          </button>
        </div>
      </div>

    </section>
  );
}
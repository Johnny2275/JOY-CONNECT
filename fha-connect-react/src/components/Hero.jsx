export default function Hero() {
  return (
    <section className="bg-[radial-gradient(120%_100%_at_85%_0%,#1B2154_0%,#0E1230_55%)] text-white relative overflow-hidden pt-14">
      <div className="max-w-[1120px] mx-auto px-6 grid grid-cols-1 md:grid-cols-[1.05fr_0.95fr] gap-6 items-center">
        <div className="py-10 pb-16 md:pb-22">
          <span className="inline-flex items-center gap-2 font-mono text-[12.5px] uppercase tracking-wider text-cyan border border-cyan/35 rounded-full px-3.5 py-1.5 mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan inline-block" />
            Now live in FHA Lugbe
          </span>

          <h1 className="font-display font-semibold text-[34px] md:text-[54px] leading-[1.06]">
            One Starlink dish.
            <br />
            Every house on the street, <span className="text-cyan">online.</span>
          </h1>

          <p className="text-[17px] leading-relaxed text-white/70 max-w-[460px] mt-5 mb-7">
            FHA Connect brings Starlink internet to your compound — no more running data
            every week, no more waiting on NEPA for a signal. Just steady Wi-Fi, shared
            fairly, priced for the street.
          </p>

          <div className="flex gap-3.5 flex-wrap items-center">
            <a
              href="#plans"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full font-semibold text-[15px] bg-amber text-navy hover:brightness-105 hover:-translate-y-px transition"
            >
              Start 3-day trial
            </a>
            <a
              href="#how"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full font-semibold text-[15px] border border-white/28 text-white hover:border-white/55 hover:-translate-y-px transition"
            >
              See how it works
            </a>
          </div>

          <div className="mt-7 flex gap-2.5 items-center text-[13px] text-white/55">
            <span className="font-mono text-cyan">●</span>
            Signal steady since installation — check live status on WhatsApp
          </div>
        </div>

        <div className="relative h-[320px] md:h-[420px]">
          <svg viewBox="0 0 400 420" preserveAspectRatio="xMidYMid meet" className="absolute inset-0 w-full h-full">
            <circle cx="120" cy="360" r="30" fill="none" stroke="rgba(79,216,196,0.28)" strokeWidth="1" />
            <circle cx="120" cy="360" r="52" fill="none" stroke="rgba(79,216,196,0.28)" strokeWidth="1" />
            <circle cx="120" cy="360" r="74" fill="none" stroke="rgba(79,216,196,0.28)" strokeWidth="1" />

            <path
              d="M 360 40 L 120 360"
              stroke="rgba(79,216,196,0.55)"
              strokeWidth="1.6"
              fill="none"
              strokeDasharray="2 10"
              strokeLinecap="round"
            />

            <g transform="translate(340,20)">
              <rect x="-4" y="6" width="28" height="14" rx="2" fill="#2A3168" stroke="rgba(79,216,196,0.6)" />
              <rect x="-16" y="10" width="12" height="6" fill="rgba(79,216,196,0.5)" />
              <rect x="8" y="10" width="12" height="6" fill="rgba(79,216,196,0.5)" />
            </g>

            <g transform="translate(96,352)">
              <path d="M0 16 L24 0 L48 16 V44 H0 Z" fill="#1B2154" stroke="rgba(255,255,255,0.18)" />
              <rect x="18" y="26" width="12" height="18" fill="rgba(79,216,196,0.35)" />
              <rect x="-4" y="10" width="8" height="10" fill="#4B5486" />
            </g>

            <circle r="4" fill="#4FD8C4" style={{ filter: 'drop-shadow(0 0 6px rgba(79,216,196,0.9))' }}>
              <animateMotion dur="2.6s" repeatCount="indefinite" path="M 360 40 L 120 360" />
            </circle>
          </svg>
        </div>
      </div>
    </section>
  )
}

import useReveal from '../hooks/useReveal'

export default function CTABand() {
  const [ref, inView] = useReveal()

  return (
    <div className="max-w-[1120px] mx-auto px-6 pb-24">
      <div
        ref={ref}
        className={`bg-gradient-to-br from-navy3 to-navy text-white rounded-3xl px-10 py-14 text-center transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
      >
        <h2 className="font-display font-semibold text-2xl md:text-[34px] mb-3.5">Try it free for 3 days</h2>
        <p className="text-white/65 text-[15px] mb-7">
          No card required for the trial. If you like the speed, subscribe from the same
          Wi-Fi login page.
        </p>
        <a
          href="#plans"
          className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full font-semibold text-[15px] bg-amber text-navy hover:brightness-105 hover:-translate-y-px transition"
        >
          Start my free trial
        </a>
      </div>
    </div>
  )
}

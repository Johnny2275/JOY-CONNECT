import useReveal from '../hooks/useReveal'

const steps = [
  {
    num: '01',
    title: 'Connect to the network',
    desc: 'Join "JOY-CONNECT" from your Wi-Fi list. A page opens automatically — no app to download.',
  },
  {
    num: '02',
    title: 'Choose a plan',
    desc: 'Pick daily, weekly, or monthly access based on how much you use the internet.',
  },
  {
    num: '03',
    title: 'Pay by transfer or card',
    desc: "Confirm your payment on the page. It's recorded instantly — no need to send a screenshot.",
  },
  {
    num: '04',
    title: "You're online",
    desc: 'Access switches on right away and stays on until your plan expires. Renew anytime.',
  },
]

export default function HowItWorks() {
  const [headRef, headIn] = useReveal()
  const [gridRef, gridIn] = useReveal()

  return (
    <section id="how" className="max-w-[1120px] mx-auto px-6 py-24">
      <div
        ref={headRef}
        className={`max-w-[560px] mb-13 transition-all duration-700 ${headIn ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
      >
        <span className="block font-mono text-[12.5px] uppercase tracking-wider text-muted mb-3.5">
          How it works
        </span>
        <h2 className="font-display font-semibold text-[26px] md:text-4xl">
          From your phone to Wi-Fi, in four steps
        </h2>
        <p className="text-muted text-[15.5px] mt-3.5 leading-relaxed">
          No technician visit, no waiting for a SIM to activate. If you're within range of
          the dish, you're already covered.
        </p>
      </div>

      <div
        ref={gridRef}
        className={`grid grid-cols-2 md:grid-cols-4 gap-px bg-black/10 rounded-2xl overflow-hidden transition-all duration-700 ${gridIn ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
      >
        {steps.map((s) => (
          <div key={s.num} className="bg-white p-7">
            <div className="font-mono text-amber text-[13px] mb-4.5">{s.num}</div>
            <h3 className="font-semibold text-[17px] mb-2">{s.title}</h3>
            <p className="text-sm text-muted leading-snug">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

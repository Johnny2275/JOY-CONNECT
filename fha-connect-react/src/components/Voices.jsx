import useReveal from '../hooks/useReveal'

const voices = [
  {
    quote:
      "I used to spend more on data every month than I now pay for the whole month of Wi-Fi. And it doesn't finish before month end.",
    who: 'Tenant',
    place: 'same street',
  },
  {
    quote: 'My kids do online classes without the video freezing every five minutes. That alone is worth it.',
    who: 'Parent',
    place: 'FHA Lugbe',
  },
  {
    quote: "Payment is stress-free — I pay on the page and I'm back online before I even put my phone down.",
    who: 'Remote worker',
    place: 'nearby compound',
  },
]

export default function Voices() {
  const [headRef, headIn] = useReveal()
  const [gridRef, gridIn] = useReveal()

  return (
    <section className="max-w-[1120px] mx-auto px-6 py-24">
      <div
        ref={headRef}
        className={`max-w-[560px] mb-13 transition-all duration-700 ${headIn ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
      >
        <span className="block font-mono text-[12.5px] uppercase tracking-wider text-muted mb-3.5">
          From the street
        </span>
        <h2 className="font-display font-semibold text-[26px] md:text-4xl">What neighbours are saying</h2>
      </div>

      <div
        ref={gridRef}
        className={`grid grid-cols-1 md:grid-cols-3 gap-5 transition-all duration-700 ${gridIn ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
      >
        {voices.map((v) => (
          <div key={v.who} className="bg-white border border-black/10 rounded-2xl p-7">
            <p className="text-[15px] leading-relaxed text-ink mb-5">"{v.quote}"</p>
            <div className="text-[13px] text-muted">
              <b className="text-ink">{v.who}</b> — {v.place}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

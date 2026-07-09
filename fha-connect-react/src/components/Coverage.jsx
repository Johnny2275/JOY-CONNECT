import useReveal from '../hooks/useReveal'

const rows = [
  { tag: 'LIVE', text: 'Compound & immediate neighbours — full strength' },
  { tag: 'LIVE', text: 'Adjoining street — good signal, outdoor booster installed' },
  { tag: 'NEXT', text: 'Nearby shops & small businesses — planned this quarter' },
  { tag: 'SOON', text: 'Wider FHA Lugbe estate — pending demand' },
]

export default function Coverage() {
  const [ref, inView] = useReveal()

  return (
    <section id="coverage" className="max-w-[1120px] mx-auto px-6 py-24">
      <div
        ref={ref}
        className={`grid grid-cols-1 md:grid-cols-2 gap-14 items-center transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
      >
        <div>
          <span className="block font-mono text-[12.5px] uppercase tracking-wider text-muted mb-3.5">
            Coverage
          </span>
          <h2 className="font-display font-semibold text-2xl md:text-[32px] mt-3.5">
            Built for FHA Lugbe, one street at a time
          </h2>
          <p className="text-muted mt-3.5 leading-relaxed text-[15.5px]">
            The dish sits at a fixed point, and outdoor access points carry the signal
            further down the street. Coverage grows as more streets sign on — here's
            where we stand today.
          </p>
          <ul className="mt-6.5">
            {rows.map((r, i) => (
              <li
                key={r.text}
                className={`flex gap-3.5 py-3.5 text-[14.5px] text-ink ${i !== 0 ? 'border-t border-black/10' : ''}`}
              >
                <span className="font-mono text-[11.5px] text-muted min-w-[74px] pt-0.5">{r.tag}</span>
                {r.text}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative h-[280px] md:h-[340px]">
          <svg viewBox="0 0 380 340" width="100%" height="100%">
            <circle cx="190" cy="170" r="150" fill="none" stroke="rgba(79,216,196,0.15)" strokeWidth="1" />
            <circle cx="190" cy="170" r="105" fill="rgba(79,216,196,0.06)" stroke="rgba(79,216,196,0.3)" strokeWidth="1" />
            <circle cx="190" cy="170" r="60" fill="rgba(79,216,196,0.12)" stroke="#4FD8C4" strokeWidth="1.4" />
            <circle cx="190" cy="170" r="5" fill="#F2A93B" />
            <text x="190" y="150" textAnchor="middle" fontFamily="IBM Plex Mono" fontSize="10" fill="#5B6478">
              DISH
            </text>
            <text x="190" y="292" textAnchor="middle" fontFamily="IBM Plex Mono" fontSize="10" fill="#5B6478">
              planned range
            </text>
          </svg>
        </div>
      </div>
    </section>
  )
}

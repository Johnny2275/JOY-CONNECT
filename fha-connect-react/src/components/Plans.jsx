import { useState } from 'react'
import useReveal from '../hooks/useReveal'
import { whatsappLink } from '../whatsapp'

const plans = [
  {
    name: 'Daily',
    price: '₦200',
    period: 'per day',
    periodLabel: '1 day',
    feats: ['Unlimited browsing for 24 hours', '1 device at a time', 'Good for a day of streaming or calls'],
    featured: false,
  },
  {
    name: 'Weekly',
    price: '₦1,000',
    period: 'per week',
    periodLabel: '7 days',
    feats: ['Unlimited browsing for 7 days', 'Up to 2 devices', 'Priority speed during peak hours'],
    featured: true,
  },
  {
    name: 'Monthly',
    price: '₦5,000',
    period: 'per month',
    periodLabel: '30 days',
    feats: ['Unlimited browsing for 30 days', 'Up to 4 devices', 'Auto-renewal reminder on WhatsApp'],
    featured: false,
  },
]

function PlanCard({ plan }) {
  const [label, setLabel] = useState(`Choose ${plan.name.toLowerCase()}`)

  const handleClick = () => {
    const message = `Hi FHA Connect, I'd like to subscribe to the ${plan.name} plan (${plan.price} / ${plan.periodLabel}). Please send payment details.`
    setLabel('Opening WhatsApp…')
    window.open(whatsappLink(message), '_blank', 'noopener')
    setTimeout(() => setLabel(`Choose ${plan.name.toLowerCase()}`), 1600)
  }

  return (
    <div
      className={`relative bg-navy2 border rounded-2xl p-8 transition-all hover:-translate-y-1 ${
        plan.featured ? 'border-amber' : 'border-white/10 hover:border-cyan/40'
      }`}
    >
      {plan.featured && (
        <span className="absolute -top-3 right-6 bg-amber text-navy text-[11.5px] font-bold px-3 py-1 rounded-full tracking-wide">
          Most picked
        </span>
      )}
      <div className="font-display text-[15px] text-white/65 uppercase tracking-wide">{plan.name}</div>
      <div className="font-mono text-[38px] mt-3.5 mb-0.5">
        <sup className="text-[15px] text-white/50 mr-0.5">₦</sup>
        {plan.price.replace('₦', '')}
      </div>
      <div className="text-[13px] text-white/45 mb-5.5">{plan.period}</div>
      <ul className="mb-6.5">
        {plan.feats.map((f, i) => (
          <li
            key={f}
            className={`text-sm text-white/80 py-2.5 flex gap-2.5 items-start ${i !== 0 ? 'border-t border-white/10' : ''}`}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-cyan mt-1.5 flex-shrink-0" />
            {f}
          </li>
        ))}
      </ul>
      <button
        onClick={handleClick}
        className={`w-full text-center py-3 rounded-full font-semibold text-sm transition ${
          plan.featured
            ? 'bg-amber text-navy hover:brightness-105'
            : 'border border-white/25 text-white hover:border-white'
        }`}
      >
        {label}
      </button>
    </div>
  )
}

export default function Plans() {
  const [headRef, headIn] = useReveal()
  const [gridRef, gridIn] = useReveal()

  return (
    <section id="plans" className="bg-navy text-white">
      <div className="max-w-[1120px] mx-auto px-6 py-24">
        <div
          ref={headRef}
          className={`max-w-[560px] mb-13 transition-all duration-700 ${headIn ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
        >
          <span className="block font-mono text-[12.5px] uppercase tracking-wider text-cyan mb-3.5">Plans</span>
          <h2 className="font-display font-semibold text-[26px] md:text-4xl">Pay for what you actually use</h2>
          <p className="text-white/60 text-[15.5px] mt-3.5 leading-relaxed">
            Every plan runs on the same Starlink connection — the difference is how long
            your access stays on and how many devices you can connect.
          </p>
        </div>

        <div
          ref={gridRef}
          className={`grid grid-cols-1 md:grid-cols-3 gap-5 transition-all duration-700 ${gridIn ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
        >
          {plans.map((p) => (
            <PlanCard key={p.name} plan={p} />
          ))}
        </div>
      </div>
    </section>
  )
}

import { useState } from 'react'
import useReveal from '../hooks/useReveal'

const faqs = [
  {
    q: "What happens if there's no light (NEPA)?",
    a: 'The dish and router run on backup power, so your Wi-Fi stays on even when the area loses electricity — as long as the backup is charged.',
  },
  {
    q: 'How many people can use it at once?',
    a: 'Each plan comes with a device limit so speed stays fair for everyone connected. Need more devices? Move up to the next plan.',
  },
  {
    q: "What if I'm outside the current coverage area?",
    a: "Message us your street name. We're adding outdoor access points as more neighbours sign up — your street could be next.",
  },
  {
    q: 'Can I get a refund if the network is down?',
    a: "If downtime crosses a full day, we extend your plan by the equivalent time — no need to ask, it's applied automatically.",
  },
]

function FaqItem({ item, isOpen, onToggle }) {
  return (
    <div className={`border-t border-black/10 last:border-b`}>
      <button
        onClick={onToggle}
        className="w-full text-left bg-none border-none cursor-pointer py-5.5 flex justify-between items-center font-display text-[16.5px] font-medium text-ink"
      >
        {item.q}
        <span className={`font-mono text-amber text-xl transition-transform duration-200 ${isOpen ? 'rotate-45' : ''}`}>
          +
        </span>
      </button>
      <div
        className="overflow-hidden transition-all duration-300"
        style={{ maxHeight: isOpen ? '200px' : '0px' }}
      >
        <p className="text-[14.5px] text-muted leading-relaxed pb-5.5 max-w-[640px]">{item.a}</p>
      </div>
    </div>
  )
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)
  const [headRef, headIn] = useReveal()
  const [listRef, listIn] = useReveal()

  return (
    <section id="faq" className="max-w-[1120px] mx-auto px-6 py-24">
      <div
        ref={headRef}
        className={`max-w-[560px] mb-13 transition-all duration-700 ${headIn ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
      >
        <span className="block font-mono text-[12.5px] uppercase tracking-wider text-muted mb-3.5">Questions</span>
        <h2 className="font-display font-semibold text-[26px] md:text-4xl">Before you subscribe</h2>
      </div>

      <div
        ref={listRef}
        className={`max-w-[720px] transition-all duration-700 ${listIn ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
      >
        {faqs.map((item, i) => (
          <FaqItem
            key={item.q}
            item={item}
            isOpen={openIndex === i}
            onToggle={() => setOpenIndex(openIndex === i ? null : i)}
          />
        ))}
      </div>
    </section>
  )
}

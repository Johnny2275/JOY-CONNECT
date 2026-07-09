const stats = [
  { num: '40+', label: 'homes connected in FHA Lugbe' },
  { num: '99.1%', label: 'uptime this month' },
  { num: '₦200', label: 'cheapest daily plan' },
  { num: '<2min', label: 'from payment to online' },
]

export default function StatsStrip() {
  return (
    <div className="bg-navy2 border-y border-white/10 text-white">
      <div className="max-w-[1120px] mx-auto px-6 flex flex-wrap justify-between gap-4.5 py-5.5">
        {stats.map((s) => (
          <div key={s.label} className="flex-1 min-w-[160px]">
            <div className="font-mono text-2xl text-cyan">{s.num}</div>
            <div className="text-[12.5px] text-white/60 mt-1">{s.label}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default function Footer() {
  return (
    <footer className="bg-navy text-white/55 pt-16 pb-7 mt-0">
      <div className="max-w-[1120px] mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-[2fr_1fr_1fr] gap-10 pb-10 border-b border-white/10">
          <div>
            <div className="flex items-center gap-2 font-display font-semibold text-lg text-white mb-3.5">
              <span className="w-2.5 h-2.5 rounded-full bg-cyan" />
              FHA Connect
            </div>
            <p className="max-w-[280px] text-sm leading-relaxed">
              Shared Starlink internet for FHA Lugbe, Abuja. Installed on one street,
              growing to the next.
            </p>
          </div>
          <div>
            <h4 className="font-mono text-[13px] uppercase tracking-wide text-white mb-4">Explore</h4>
            <ul className="space-y-1.5">
              <li><a href="#how" className="hover:text-white text-sm">How it works</a></li>
              <li><a href="#plans" className="hover:text-white text-sm">Plans & pricing</a></li>
              <li><a href="#coverage" className="hover:text-white text-sm">Coverage map</a></li>
              <li><a href="#faq" className="hover:text-white text-sm">FAQ</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-mono text-[13px] uppercase tracking-wide text-white mb-4">Reach us</h4>
            <ul className="space-y-1.5">
              <li><a href="#" className="hover:text-white text-sm">WhatsApp: 0813 xxx xxxx</a></li>
              <li><a href="#" className="hover:text-white text-sm">FHA Lugbe, Abuja</a></li>
            </ul>
          </div>
        </div>
        <div className="flex justify-between flex-wrap gap-2.5 pt-6 text-[12.5px]">
          <span>© 2026 FHA Connect. Community internet for FHA Lugbe.</span>
          <span>Built on Starlink</span>
        </div>
      </div>
    </footer>
  )
}

import useLagosClock from '../hooks/useLagosClock'

export default function Header() {
  const clock = useLagosClock()

  return (
    <header className="sticky top-0 z-50 bg-navy/90 backdrop-blur-md border-b border-white/10">
      <nav className="max-w-[1120px] mx-auto flex items-center justify-between px-6 py-4">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 font-display font-semibold text-lg text-white">
            <span className="w-2.5 h-2.5 rounded-full bg-cyan animate-pulseDot" />
            FHA Connect
          </div>
          <div className="hidden sm:block font-mono text-[11.5px] text-white pl-4 border-l border-white/10">
            {clock}
          </div>
        </div>

        <div className="hidden md:flex gap-8 text-sm text-white/75">
          <a href="#how" className="hover:text-white">How it works</a>
          <a href="#plans" className="hover:text-white">Plans</a>
          <a href="#coverage" className="hover:text-white">Coverage</a>
          <a href="#faq" className="hover:text-white">FAQ</a>
        </div>

        <a
          href="#plans"
          className="bg-amber text-navy font-semibold text-sm px-4.5 py-2 rounded-full hover:brightness-105 transition"
        >
          Get connected
        </a>
      </nav>
    </header>
  )
}

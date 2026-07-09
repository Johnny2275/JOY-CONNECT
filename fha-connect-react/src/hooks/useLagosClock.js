import { useEffect, useState } from 'react'

function formatLagosTime() {
  const now = new Date()
  const dateStr = new Intl.DateTimeFormat('en-NG', {
    timeZone: 'Africa/Lagos',
    weekday: 'short',
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  }).format(now)
  const timeStr = new Intl.DateTimeFormat('en-NG', {
    timeZone: 'Africa/Lagos',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: true,
  }).format(now)
  return `${dateStr} · ${timeStr} WAT`
}

export default function useLagosClock() {
  const [now, setNow] = useState(formatLagosTime())

  useEffect(() => {
    const id = setInterval(() => setNow(formatLagosTime()), 1000)
    return () => clearInterval(id)
  }, [])

  return now
}

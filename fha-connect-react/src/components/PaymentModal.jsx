import { useState } from 'react'
import { PAYSTACK_PUBLIC_KEY } from '../config/paystack'
import { supabase } from '../config/supabaseClient'

const PLAN_DURATION_DAYS = {
  Daily: 1,
  Weekly: 7,
  Monthly: 30,
}

export default function PaymentModal({ plan, onClose }) {
  const [phone, setPhone] = useState('')
  const [status, setStatus] = useState('idle') // idle | paying | saving | success | error
  const [error, setError] = useState('')

  const amountInKobo = Number(plan.price.replace(/[₦,]/g, '')) * 100

  const handlePay = () => {
    setError('')

    if (!/^0\d{10}$/.test(phone.trim())) {
      setError('Enter a valid 11-digit phone number, e.g. 08031234567')
      return
    }

    if (!window.PaystackPop) {
      setError('Payment system did not load. Refresh the page and try again.')
      return
    }

    setStatus('paying')

    const handler = window.PaystackPop.setup({
      key: PAYSTACK_PUBLIC_KEY,
      email: `${phone.trim()}@fhaconnect.ng`, // Paystack requires an email; we build a placeholder from the phone number
      amount: amountInKobo,
      currency: 'NGN',
      ref: `FHA-${Date.now()}`,
      metadata: {
        phone: phone.trim(),
        plan: plan.name,
      },
      callback: (response) => {
        saveSubscription(response.reference)
      },
      onClose: () => {
        if (status === 'paying') setStatus('idle')
      },
    })

    handler.openIframe()
  }

  const saveSubscription = async (reference) => {
    setStatus('saving')

    const expiry = new Date()
    expiry.setDate(expiry.getDate() + PLAN_DURATION_DAYS[plan.name])

    const { error: dbError } = await supabase.from('payments').insert({
      phone: phone.trim(),
      plan_name: plan.name,
      amount: amountInKobo / 100,
      reference,
      status: 'success',
      expiry_date: expiry.toISOString(),
    })

    if (dbError) {
      setError('Payment succeeded but saving your subscription failed. Please screenshot this and message us on WhatsApp.')
      setStatus('error')
      return
    }

    setStatus('success')
  }

  return (
    <div className="fixed inset-0 bg-black/60 z-[100] flex items-center justify-center px-4">
      <div className="bg-white rounded-2xl max-w-sm w-full p-7 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-muted hover:text-ink text-xl leading-none"
          aria-label="Close"
        >
          ×
        </button>

        {status !== 'success' && (
          <>
            <h3 className="font-display font-semibold text-xl text-ink mb-1">
              {plan.name} plan — {plan.price}
            </h3>
            <p className="text-sm text-muted mb-5">{plan.period}. Payment is handled securely by Paystack.</p>

            <label className="block text-xs font-mono uppercase tracking-wide text-muted mb-1.5">
              Your phone number
            </label>
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="08031234567"
              className="w-full border border-black/15 rounded-lg px-3.5 py-2.5 text-sm mb-2 text-ink bg-white focus:outline-none focus:border-cyan"
              style={{ transform: 'translateZ(0)', WebkitAppearance: 'none' }}
            />
            {error && <p className="text-sm text-red-600 mb-3">{error}</p>}

            <button
              onClick={handlePay}
              disabled={status === 'paying' || status === 'saving'}
              className="w-full bg-amber text-navy font-semibold py-3 rounded-full hover:brightness-105 transition disabled:opacity-60"
            >
              {status === 'paying' && 'Opening payment…'}
              {status === 'saving' && 'Confirming subscription…'}
              {status === 'idle' && `Pay ${plan.price} now`}
              {status === 'error' && 'Try again'}
            </button>
          </>
        )}

        {status === 'success' && (
          <div className="text-center py-4">
            <div className="text-3xl mb-3">✅</div>
            <h3 className="font-display font-semibold text-xl text-ink mb-2">You're subscribed!</h3>
            <p className="text-sm text-muted mb-5">
              Your {plan.name.toLowerCase()} plan is active. We'll get your Wi-Fi access sorted shortly —
              message us on WhatsApp if it's not on within a few minutes.
            </p>
            <button
              onClick={onClose}
              className="bg-navy text-white font-semibold py-2.5 px-6 rounded-full hover:brightness-110 transition"
            >
              Done
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

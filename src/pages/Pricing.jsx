import { useState, useEffect, useRef } from 'react'
import { C } from '../styles/globals'

function FadeIn({ children, delay = 0 }) {
  const ref = useRef()
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        el.style.opacity = '1'
        el.style.transform = 'translateY(0)'
        observer.disconnect()
      }
    }, { threshold: 0.1 })
    observer.observe(el)
    return () => observer.disconnect()
  }, [])
  return (
    <div ref={ref} style={{
      opacity: 0, transform: 'translateY(20px)',
      transition: `opacity 0.55s ease ${delay}ms, transform 0.55s ease ${delay}ms`,
    }}>
      {children}
    </div>
  )
}

const Check = ({ yes }) => (
  <span style={{
    color: yes ? C.success : C.textLight,
    fontSize: 16,
    fontWeight: 700,
    marginRight: 8,
    flexShrink: 0,
  }}>
    {yes ? '✅' : '❌'}
  </span>
)

const faqs = [
  { q: 'Free plan में credit card चाहिए?', a: 'नहीं — बिल्कुल free शुरू करें, कोई card की जरूरत नहीं।' },
  { q: 'कभी भी cancel कर सकते हैं?', a: 'हाँ — कोई lock-in contract नहीं। जब चाहें cancel करें।' },
  { q: 'Data secure है?', a: 'हाँ — आपका सारा data encrypted servers पर safe रहता है।' },
  { q: 'Print orders पर extra charge?', a: 'सिर्फ actual printing cost — हमारा कोई hidden commission नहीं।' },
  { q: 'Support Hindi में मिलेगा?', a: 'हाँ — Hindi और English दोनों में support available है।' },
]

export default function Pricing() {
  const [yearly, setYearly] = useState(false)
  const [openFaq, setOpenFaq] = useState(null)

  const plans = [
    {
      name: 'Free',
      price: yearly ? '₹0' : '₹0',
      period: '/month',
      badge: null,
      borderColor: '#cccccc',
      headerBg: '#f5f5f5',
      headerColor: C.text,
      btnBg: '#888',
      btnColor: C.white,
      btnLabel: 'Free शुरू करें',
      features: [
        { text: '5 Admissions/month', yes: true },
        { text: 'Basic Enquiry tracking', yes: true },
        { text: '1 WhatsApp template', yes: true },
        { text: '1 Document template', yes: true },
        { text: 'Email support', yes: true },
        { text: 'Print ordering', yes: false },
        { text: 'Vendor marketplace', yes: false },
        { text: 'Advanced analytics', yes: false },
        { text: 'Bulk WhatsApp', yes: false },
      ],
    },
    {
      name: 'Starter',
      price: yearly ? '₹249' : '₹299',
      period: '/month',
      badge: 'Most Popular',
      borderColor: C.green,
      headerBg: C.green,
      headerColor: C.white,
      btnBg: C.green,
      btnColor: C.white,
      btnLabel: 'अभी शुरू करें',
      popular: true,
      features: [
        { text: 'Unlimited Admissions', yes: true },
        { text: 'All WhatsApp automation', yes: true },
        { text: 'All Document templates', yes: true },
        { text: 'Print ordering', yes: true },
        { text: 'Vendor marketplace', yes: true },
        { text: 'Basic Analytics', yes: true },
        { text: 'Priority support', yes: true },
        { text: '1 free print order/month', yes: true },
        { text: 'Multiple branches', yes: false },
        { text: 'API access', yes: false },
      ],
    },
    {
      name: 'Pro',
      price: yearly ? '₹499' : '₹599',
      period: '/month',
      badge: null,
      borderColor: C.gold,
      headerBg: C.gold,
      headerColor: C.dark,
      btnBg: C.gold,
      btnColor: C.dark,
      btnLabel: 'Pro शुरू करें',
      features: [
        { text: 'Everything in Starter', yes: true },
        { text: 'Multiple branches', yes: true },
        { text: 'Advanced analytics', yes: true },
        { text: 'Bulk WhatsApp campaigns', yes: true },
        { text: 'Custom document branding', yes: true },
        { text: 'Dedicated support', yes: true },
        { text: 'API access', yes: true },
        { text: 'White label options', yes: true },
      ],
    },
  ]

  return (
    <>
      {/* Hero */}
      <section style={{ background: C.bg, padding: '80px 24px 56px', textAlign: 'center' }}>
        <FadeIn>
          <h1 style={{ fontSize: 'clamp(32px,5vw,52px)', fontWeight: 800, color: C.text, marginBottom: 12 }}>
            Simple Pricing
          </h1>
          <p style={{ fontSize: 18, color: C.textGray, marginBottom: 36 }}>
            कोई hidden charges नहीं — जो दिखे वही लगे
          </p>

          {/* Toggle */}
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 12, background: C.white, borderRadius: 50, padding: '6px 8px', boxShadow: C.cardShadow }}>
            <button onClick={() => setYearly(false)} style={{
              border: 'none', borderRadius: 50, padding: '8px 20px',
              background: !yearly ? C.green : 'transparent',
              color: !yearly ? C.white : C.textGray,
              fontWeight: 700, fontSize: 14, cursor: 'pointer', transition: 'all 0.2s',
            }}>Monthly</button>
            <button onClick={() => setYearly(true)} style={{
              border: 'none', borderRadius: 50, padding: '8px 20px',
              background: yearly ? C.green : 'transparent',
              color: yearly ? C.white : C.textGray,
              fontWeight: 700, fontSize: 14, cursor: 'pointer', transition: 'all 0.2s',
              display: 'flex', alignItems: 'center', gap: 8,
            }}>
              Yearly
              {yearly && <span style={{ background: C.gold, color: C.dark, fontSize: 10, fontWeight: 800, padding: '2px 8px', borderRadius: 20 }}>2 months FREE</span>}
            </button>
            {!yearly && <span style={{ background: C.gold, color: C.dark, fontSize: 10, fontWeight: 800, padding: '2px 8px', borderRadius: 20, marginRight: 4 }}>2 months FREE →</span>}
          </div>
        </FadeIn>
      </section>

      {/* Cards */}
      <section style={{ background: C.bg, padding: '0 24px 80px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', display: 'flex', gap: 24, flexWrap: 'wrap', alignItems: 'stretch' }}>
          {plans.map((p, i) => (
            <FadeIn key={i} delay={i * 100}>
              <div style={{
                flex: '1 1 280px',
                background: C.white,
                borderRadius: 20,
                overflow: 'hidden',
                border: `${p.popular ? 3 : 1.5}px solid ${p.borderColor}`,
                boxShadow: p.popular ? `0 8px 40px ${C.green}33` : C.cardShadow,
                display: 'flex',
                flexDirection: 'column',
                position: 'relative',
              }}>
                {p.badge && (
                  <div style={{
                    position: 'absolute', top: -1, right: 20,
                    background: C.gold, color: C.dark,
                    fontSize: 11, fontWeight: 800,
                    padding: '4px 14px', borderRadius: '0 0 8px 8px',
                  }}>{p.badge}</div>
                )}
                <div style={{ background: p.headerBg, padding: '28px 24px' }}>
                  <div style={{ fontSize: 20, fontWeight: 800, color: p.headerColor }}>{p.name}</div>
                  <div style={{ marginTop: 12 }}>
                    <span style={{ fontSize: 40, fontWeight: 800, color: p.headerColor }}>{p.price}</span>
                    <span style={{ fontSize: 14, color: p.popular ? 'rgba(255,255,255,0.7)' : C.textGray }}>{p.period}</span>
                  </div>
                  {yearly && i > 0 && (
                    <div style={{ fontSize: 12, marginTop: 4, color: p.popular ? 'rgba(255,255,255,0.7)' : C.textGray }}>
                      Billed yearly · Save 2 months
                    </div>
                  )}
                </div>
                <div style={{ padding: '24px 24px', flex: 1, display: 'flex', flexDirection: 'column', gap: 12 }}>
                  {p.features.map((f, j) => (
                    <div key={j} style={{ display: 'flex', alignItems: 'center', fontSize: 14, color: f.yes ? C.text : C.textLight }}>
                      <Check yes={f.yes} />
                      {f.text}
                    </div>
                  ))}
                </div>
                <div style={{ padding: '0 24px 28px' }}>
                  <a href="https://app.instify.in/signup" style={{
                    display: 'block',
                    background: p.btnBg,
                    color: p.btnColor,
                    textDecoration: 'none',
                    textAlign: 'center',
                    borderRadius: 10,
                    padding: '14px',
                    fontWeight: 800,
                    fontSize: 16,
                    transition: 'all 0.2s',
                  }}
                    onMouseEnter={e => { e.currentTarget.style.opacity = '0.88'; e.currentTarget.style.transform = 'translateY(-1px)' }}
                    onMouseLeave={e => { e.currentTarget.style.opacity = '1'; e.currentTarget.style.transform = 'translateY(0)' }}>
                    {p.btnLabel}
                  </a>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section style={{ background: C.white, padding: '80px 24px' }}>
        <div style={{ maxWidth: 720, margin: '0 auto' }}>
          <FadeIn>
            <h2 style={{ fontSize: 'clamp(26px,3.5vw,38px)', fontWeight: 800, color: C.text, textAlign: 'center', marginBottom: 48 }}>
              अक्सर पूछे जाने वाले सवाल
            </h2>
          </FadeIn>
          {faqs.map((faq, i) => (
            <FadeIn key={i} delay={i * 80}>
              <div style={{
                borderBottom: `1px solid ${C.border}`,
                marginBottom: 0,
              }}>
                <button onClick={() => setOpenFaq(openFaq === i ? null : i)} style={{
                  width: '100%', background: 'none', border: 'none', cursor: 'pointer',
                  display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                  padding: '20px 0', textAlign: 'left',
                }}>
                  <span style={{ fontSize: 16, fontWeight: 600, color: C.text }}>{faq.q}</span>
                  <span style={{
                    fontSize: 20, color: C.green, fontWeight: 700,
                    transform: openFaq === i ? 'rotate(45deg)' : 'rotate(0)',
                    transition: 'transform 0.2s',
                    flexShrink: 0, marginLeft: 16,
                  }}>+</span>
                </button>
                {openFaq === i && (
                  <div style={{ padding: '0 0 20px', fontSize: 15, color: C.textGray, lineHeight: 1.7 }}>
                    {faq.a}
                  </div>
                )}
              </div>
            </FadeIn>
          ))}
        </div>
      </section>
    </>
  )
}

import { useEffect, useRef } from 'react'
import { C } from '../styles/globals'
import SEO from '../components/SEO'

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

const features = [
  {
    icon: '📋',
    title: 'Enquiry Management',
    subtitle: 'Capture every enquiry — never miss a lead',
    points: [
      'Track walk-in, phone and WhatsApp enquiries in one place',
      'Source tracking: Facebook, Walk-in, Reference, Online',
      'Follow-up reminders and automatic alerts',
      'Conversion rate analytics and reports',
    ],
    accent: C.green,
  },
  {
    icon: '🎓',
    title: 'Admission Management',
    subtitle: 'Convert enquiries into admissions',
    points: [
      'Complete student admission form with photo upload',
      'Document collection checklist',
      'Fee structure setup and payment tracking',
      'Full student profile history and updates',
    ],
    accent: C.greenMid,
  },
  {
    icon: '📱',
    title: 'WhatsApp Automation',
    subtitle: 'Messages go out even while you sleep',
    points: [
      'Automatic welcome message on new enquiry',
      'Admission confirmation message',
      'Auto-scheduled fee payment reminders',
      'Result and notice notifications',
      'Bulk messaging to all students',
    ],
    accent: C.gold,
  },
  {
    icon: '📄',
    title: 'Document Builder',
    subtitle: 'Professional documents in 1 click',
    points: [
      'ID Cards with student photo — custom design',
      'Certificates with digital signature support',
      'Exam admit cards — bulk generate',
      'Result sheets — auto-filled from records',
      'Custom branded templates for your institution',
    ],
    accent: C.gold,
  },
  {
    icon: '🖨️',
    title: 'Print Ordering',
    subtitle: 'Order printing directly from the platform',
    points: [
      'Upload your design or use ready-made templates',
      'Compare prices across multiple vendors — best rate guaranteed',
      'Track order status and delivery',
      'Quality guaranteed — 20 years of printing expertise',
    ],
    accent: C.green,
  },
  {
    icon: '📊',
    title: 'Analytics Dashboard',
    subtitle: 'Make decisions from real data',
    points: [
      'Daily, weekly and monthly enquiry counts',
      'Admission conversion rate tracking',
      'Revenue and fee collection dashboard',
      'Export reports in Excel and PDF',
    ],
    accent: C.greenMid,
  },
]

export default function Features() {
  const sectionInner = { maxWidth: 1200, margin: '0 auto' }

  return (
    <>
      <SEO
        title="Features"
        description="Explore INSTIFY's features — Enquiry Management, Admission Tracking, WhatsApp Automation, Document Builder, Print Ordering and Analytics, built by Sanju SK Digital - Mahi Creation."
        path="/features"
        breadcrumb={[{ name: 'Features', path: '/features' }]}
      />
      {/* Hero */}
      <section style={{ background: C.heroGradient, padding: '96px 24px 80px', textAlign: 'center' }}>
        <FadeIn>
          <h1 style={{ color: C.white, fontSize: 'clamp(32px,5vw,52px)', fontWeight: 800, marginBottom: 16 }}>
            All INSTIFY Features
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.82)', fontSize: 18 }}>
            One Platform — Built for Every Need
          </p>
        </FadeIn>
      </section>

      {/* Feature sections */}
      {features.map((f, i) => {
        const even = i % 2 === 0
        return (
          <section key={i} style={{ background: even ? C.white : C.bg, padding: '72px 24px' }}>
            <div style={{ ...sectionInner, display: 'flex', gap: 56, alignItems: 'center', flexWrap: 'wrap' }}>
              <FadeIn delay={100}>
                <div style={{
                  flex: '0 0 auto',
                  order: even ? 0 : 1,
                  width: 200, height: 200,
                  background: `linear-gradient(135deg, ${f.accent}22, ${f.accent}44)`,
                  borderRadius: 32,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: 80,
                  border: `2px solid ${f.accent}33`,
                }}>
                  {f.icon}
                </div>
              </FadeIn>

              <FadeIn delay={200}>
                <div style={{ flex: '1 1 300px', order: even ? 1 : 0 }}>
                  <div style={{
                    display: 'inline-block',
                    background: `${f.accent}18`, color: f.accent,
                    fontSize: 12, fontWeight: 700, padding: '4px 12px',
                    borderRadius: 20, marginBottom: 12,
                    textTransform: 'uppercase', letterSpacing: 1,
                  }}>
                    Feature {String(i + 1).padStart(2, '0')}
                  </div>
                  <h2 style={{ fontSize: 'clamp(24px,3vw,36px)', fontWeight: 800, color: C.text, marginBottom: 8 }}>
                    {f.title}
                  </h2>
                  <p style={{ fontSize: 17, color: C.textGray, marginBottom: 24 }}>{f.subtitle}</p>
                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 12 }}>
                    {f.points.map((p, j) => (
                      <li key={j} style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
                        <span style={{
                          width: 22, height: 22, borderRadius: '50%',
                          background: f.accent, color: C.white,
                          fontSize: 12, fontWeight: 700,
                          display: 'flex', alignItems: 'center', justifyContent: 'center',
                          flexShrink: 0, marginTop: 1,
                        }}>✓</span>
                        <span style={{ fontSize: 15, color: C.textGray, lineHeight: 1.6 }}>{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeIn>
            </div>
          </section>
        )
      })}

      {/* CTA */}
      <section style={{ background: C.heroGradient, padding: '80px 24px', textAlign: 'center' }}>
        <FadeIn>
          <h2 style={{ color: C.white, fontSize: 'clamp(28px,4vw,40px)', fontWeight: 800, marginBottom: 16 }}>
            All Features — One Platform
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: 17, marginBottom: 36 }}>
            Start with a free account — upgrade whenever you're ready
          </p>
          <a href="https://app.instify.in/signup" style={{
            background: C.gold, color: C.dark, textDecoration: 'none',
            borderRadius: 10, padding: '15px 36px', fontWeight: 800, fontSize: 18,
            display: 'inline-block', transition: 'all 0.25s',
          }}
            onMouseEnter={e => e.currentTarget.style.background = C.goldLight}
            onMouseLeave={e => e.currentTarget.style.background = C.gold}>
            Get Started Free →
          </a>
        </FadeIn>
      </section>
    </>
  )
}

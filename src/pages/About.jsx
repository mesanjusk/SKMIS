import { useEffect, useRef } from 'react'
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

export default function About() {
  const sectionInner = { maxWidth: 1000, margin: '0 auto' }
  const h2 = { fontSize: 'clamp(28px,4vw,40px)', fontWeight: 800, color: C.text, marginBottom: 16 }
  const body = { fontSize: 17, color: C.textGray, lineHeight: 1.85 }

  return (
    <>
      {/* Hero */}
      <section style={{ background: C.heroGradient, padding: '96px 24px 80px', textAlign: 'center' }}>
        <FadeIn>
          <h1 style={{ color: C.white, fontSize: 'clamp(32px,5vw,52px)', fontWeight: 800 }}>
            Our Story
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: 18, marginTop: 12 }}>
            20 years — 1000+ clients — one mission
          </p>
        </FadeIn>
      </section>

      {/* Story */}
      <section style={{ background: C.white, padding: '80px 24px' }}>
        <div style={sectionInner}>
          <FadeIn>
            <div style={{ display: 'flex', gap: 48, alignItems: 'center', flexWrap: 'wrap' }}>
              <div style={{
                flex: '0 0 auto', width: 160, height: 160, borderRadius: '50%',
                background: `linear-gradient(135deg, ${C.green}, ${C.greenMid})`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: 72, boxShadow: '0 8px 32px rgba(5,150,105,0.3)',
              }}>
                🏪
              </div>
              <div style={{ flex: '1 1 300px' }}>
                <h2 style={h2}>A Journey That Started in Gondia</h2>
                <p style={body}>
                  20 years ago, Sanju Ahuja started a small printing shop in Gondia.
                  Today, over 1000 schools, institutes and clinics are our clients.
                </p>
                <p style={{ ...body, marginTop: 16 }}>
                  We saw the same pattern — every institution struggles with Marketing,
                  Management and Printing. INSTIFY is the solution built from those
                  20 years of real-world experience. Built for the people who want to
                  push education and service forward.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Stats */}
      <section style={{ background: C.bg, padding: '64px 24px' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap', justifyContent: 'center' }}>
            {[
              { val: '20+', label: 'Years Experience', icon: '📅' },
              { val: '1000+', label: 'Happy Clients', icon: '🤝' },
              { val: '500+', label: 'Schools', icon: '🏫' },
              { val: '3', label: 'States', icon: '🗺️' },
            ].map((s, i) => (
              <FadeIn key={i} delay={i * 80}>
                <div style={{
                  flex: '1 1 160px', background: C.white, borderRadius: 16,
                  padding: '32px 24px', textAlign: 'center', boxShadow: C.cardShadow,
                }}>
                  <div style={{ fontSize: 36, marginBottom: 8 }}>{s.icon}</div>
                  <div style={{ fontSize: 36, fontWeight: 800, color: C.green }}>{s.val}</div>
                  <div style={{ fontSize: 14, color: C.textGray, marginTop: 4 }}>{s.label}</div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section style={{ background: C.white, padding: '80px 24px' }}>
        <div style={sectionInner}>
          <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap' }}>
            <FadeIn delay={0}>
              <div style={{
                flex: '1 1 280px',
                background: `linear-gradient(135deg, ${C.green}18, ${C.green}08)`,
                border: `2px solid ${C.green}`, borderRadius: 20, padding: 36,
              }}>
                <div style={{ fontSize: 40, marginBottom: 16 }}>🎯</div>
                <h3 style={{ fontSize: 22, fontWeight: 800, color: C.green, marginBottom: 12 }}>Mission</h3>
                <p style={{ fontSize: 16, color: C.textGray, lineHeight: 1.7 }}>
                  To give every institution access to affordable technology so they can
                  focus on what they do best — without worrying about managing software.
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={120}>
              <div style={{
                flex: '1 1 280px',
                background: `linear-gradient(135deg, ${C.gold}18, ${C.gold}08)`,
                border: `2px solid ${C.gold}`, borderRadius: 20, padding: 36,
              }}>
                <div style={{ fontSize: 40, marginBottom: 16 }}>🌟</div>
                <h3 style={{ fontSize: 22, fontWeight: 800, color: C.gold, marginBottom: 12 }}>Vision</h3>
                <p style={{ fontSize: 16, color: C.textGray, lineHeight: 1.7 }}>
                  To become India's #1 Institution Management Platform —
                  in every city, powering every institution.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Values */}
      <section style={{ background: C.bg, padding: '80px 24px' }}>
        <div style={sectionInner}>
          <FadeIn>
            <h2 style={{ ...h2, textAlign: 'center' }}>Our Values</h2>
          </FadeIn>
          <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap', marginTop: 40 }}>
            {[
              { icon: '🤝', title: 'Trust', body: '20 years of trust — our clients are our biggest advocates' },
              { icon: '💡', title: 'Innovation', body: 'Solving real problems with technology — every feature comes from a genuine need' },
              { icon: '🌱', title: 'Growth', body: 'Your growth is our success — we only grow when you grow' },
            ].map((v, i) => (
              <FadeIn key={i} delay={i * 100}>
                <div style={{
                  flex: '1 1 220px', background: C.white, borderRadius: 16, padding: 28,
                  textAlign: 'center', boxShadow: C.cardShadow, transition: 'all 0.25s',
                }}
                  onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 8px 32px rgba(0,0,0,0.12)' }}
                  onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = C.cardShadow }}>
                  <div style={{ fontSize: 44, marginBottom: 14 }}>{v.icon}</div>
                  <h3 style={{ fontSize: 19, fontWeight: 800, color: C.text, marginBottom: 10 }}>{v.title}</h3>
                  <p style={{ fontSize: 14, color: C.textGray, lineHeight: 1.65 }}>{v.body}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: C.heroGradient, padding: '80px 24px', textAlign: 'center' }}>
        <FadeIn>
          <h2 style={{ color: C.white, fontSize: 'clamp(26px,4vw,38px)', fontWeight: 800, marginBottom: 16 }}>
            Be Part of Our Journey
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: 17, marginBottom: 36 }}>
            1000+ institutions are already with us
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

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
            हमारी कहानी
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: 18, marginTop: 12 }}>
            20 साल — 1000+ clients — एक mission
          </p>
        </FadeIn>
      </section>

      {/* Story */}
      <section style={{ background: C.white, padding: '80px 24px' }}>
        <div style={sectionInner}>
          <FadeIn>
            <div style={{
              display: 'flex',
              gap: 48,
              alignItems: 'center',
              flexWrap: 'wrap',
            }}>
              <div style={{
                flex: '0 0 auto',
                width: 160,
                height: 160,
                borderRadius: '50%',
                background: `linear-gradient(135deg, ${C.green}, ${C.greenMid})`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: 72,
                boxShadow: '0 8px 32px rgba(26,122,74,0.3)',
              }}>
                🏪
              </div>
              <div style={{ flex: '1 1 300px' }}>
                <h2 style={h2}>Gondia से शुरू हुई यात्रा</h2>
                <p style={body}>
                  20 साल पहले Sanju Ahuja ने Gondia में एक छोटी Printing shop शुरू की।
                  आज 1000+ schools, institutes और clinics हमारे clients हैं।
                </p>
                <p style={{ ...body, marginTop: 16 }}>
                  हमने देखा — हर institution को Marketing, Management और Printing की
                  एक जैसी problems हैं। INSTIFY उन्हीं problems का solution है।
                  20 साल के real experience से बना। उन लोगों के लिए बना जो education
                  और service को आगे बढ़ाना चाहते हैं।
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
                  flex: '1 1 160px',
                  background: C.white,
                  borderRadius: 16,
                  padding: '32px 24px',
                  textAlign: 'center',
                  boxShadow: C.cardShadow,
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
                border: `2px solid ${C.green}`,
                borderRadius: 20,
                padding: 36,
              }}>
                <div style={{ fontSize: 40, marginBottom: 16 }}>🎯</div>
                <h3 style={{ fontSize: 22, fontWeight: 800, color: C.green, marginBottom: 12 }}>Mission</h3>
                <p style={{ fontSize: 16, color: C.textGray, lineHeight: 1.7 }}>
                  हर Institution को affordable technology देना ताकि वो अपने काम पर
                  focus कर सकें — बिना technology की tension के।
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={120}>
              <div style={{
                flex: '1 1 280px',
                background: `linear-gradient(135deg, ${C.gold}18, ${C.gold}08)`,
                border: `2px solid ${C.gold}`,
                borderRadius: 20,
                padding: 36,
              }}>
                <div style={{ fontSize: 40, marginBottom: 16 }}>🌟</div>
                <h3 style={{ fontSize: 22, fontWeight: 800, color: C.gold, marginBottom: 12 }}>Vision</h3>
                <p style={{ fontSize: 16, color: C.textGray, lineHeight: 1.7 }}>
                  India का #1 Institution Management Platform बनना —
                  हर शहर में, हर institution में INSTIFY।
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
            <h2 style={{ ...h2, textAlign: 'center' }}>हमारी Values</h2>
          </FadeIn>
          <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap', marginTop: 40 }}>
            {[
              { icon: '🤝', title: 'Trust', body: '20 साल का भरोसा — हमारे clients हमारे सबसे बड़े advocate हैं' },
              { icon: '💡', title: 'Innovation', body: 'Technology से real problems solve करना — हर feature एक real need से आता है' },
              { icon: '🌱', title: 'Growth', body: 'आपकी growth = हमारी success — हम तभी grow करते हैं जब आप करते हैं' },
            ].map((v, i) => (
              <FadeIn key={i} delay={i * 100}>
                <div style={{
                  flex: '1 1 220px',
                  background: C.white,
                  borderRadius: 16,
                  padding: 28,
                  textAlign: 'center',
                  boxShadow: C.cardShadow,
                  transition: 'all 0.25s',
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
            हमारी journey का हिस्सा बनें
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: 17, marginBottom: 36 }}>
            1000+ institutions पहले से हमारे साथ हैं
          </p>
          <a href="https://app.instify.in/signup" style={{
            background: C.gold, color: C.dark,
            textDecoration: 'none', borderRadius: 10,
            padding: '15px 36px', fontWeight: 800, fontSize: 18,
            display: 'inline-block', transition: 'all 0.25s',
          }}
            onMouseEnter={e => e.currentTarget.style.background = C.goldLight}
            onMouseLeave={e => e.currentTarget.style.background = C.gold}>
            Free में शुरू करें →
          </a>
        </FadeIn>
      </section>
    </>
  )
}

import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { C } from '../styles/globals'

const DashboardMockup = () => (
  <div style={{
    background: C.white,
    borderRadius: 16,
    overflow: 'hidden',
    boxShadow: '0 24px 64px rgba(0,0,0,0.35)',
    maxWidth: 460,
    width: '100%',
  }}>
    <div style={{ background: C.green, padding: '14px 20px', display: 'flex', alignItems: 'center', gap: 10 }}>
      <div style={{ display: 'flex', gap: 6 }}>
        {['#ff5f57','#febc2e','#28c840'].map(c => (
          <span key={c} style={{ width: 10, height: 10, borderRadius: '50%', background: c, display: 'block' }} />
        ))}
      </div>
      <span style={{ color: C.white, fontWeight: 700, fontSize: 14, marginLeft: 8 }}>INSTIFY Dashboard</span>
    </div>
    <div style={{ padding: '16px 20px', background: C.bg }}>
      <div style={{ display: 'flex', gap: 10, marginBottom: 16 }}>
        {[
          { label: 'Enquiries', val: '248', color: C.green },
          { label: 'Admissions', val: '89', color: C.gold },
          { label: 'Revenue', val: '₹2.4L', color: C.greenMid },
        ].map(s => (
          <div key={s.label} style={{
            flex: 1, background: C.white, borderRadius: 10, padding: '12px 10px',
            borderTop: `3px solid ${s.color}`, boxShadow: C.cardShadow, textAlign: 'center',
          }}>
            <div style={{ fontSize: 18, fontWeight: 800, color: s.color }}>{s.val}</div>
            <div style={{ fontSize: 11, color: C.textGray, marginTop: 2 }}>{s.label}</div>
          </div>
        ))}
      </div>
      <div style={{ background: C.white, borderRadius: 10, overflow: 'hidden', boxShadow: C.cardShadow }}>
        <div style={{ background: C.green, padding: '8px 14px' }}>
          <span style={{ color: C.white, fontSize: 12, fontWeight: 600 }}>Recent Students</span>
        </div>
        {[
          { name: 'Rahul Sharma', class: 'Class 10', status: 'Admitted' },
          { name: 'Priya Patel', class: 'Class 8', status: 'Enquiry' },
          { name: 'Amit Verma', class: 'Class 12', status: 'Admitted' },
          { name: 'Sneha Gupta', class: 'Class 6', status: 'Follow-up' },
        ].map((r, i) => (
          <div key={i} style={{
            display: 'flex', justifyContent: 'space-between', alignItems: 'center',
            padding: '8px 14px', borderBottom: i < 3 ? `1px solid ${C.border}` : 'none',
          }}>
            <div>
              <div style={{ fontSize: 12, fontWeight: 600, color: C.text }}>{r.name}</div>
              <div style={{ fontSize: 10, color: C.textLight }}>{r.class}</div>
            </div>
            <span style={{
              fontSize: 10, fontWeight: 600, padding: '3px 8px', borderRadius: 20,
              background: r.status === 'Admitted' ? '#e8f5e9' : r.status === 'Enquiry' ? '#fff8e1' : '#e3f2fd',
              color: r.status === 'Admitted' ? C.success : r.status === 'Enquiry' ? '#f57c00' : '#1565c0',
            }}>{r.status}</span>
          </div>
        ))}
      </div>
    </div>
  </div>
)

function useFadeIn() {
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
  return ref
}

function FadeIn({ children, delay = 0 }) {
  const ref = useFadeIn()
  return (
    <div ref={ref} style={{
      opacity: 0,
      transform: 'translateY(20px)',
      transition: `opacity 0.55s ease ${delay}ms, transform 0.55s ease ${delay}ms`,
    }}>
      {children}
    </div>
  )
}

export default function Home() {
  const btnGold = {
    background: C.gold,
    color: C.dark,
    border: 'none',
    borderRadius: 10,
    padding: '15px 28px',
    fontWeight: 800,
    fontSize: 17,
    cursor: 'pointer',
    textDecoration: 'none',
    display: 'inline-block',
    transition: 'all 0.25s',
  }

  const btnOutline = {
    background: 'transparent',
    color: C.white,
    border: `2px solid ${C.white}`,
    borderRadius: 10,
    padding: '13px 28px',
    fontWeight: 700,
    fontSize: 17,
    cursor: 'pointer',
    textDecoration: 'none',
    display: 'inline-block',
    transition: 'all 0.25s',
  }

  const section = (bg) => ({
    background: bg,
    padding: '80px 24px',
  })

  const sectionInner = {
    maxWidth: 1200,
    margin: '0 auto',
  }

  const h2style = {
    fontSize: 'clamp(28px,4vw,40px)',
    fontWeight: 800,
    color: C.text,
    textAlign: 'center',
    marginBottom: 8,
  }

  const subStyle = {
    fontSize: 17,
    color: C.textGray,
    textAlign: 'center',
    marginBottom: 48,
  }

  const cardHover = (e, enter) => {
    e.currentTarget.style.transform = enter ? 'translateY(-4px)' : 'translateY(0)'
    e.currentTarget.style.boxShadow = enter ? '0 8px 32px rgba(0,0,0,0.14)' : C.cardShadow
  }

  return (
    <>
      {/* ── HERO ── */}
      <section style={{
        background: C.heroGradient,
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
      }}>
        <div style={{
          flex: 1,
          maxWidth: 1200,
          margin: '0 auto',
          padding: '80px 24px 40px',
          display: 'flex',
          alignItems: 'center',
          gap: 48,
          flexWrap: 'wrap',
        }}>
          <div style={{ flex: '1 1 380px' }}>
            <span style={{
              background: C.gold,
              color: C.dark,
              fontSize: 13,
              fontWeight: 700,
              padding: '6px 14px',
              borderRadius: 20,
              display: 'inline-block',
              marginBottom: 24,
            }}>
              🚀 School Opening Special
            </span>
            <h1 style={{
              color: C.white,
              fontSize: 'clamp(36px,5vw,56px)',
              fontWeight: 800,
              lineHeight: 1.2,
              marginBottom: 20,
            }}>
              आपके Institution का<br />
              <span style={{ color: C.greenLight }}>Complete Digital Partner</span>
            </h1>
            <p style={{
              color: 'rgba(255,255,255,0.82)',
              fontSize: 'clamp(15px,2vw,18px)',
              lineHeight: 1.7,
              marginBottom: 36,
            }}>
              Enquiry से Admission तक | WhatsApp Automation |<br />
              Printing &amp; Marketing — <strong style={{ color: C.greenLight }}>एक Platform पर</strong>
            </p>
            <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
              <a href="https://app.instify.in/signup" style={btnGold}
                onMouseEnter={e => e.currentTarget.style.background = C.goldLight}
                onMouseLeave={e => e.currentTarget.style.background = C.gold}>
                Free में शुरू करें →
              </a>
              <a href="https://app.instify.in/demo" style={btnOutline}
                onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.1)' }}
                onMouseLeave={e => { e.currentTarget.style.background = 'transparent' }}>
                Demo देखें
              </a>
            </div>
          </div>
          <div style={{ flex: '1 1 340px', display: 'flex', justifyContent: 'center' }}>
            <DashboardMockup />
          </div>
        </div>

        {/* Stats bar */}
        <div style={{
          background: 'rgba(255,255,255,0.10)',
          backdropFilter: 'blur(8px)',
          borderTop: '1px solid rgba(255,255,255,0.15)',
        }}>
          <div style={{
            maxWidth: 1200,
            margin: '0 auto',
            padding: '24px 24px',
            display: 'flex',
            justifyContent: 'space-around',
            flexWrap: 'wrap',
            gap: 16,
          }}>
            {[
              { val: '1000+', label: 'Clients' },
              { val: '20+', label: 'Years Experience' },
              { val: '500+', label: 'Schools' },
              { val: '₹0', label: 'से शुरू' },
            ].map(s => (
              <div key={s.label} style={{ textAlign: 'center', color: C.white }}>
                <div style={{ fontSize: 'clamp(22px,3vw,32px)', fontWeight: 800, color: C.greenLight }}>{s.val}</div>
                <div style={{ fontSize: 14, opacity: 0.8 }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROBLEM ── */}
      <section style={section(C.white)}>
        <div style={sectionInner}>
          <FadeIn>
            <h2 style={h2style}>क्या यह Problems आपकी भी हैं?</h2>
            <p style={subStyle}>हर Institution यही face करती है</p>
          </FadeIn>
          <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap' }}>
            {[
              { icon: '📋', title: 'Enquiry Track नहीं होती', body: 'कितने students आए, कितने गए, कितने convert हुए — कुछ पता नहीं' },
              { icon: '📱', title: 'WhatsApp पर Manual काम', body: 'हर admission पर अलग message, हर fee reminder manually — बहुत time waste' },
              { icon: '🖨️', title: 'Printing के लिए भटकना', body: 'ID cards यहाँ, certificates वहाँ, banners कहीं और — सब अलग-अलग जगह' },
            ].map((c, i) => (
              <FadeIn key={i} delay={i * 100}>
                <div style={{
                  flex: '1 1 260px',
                  background: C.white,
                  borderRadius: 16,
                  padding: 28,
                  borderLeft: `4px solid ${C.error}`,
                  boxShadow: C.cardShadow,
                  transition: 'all 0.25s',
                }}
                  onMouseEnter={e => cardHover(e, true)}
                  onMouseLeave={e => cardHover(e, false)}>
                  <div style={{ fontSize: 36, marginBottom: 14 }}>{c.icon}</div>
                  <h3 style={{ fontSize: 18, fontWeight: 700, color: C.text, marginBottom: 10 }}>{c.title}</h3>
                  <p style={{ fontSize: 15, color: C.textGray, lineHeight: 1.6 }}>{c.body}</p>
                </div>
              </FadeIn>
            ))}
          </div>
          <FadeIn delay={300}>
            <div style={{
              marginTop: 40,
              background: `linear-gradient(135deg, ${C.green}, ${C.greenMid})`,
              borderRadius: 16,
              padding: '24px 32px',
              textAlign: 'center',
              color: C.white,
              fontSize: 'clamp(16px,2.5vw,20px)',
              fontWeight: 700,
            }}>
              INSTIFY इन तीनों problems का एक solution है 👇
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── FEATURES ── */}
      <section style={section(C.bg)}>
        <div style={sectionInner}>
          <FadeIn>
            <h2 style={h2style}>एक Platform — सब कुछ</h2>
            <p style={subStyle}>जो आपको चाहिए वो सब INSTIFY में है</p>
          </FadeIn>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: 24 }}>
            {[
              { icon: '📋', title: 'Enquiry Management', body: 'Walk-in से WhatsApp तक सब enquiries एक जगह track करें', accent: C.green },
              { icon: '🎓', title: 'Admission Tracking', body: 'Enquiry को Admission में convert करने का complete system', accent: C.green },
              { icon: '📱', title: 'WhatsApp Automation', body: 'Automatic messages — Enquiry confirm से Fee reminder तक सब automatic', accent: C.gold },
              { icon: '📄', title: 'Document Builder', body: 'Certificates, ID Cards, Admit Cards, Result Sheets — 1 click में ready', accent: C.gold },
              { icon: '🖨️', title: 'Print Ordering', body: 'Banners, Brochures, Visiting Cards सीधे Platform से order करें', accent: C.green },
              { icon: '📊', title: 'Analytics Dashboard', body: 'Students, Revenue, Enquiries — सब data एक जगह देखें', accent: C.green },
            ].map((f, i) => (
              <FadeIn key={i} delay={i * 80}>
                <div style={{
                  background: C.white,
                  borderRadius: 16,
                  padding: 28,
                  borderTop: `4px solid ${f.accent}`,
                  boxShadow: C.cardShadow,
                  transition: 'all 0.25s',
                  height: '100%',
                }}
                  onMouseEnter={e => cardHover(e, true)}
                  onMouseLeave={e => cardHover(e, false)}>
                  <div style={{ fontSize: 36, marginBottom: 14 }}>{f.icon}</div>
                  <h3 style={{ fontSize: 18, fontWeight: 700, color: C.text, marginBottom: 10 }}>{f.title}</h3>
                  <p style={{ fontSize: 15, color: C.textGray, lineHeight: 1.6 }}>{f.body}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section style={section(C.white)}>
        <div style={sectionInner}>
          <FadeIn>
            <h2 style={h2style}>3 Steps में शुरू करें</h2>
          </FadeIn>
          <div style={{ display: 'flex', gap: 32, flexWrap: 'wrap', marginTop: 48 }}>
            {[
              { n: '1', title: 'Sign Up करें — Free में', body: 'बस email और institution name — 2 मिनट में account ready' },
              { n: '2', title: 'Setup करें — 5 मिनट में', body: 'अपनी institution की details डालें, WhatsApp number connect करें' },
              { n: '3', title: 'Manage करें — आज से', body: 'Enquiries आएंगी, admissions होंगी, सब track होगा automatically' },
            ].map((s, i) => (
              <FadeIn key={i} delay={i * 120}>
                <div style={{
                  flex: '1 1 260px',
                  display: 'flex',
                  gap: 20,
                  alignItems: 'flex-start',
                }}>
                  <div style={{
                    width: 52,
                    height: 52,
                    borderRadius: '50%',
                    background: C.green,
                    color: C.white,
                    fontSize: 22,
                    fontWeight: 800,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}>{s.n}</div>
                  <div>
                    <h3 style={{ fontSize: 18, fontWeight: 700, color: C.text, marginBottom: 8 }}>{s.title}</h3>
                    <p style={{ fontSize: 15, color: C.textGray, lineHeight: 1.6 }}>{s.body}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── FOR WHOM ── */}
      <section style={section(C.bg)}>
        <div style={sectionInner}>
          <FadeIn>
            <h2 style={h2style}>INSTIFY किसके लिए है?</h2>
          </FadeIn>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))', gap: 24, marginTop: 40 }}>
            {[
              { icon: '🏫', title: 'Schools & Colleges', body: 'Admissions, ID Cards, Certificates' },
              { icon: '📚', title: 'Coaching Institutes', body: 'Batch management, Fee tracking' },
              { icon: '💆', title: 'Skin Clinics & Salons', body: 'Appointments, Client records' },
              { icon: '🏢', title: 'Any Institution', body: 'Custom setup for your needs' },
            ].map((c, i) => (
              <FadeIn key={i} delay={i * 80}>
                <div style={{
                  background: C.white,
                  borderRadius: 16,
                  padding: '32px 24px',
                  textAlign: 'center',
                  boxShadow: C.cardShadow,
                  transition: 'all 0.25s',
                  cursor: 'default',
                }}
                  onMouseEnter={e => cardHover(e, true)}
                  onMouseLeave={e => cardHover(e, false)}>
                  <div style={{ fontSize: 44, marginBottom: 16 }}>{c.icon}</div>
                  <h3 style={{ fontSize: 17, fontWeight: 700, color: C.text, marginBottom: 8 }}>{c.title}</h3>
                  <p style={{ fontSize: 14, color: C.textGray }}>{c.body}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section style={section(C.white)}>
        <div style={sectionInner}>
          <FadeIn>
            <h2 style={h2style}>1000+ Institutions का भरोसा</h2>
          </FadeIn>
          <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap', marginTop: 40 }}>
            {[
              { quote: 'INSTIFY से हमारी enquiry tracking बहुत आसान हो गई। पहले सब manually था, अब सब automatic है।', name: 'Ramesh Sharma', role: 'Principal, Gondia Public School' },
              { quote: 'WhatsApp automation से हमारा time बचा और admissions भी बढ़े। Best investment for our institute.', name: 'Priya Deshmukh', role: 'Director, Excel Coaching, Nagpur' },
              { quote: 'Printing orders अब directly platform से होती है। Rate भी कम मिलता है और quality भी अच्छी है।', name: 'Dr. Anjali Mehta', role: 'Skin Care Clinic, Raipur' },
            ].map((t, i) => (
              <FadeIn key={i} delay={i * 100}>
                <div style={{
                  flex: '1 1 280px',
                  background: C.bg,
                  borderRadius: 16,
                  padding: 28,
                  boxShadow: C.cardShadow,
                  position: 'relative',
                  transition: 'all 0.25s',
                }}
                  onMouseEnter={e => cardHover(e, true)}
                  onMouseLeave={e => cardHover(e, false)}>
                  <div style={{ fontSize: 48, color: C.green, lineHeight: 1, marginBottom: 12, fontFamily: 'serif' }}>"</div>
                  <p style={{ fontSize: 15, color: C.textGray, lineHeight: 1.7, marginBottom: 20 }}>{t.quote}</p>
                  <div style={{ fontWeight: 700, color: C.text, fontSize: 15 }}>{t.name}</div>
                  <div style={{ fontSize: 13, color: C.textLight }}>{t.role}</div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRICING TEASER ── */}
      <section style={{ background: C.heroGradient, padding: '80px 24px' }}>
        <div style={{ ...sectionInner, textAlign: 'center' }}>
          <FadeIn>
            <h2 style={{ ...h2style, color: C.white }}>शुरू करें — बिल्कुल Free में</h2>
            <div style={{ display: 'flex', justifyContent: 'center', gap: 24, flexWrap: 'wrap', margin: '32px 0' }}>
              {['Free', '₹299/month', '₹599/month'].map((p, i) => (
                <div key={i} style={{
                  background: 'rgba(255,255,255,0.12)',
                  border: '1px solid rgba(255,255,255,0.25)',
                  borderRadius: 12,
                  padding: '16px 32px',
                  color: C.white,
                  fontSize: 20,
                  fontWeight: 700,
                }}>{p}</div>
              ))}
            </div>
            <Link to="/pricing" style={{
              background: C.gold,
              color: C.dark,
              textDecoration: 'none',
              borderRadius: 10,
              padding: '14px 32px',
              fontWeight: 800,
              fontSize: 17,
              display: 'inline-block',
              transition: 'all 0.25s',
            }}
              onMouseEnter={e => e.currentTarget.style.background = C.goldLight}
              onMouseLeave={e => e.currentTarget.style.background = C.gold}>
              Full Pricing देखें →
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* ── SCHOOL OPENING BANNER ── */}
      <section style={{ background: C.gold, padding: '32px 24px' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 20 }}>
          <p style={{ fontSize: 'clamp(16px,2.5vw,22px)', fontWeight: 700, color: C.dark }}>
            ⏰ 15 June से Schools खुल रहे हैं — क्या आप ready हैं?
          </p>
          <a href="https://app.instify.in/signup" style={{
            background: C.dark,
            color: C.white,
            textDecoration: 'none',
            borderRadius: 10,
            padding: '13px 28px',
            fontWeight: 700,
            fontSize: 16,
            whiteSpace: 'nowrap',
            transition: 'all 0.2s',
          }}
            onMouseEnter={e => e.currentTarget.style.background = '#1a2a1f'}
            onMouseLeave={e => e.currentTarget.style.background = C.dark}>
            अभी Setup करें
          </a>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section style={{ background: C.bg, padding: '80px 24px', textAlign: 'center' }}>
        <FadeIn>
          <h2 style={h2style}>आज ही INSTIFY शुरू करें</h2>
          <p style={{ ...subStyle, marginBottom: 36 }}>Free account — कोई credit card नहीं</p>
          <a href="https://app.instify.in/signup" style={{
            background: C.green,
            color: C.white,
            textDecoration: 'none',
            borderRadius: 10,
            padding: '16px 40px',
            fontWeight: 800,
            fontSize: 20,
            display: 'inline-block',
            transition: 'all 0.25s',
          }}
            onMouseEnter={e => { e.currentTarget.style.background = C.greenMid; e.currentTarget.style.transform = 'translateY(-2px)' }}
            onMouseLeave={e => { e.currentTarget.style.background = C.green; e.currentTarget.style.transform = 'translateY(0)' }}>
            Free में शुरू करें →
          </a>
        </FadeIn>
      </section>
    </>
  )
}

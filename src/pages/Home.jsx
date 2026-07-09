import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { C } from '../styles/globals'
import SEO from '../components/SEO'

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
          { name: 'Rahul Sharma', cls: 'Class 10', status: 'Admitted' },
          { name: 'Priya Patel', cls: 'Class 8', status: 'Enquiry' },
          { name: 'Amit Verma', cls: 'Class 12', status: 'Admitted' },
          { name: 'Sneha Gupta', cls: 'Class 6', status: 'Follow-up' },
        ].map((r, i) => (
          <div key={i} style={{
            display: 'flex', justifyContent: 'space-between', alignItems: 'center',
            padding: '8px 14px', borderBottom: i < 3 ? `1px solid ${C.border}` : 'none',
          }}>
            <div>
              <div style={{ fontSize: 12, fontWeight: 600, color: C.text }}>{r.name}</div>
              <div style={{ fontSize: 10, color: C.textLight }}>{r.cls}</div>
            </div>
            <span style={{
              fontSize: 10, fontWeight: 600, padding: '3px 8px', borderRadius: 20,
              background: r.status === 'Admitted' ? '#ECFDF5' : r.status === 'Enquiry' ? '#FFFBEB' : '#e3f2fd',
              color: r.status === 'Admitted' ? C.success : r.status === 'Enquiry' ? '#f57c00' : '#1565c0',
            }}>{r.status}</span>
          </div>
        ))}
      </div>
    </div>
  </div>
)

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

  const section = (bg) => ({ background: bg, padding: '80px 24px' })
  const sectionInner = { maxWidth: 1200, margin: '0 auto' }

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
      <SEO
        title="Business Management Software"
        description="INSTIFY is a modern business management software platform developed by Mahi Creation to simplify operations, automate workflows, manage customers, and improve productivity."
        path="/"
      />
      {/* ── HERO ── */}
      <section style={{ background: C.heroGradient, minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        <div style={{
          flex: 1, maxWidth: 1200, margin: '0 auto',
          padding: '80px 24px 40px',
          display: 'flex', alignItems: 'center', gap: 48, flexWrap: 'wrap',
        }}>
          <div style={{ flex: '1 1 380px' }}>
            <span style={{
              background: C.gold, color: C.dark, fontSize: 13, fontWeight: 700,
              padding: '6px 14px', borderRadius: 20, display: 'inline-block', marginBottom: 24,
            }}>
              🚀 School Opening Special
            </span>
            <h1 style={{
              color: C.white, fontSize: 'clamp(36px,5vw,56px)',
              fontWeight: 800, lineHeight: 1.2, marginBottom: 20,
            }}>
              Your Institution's<br />
              <span style={{ color: C.greenLight }}>Complete Digital Partner</span>
            </h1>
            <p style={{
              color: 'rgba(255,255,255,0.82)',
              fontSize: 'clamp(15px,2vw,18px)',
              lineHeight: 1.7, marginBottom: 36,
            }}>
              Enquiry to Admission | WhatsApp Automation |<br />
              Printing &amp; Marketing — <strong style={{ color: C.greenLight }}>all on one platform</strong>
            </p>
            <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
              <a href="https://app.instify.in/signup" style={btnGold}
                onMouseEnter={e => e.currentTarget.style.background = C.goldLight}
                onMouseLeave={e => e.currentTarget.style.background = C.gold}>
                Get Started Free →
              </a>
              <a href="https://app.instify.in/demo" style={btnOutline}
                onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.1)' }}
                onMouseLeave={e => { e.currentTarget.style.background = 'transparent' }}>
                Watch Demo
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
            maxWidth: 1200, margin: '0 auto', padding: '24px 24px',
            display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', gap: 16,
          }}>
            {[
              { val: '1000+', label: 'Clients' },
              { val: '20+', label: 'Years Experience' },
              { val: '500+', label: 'Schools' },
              { val: '₹0', label: 'to get started' },
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
            <h2 style={h2style}>Do These Problems Sound Familiar?</h2>
            <p style={subStyle}>Every institution faces the same challenges</p>
          </FadeIn>
          <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap' }}>
            {[
              { icon: '📋', title: 'No Enquiry Tracking', body: 'How many students came, how many left, how many converted — no visibility at all' },
              { icon: '📱', title: 'Manual WhatsApp Work', body: 'A separate message for every admission, every fee reminder sent manually — massive time waste' },
              { icon: '🖨️', title: 'Running Around for Printing', body: 'ID cards here, certificates there, banners somewhere else — everything in different places' },
            ].map((c, i) => (
              <FadeIn key={i} delay={i * 100}>
                <div style={{
                  flex: '1 1 260px', background: C.white, borderRadius: 16, padding: 28,
                  borderLeft: `4px solid ${C.error}`, boxShadow: C.cardShadow, transition: 'all 0.25s',
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
              marginTop: 40, background: `linear-gradient(135deg, ${C.green}, ${C.greenMid})`,
              borderRadius: 16, padding: '24px 32px', textAlign: 'center',
              color: C.white, fontSize: 'clamp(16px,2.5vw,20px)', fontWeight: 700,
            }}>
              INSTIFY solves all three problems — on one platform 👇
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── FEATURES ── */}
      <section style={section(C.bg)}>
        <div style={sectionInner}>
          <FadeIn>
            <h2 style={h2style}>One Platform — Everything You Need</h2>
            <p style={subStyle}>Everything you need is built into INSTIFY</p>
          </FadeIn>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: 24 }}>
            {[
              { icon: '📋', title: 'Enquiry Management', body: 'Track all enquiries from walk-ins to WhatsApp in one place', accent: C.green },
              { icon: '🎓', title: 'Admission Tracking', body: 'Complete system to convert enquiries into admissions', accent: C.green },
              { icon: '📱', title: 'WhatsApp Automation', body: 'Automatic messages — from enquiry confirmation to fee reminders, all on autopilot', accent: C.gold },
              { icon: '📄', title: 'Document Builder', body: 'Certificates, ID Cards, Admit Cards, Result Sheets — ready in 1 click', accent: C.gold },
              { icon: '🖨️', title: 'Print Ordering', body: 'Order Banners, Brochures, Visiting Cards directly from the platform', accent: C.green },
              { icon: '📊', title: 'Analytics Dashboard', body: 'Students, Revenue, Enquiries — all your data in one view', accent: C.green },
            ].map((f, i) => (
              <FadeIn key={i} delay={i * 80}>
                <div style={{
                  background: C.white, borderRadius: 16, padding: 28,
                  borderTop: `4px solid ${f.accent}`, boxShadow: C.cardShadow,
                  transition: 'all 0.25s', height: '100%',
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

      {/* ── TRUST SIGNALS ── */}
      <section style={section(C.bg)}>
        <div style={sectionInner}>
          <FadeIn>
            <h2 style={h2style}>Why Businesses Trust INSTIFY</h2>
            <p style={subStyle}>Built on secure, reliable technology — trusted by 1000+ institutions</p>
          </FadeIn>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))', gap: 24 }}>
            {[
              { icon: '🔒', title: 'Secure Cloud Platform', body: 'Your data is stored on encrypted, access-controlled cloud infrastructure' },
              { icon: '⚡', title: 'Fast Support', body: 'Responsive support via WhatsApp, call and email — real people, real answers' },
              { icon: '📱', title: 'WhatsApp Integration', body: 'Official WhatsApp Business integration for reliable, compliant messaging' },
              { icon: '📊', title: 'Modern Dashboard', body: 'A clean, intuitive dashboard that puts every metric within reach' },
              { icon: '📶', title: 'Mobile Friendly', body: 'Fully responsive — manage your institution from any device, anywhere' },
              { icon: '🛡️', title: 'Data Security', body: 'Role-based access and encrypted storage keep your records protected' },
              { icon: '☁️', title: 'Reliable Infrastructure', body: 'Built on cloud infrastructure engineered for uptime and performance' },
            ].map((t, i) => (
              <FadeIn key={i} delay={i * 70}>
                <div style={{
                  background: C.white, borderRadius: 16, padding: 28,
                  border: `1px solid ${C.border}`, boxShadow: C.cardShadow,
                  transition: 'all 0.25s', height: '100%',
                }}
                  onMouseEnter={e => cardHover(e, true)}
                  onMouseLeave={e => cardHover(e, false)}>
                  <div style={{ fontSize: 32, marginBottom: 12 }}>{t.icon}</div>
                  <h3 style={{ fontSize: 16, fontWeight: 700, color: C.text, marginBottom: 8 }}>{t.title}</h3>
                  <p style={{ fontSize: 14, color: C.textGray, lineHeight: 1.6 }}>{t.body}</p>
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
            <h2 style={h2style}>Get Started in 3 Steps</h2>
          </FadeIn>
          <div style={{ display: 'flex', gap: 32, flexWrap: 'wrap', marginTop: 48 }}>
            {[
              { n: '1', title: 'Sign Up — It\'s Free', body: 'Just your email and institution name — account ready in 2 minutes' },
              { n: '2', title: 'Set Up — 5 Minutes', body: 'Add your institution details and connect your WhatsApp number' },
              { n: '3', title: 'Manage — Starting Today', body: 'Enquiries come in, admissions happen, everything tracked automatically' },
            ].map((s, i) => (
              <FadeIn key={i} delay={i * 120}>
                <div style={{ flex: '1 1 260px', display: 'flex', gap: 20, alignItems: 'flex-start' }}>
                  <div style={{
                    width: 52, height: 52, borderRadius: '50%', background: C.green,
                    color: C.white, fontSize: 22, fontWeight: 800,
                    display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
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
            <h2 style={h2style}>Who is INSTIFY For?</h2>
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
                  background: C.white, borderRadius: 16, padding: '32px 24px',
                  textAlign: 'center', boxShadow: C.cardShadow, transition: 'all 0.25s', cursor: 'default',
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
            <h2 style={h2style}>Trusted by 1000+ Institutions</h2>
          </FadeIn>
          <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap', marginTop: 40 }}>
            {[
              { quote: 'INSTIFY made our enquiry tracking so much easier. Everything used to be manual — now it\'s all automatic.', name: 'Ramesh Sharma', role: 'Principal, Gondia Public School' },
              { quote: 'WhatsApp automation saved us so much time and our admissions also increased. Best investment for our institute.', name: 'Priya Deshmukh', role: 'Director, Excel Coaching, Nagpur' },
              { quote: 'Print orders now happen directly from the platform. We get better rates and better quality too.', name: 'Dr. Anjali Mehta', role: 'Skin Care Clinic, Raipur' },
            ].map((t, i) => (
              <FadeIn key={i} delay={i * 100}>
                <div style={{
                  flex: '1 1 280px', background: C.bg, borderRadius: 16, padding: 28,
                  boxShadow: C.cardShadow, position: 'relative', transition: 'all 0.25s',
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
            <h2 style={{ ...h2style, color: C.white }}>Start Completely Free</h2>
            <div style={{ display: 'flex', justifyContent: 'center', gap: 24, flexWrap: 'wrap', margin: '32px 0' }}>
              {['Free', '₹299/month', '₹599/month'].map((p, i) => (
                <div key={i} style={{
                  background: 'rgba(255,255,255,0.12)',
                  border: '1px solid rgba(255,255,255,0.25)',
                  borderRadius: 12, padding: '16px 32px',
                  color: C.white, fontSize: 20, fontWeight: 700,
                }}>{p}</div>
              ))}
            </div>
            <Link to="/pricing" style={{
              background: C.gold, color: C.dark, textDecoration: 'none',
              borderRadius: 10, padding: '14px 32px', fontWeight: 800, fontSize: 17,
              display: 'inline-block', transition: 'all 0.25s',
            }}
              onMouseEnter={e => e.currentTarget.style.background = C.goldLight}
              onMouseLeave={e => e.currentTarget.style.background = C.gold}>
              View Full Pricing →
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* ── SCHOOL OPENING BANNER ── */}
      <section style={{ background: C.gold, padding: '32px 24px' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 20 }}>
          <p style={{ fontSize: 'clamp(16px,2.5vw,22px)', fontWeight: 700, color: C.dark }}>
            ⏰ Schools reopen June 15 — are you ready?
          </p>
          <a href="https://app.instify.in/signup" style={{
            background: C.dark, color: C.white, textDecoration: 'none',
            borderRadius: 10, padding: '13px 28px', fontWeight: 700, fontSize: 16,
            whiteSpace: 'nowrap', transition: 'all 0.2s',
          }}
            onMouseEnter={e => e.currentTarget.style.background = '#022C22'}
            onMouseLeave={e => e.currentTarget.style.background = C.dark}>
            Set Up Now
          </a>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section style={{ background: C.bg, padding: '80px 24px', textAlign: 'center' }}>
        <FadeIn>
          <h2 style={h2style}>Start Using INSTIFY Today</h2>
          <p style={{ ...subStyle, marginBottom: 36 }}>Free account — no credit card required</p>
          <a href="https://app.instify.in/signup" style={{
            background: C.green, color: C.white, textDecoration: 'none',
            borderRadius: 10, padding: '16px 40px', fontWeight: 800, fontSize: 20,
            display: 'inline-block', transition: 'all 0.25s',
          }}
            onMouseEnter={e => { e.currentTarget.style.background = C.greenMid; e.currentTarget.style.transform = 'translateY(-2px)' }}
            onMouseLeave={e => { e.currentTarget.style.background = C.green; e.currentTarget.style.transform = 'translateY(0)' }}>
            Get Started Free →
          </a>
        </FadeIn>
      </section>
    </>
  )
}

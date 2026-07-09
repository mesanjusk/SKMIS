import { useState, useEffect, useRef } from 'react'
import { C } from '../styles/globals'
import { business } from '../data/business'
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

const inputStyle = {
  width: '100%',
  border: `1.5px solid ${C.border}`,
  borderRadius: 10,
  padding: '13px 16px',
  fontSize: 15,
  color: C.text,
  outline: 'none',
  background: C.white,
  fontFamily: 'inherit',
  transition: 'border-color 0.2s',
}

export default function Contact() {
  const [form, setForm] = useState({ name: '', phone: '', institution: '', type: '', city: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [focused, setFocused] = useState('')

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })
  const handleSubmit = (e) => { e.preventDefault(); setSubmitted(true) }

  const labelStyle = { fontSize: 14, fontWeight: 600, color: C.text, marginBottom: 6, display: 'block' }
  const getInputStyle = (name) => ({ ...inputStyle, borderColor: focused === name ? C.green : C.border })

  const info = [
    { icon: '🏢', label: 'Business Name', value: business.legalName },
    { icon: '📦', label: 'Product', value: business.product },
    { icon: '📍', label: 'Address', value: business.address },
    { icon: '📞', label: 'Phone', value: business.phone },
    { icon: '📧', label: 'Email', value: business.email },
    { icon: '🌐', label: 'Website', value: 'instify.in' },
  ]

  return (
    <>
      <SEO
        title="Contact Us"
        description="Get in touch with Sanju SK Digital - Mahi Creation, the team behind INSTIFY. Call, WhatsApp or email us for support and enquiries."
        path="/contact"
        breadcrumb={[{ name: 'Contact', path: '/contact' }]}
      />
      {/* Hero */}
      <section style={{ background: C.heroGradient, padding: '96px 24px 64px', textAlign: 'center' }}>
        <FadeIn>
          <h1 style={{ color: C.white, fontSize: 'clamp(30px,5vw,50px)', fontWeight: 800, marginBottom: 12 }}>
            Get in Touch
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: 18 }}>
            We're here — ready to help you
          </p>
        </FadeIn>
      </section>

      {/* Main */}
      <section style={{ background: C.bg, padding: '72px 24px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', display: 'flex', gap: 48, flexWrap: 'wrap' }}>
          {/* Left — Info */}
          <FadeIn delay={0}>
            <div style={{ flex: '1 1 300px' }}>
              <h2 style={{ fontSize: 26, fontWeight: 800, color: C.text, marginBottom: 28 }}>
                Contact Information
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                {info.map((item, i) => (
                  <div key={i} style={{ display: 'flex', gap: 14, alignItems: 'flex-start' }}>
                    <span style={{
                      width: 44, height: 44, borderRadius: 12,
                      background: `${C.green}18`,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontSize: 20, flexShrink: 0,
                    }}>{item.icon}</span>
                    <div>
                      <div style={{ fontSize: 12, fontWeight: 600, color: C.textGray, textTransform: 'uppercase', letterSpacing: 0.5 }}>{item.label}</div>
                      <div style={{ fontSize: 15, fontWeight: 600, color: C.text, marginTop: 2 }}>{item.value}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div style={{ marginTop: 32, padding: '20px 0', borderTop: `1px solid ${C.border}` }}>
                <p style={{ fontSize: 14, fontWeight: 600, color: C.textGray, marginBottom: 6 }}>Office Hours</p>
                <p style={{ fontSize: 15, color: C.text, fontWeight: 600 }}>Monday – Saturday</p>
                <p style={{ fontSize: 15, color: C.textGray }}>10:00 AM – 7:00 PM</p>
              </div>

              <div style={{ marginTop: 28, display: 'flex', gap: 14, flexWrap: 'wrap' }}>
                <a href={business.whatsappHref} target="_blank" rel="noopener noreferrer" style={{
                  display: 'inline-flex', alignItems: 'center', gap: 10,
                  background: '#25d366', color: C.white, textDecoration: 'none',
                  borderRadius: 12, padding: '13px 24px', fontWeight: 700, fontSize: 15,
                  transition: 'all 0.2s',
                }}
                  onMouseEnter={e => { e.currentTarget.style.background = '#1da851'; e.currentTarget.style.transform = 'translateY(-2px)' }}
                  onMouseLeave={e => { e.currentTarget.style.background = '#25d366'; e.currentTarget.style.transform = 'translateY(0)' }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  Chat on WhatsApp
                </a>
                <a href={business.emailHref} style={{
                  display: 'inline-flex', alignItems: 'center', gap: 10,
                  background: C.green, color: C.white, textDecoration: 'none',
                  borderRadius: 12, padding: '13px 24px', fontWeight: 700, fontSize: 15,
                  transition: 'all 0.2s',
                }}
                  onMouseEnter={e => { e.currentTarget.style.background = C.greenMid; e.currentTarget.style.transform = 'translateY(-2px)' }}
                  onMouseLeave={e => { e.currentTarget.style.background = C.green; e.currentTarget.style.transform = 'translateY(0)' }}>
                  ✉️ Email Us
                </a>
              </div>
            </div>
          </FadeIn>

          {/* Right — Form */}
          <FadeIn delay={150}>
            <div style={{ flex: '1 1 380px' }}>
              <div style={{ background: C.white, borderRadius: 20, padding: '40px 36px', boxShadow: C.cardShadow }}>
                {submitted ? (
                  <div style={{ textAlign: 'center', padding: '40px 0' }}>
                    <div style={{ fontSize: 64, marginBottom: 20 }}>🙏</div>
                    <h3 style={{ fontSize: 26, fontWeight: 800, color: C.green, marginBottom: 12 }}>
                      Thank You!
                    </h3>
                    <p style={{ fontSize: 17, color: C.textGray, lineHeight: 1.6 }}>
                      We'll get back to you within 24 hours.
                    </p>
                    <button onClick={() => { setSubmitted(false); setForm({ name: '', phone: '', institution: '', type: '', city: '', message: '' }) }}
                      style={{
                        marginTop: 28, background: C.bg, border: `1.5px solid ${C.border}`,
                        borderRadius: 10, padding: '10px 24px', fontSize: 14, fontWeight: 600,
                        color: C.textGray, cursor: 'pointer',
                      }}>
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <h2 style={{ fontSize: 22, fontWeight: 800, color: C.text, marginBottom: 28 }}>
                      Send a Message
                    </h2>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                      <div>
                        <label style={labelStyle}>Name *</label>
                        <input name="name" required value={form.name} onChange={handleChange}
                          onFocus={() => setFocused('name')} onBlur={() => setFocused('')}
                          style={getInputStyle('name')} placeholder="Your full name" />
                      </div>
                      <div>
                        <label style={labelStyle}>Phone Number *</label>
                        <input name="phone" required type="tel" value={form.phone} onChange={handleChange}
                          onFocus={() => setFocused('phone')} onBlur={() => setFocused('')}
                          style={getInputStyle('phone')} placeholder="e.g. +91 98765 43210" />
                      </div>
                      <div>
                        <label style={labelStyle}>Institution Name *</label>
                        <input name="institution" required value={form.institution} onChange={handleChange}
                          onFocus={() => setFocused('institution')} onBlur={() => setFocused('')}
                          style={getInputStyle('institution')} placeholder="Your institution's name" />
                      </div>
                      <div>
                        <label style={labelStyle}>Institution Type *</label>
                        <select name="type" required value={form.type} onChange={handleChange}
                          onFocus={() => setFocused('type')} onBlur={() => setFocused('')}
                          style={{ ...getInputStyle('type'), cursor: 'pointer' }}>
                          <option value="">Select...</option>
                          <option value="school">School / College</option>
                          <option value="coaching">Coaching Institute</option>
                          <option value="clinic">Skin Clinic / Salon</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                      <div>
                        <label style={labelStyle}>City</label>
                        <input name="city" value={form.city} onChange={handleChange}
                          onFocus={() => setFocused('city')} onBlur={() => setFocused('')}
                          style={getInputStyle('city')} placeholder="Your city" />
                      </div>
                      <div>
                        <label style={labelStyle}>Message</label>
                        <textarea name="message" rows={4} value={form.message} onChange={handleChange}
                          onFocus={() => setFocused('message')} onBlur={() => setFocused('')}
                          style={{ ...getInputStyle('message'), resize: 'vertical', minHeight: 100 }}
                          placeholder="Any questions or requirements..." />
                      </div>
                      <button type="submit" style={{
                        background: C.green, color: C.white, border: 'none',
                        borderRadius: 10, padding: '15px', fontWeight: 800,
                        fontSize: 17, cursor: 'pointer', transition: 'all 0.2s', fontFamily: 'inherit',
                      }}
                        onMouseEnter={e => { e.currentTarget.style.background = C.greenMid; e.currentTarget.style.transform = 'translateY(-1px)' }}
                        onMouseLeave={e => { e.currentTarget.style.background = C.green; e.currentTarget.style.transform = 'translateY(0)' }}>
                        Send Message 🙏
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  )
}

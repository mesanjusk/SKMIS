import { createContext, useContext } from 'react'
import { C } from '../styles/globals'
import { business } from '../data/business'
import SEO from './SEO'

const LegalContext = createContext({ h2: {}, p: {}, ul: {} })
export const useLegalStyles = () => useContext(LegalContext)

export default function LegalLayout({ title, description, path, lastUpdated, children }) {
  const h2 = { fontSize: 20, fontWeight: 800, color: C.text, marginTop: 32, marginBottom: 12 }
  const p = { fontSize: 15.5, color: C.textGray, lineHeight: 1.8, marginBottom: 14 }
  const ul = { fontSize: 15.5, color: C.textGray, lineHeight: 1.8, marginBottom: 14, paddingLeft: 22 }

  return (
    <>
      <SEO title={title} description={description} path={path} breadcrumb={[{ name: title, path }]} />
      <section style={{ background: C.heroGradient, padding: '72px 24px 48px', textAlign: 'center' }}>
        <h1 style={{ color: C.white, fontSize: 'clamp(28px,4vw,44px)', fontWeight: 800 }}>{title}</h1>
        <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: 15, marginTop: 10 }}>Last updated: {lastUpdated}</p>
      </section>

      <section style={{ background: C.white, padding: '64px 24px' }}>
        <div style={{ maxWidth: 820, margin: '0 auto' }}>
          <div style={{
            background: C.bg, border: `1px solid ${C.border}`, borderRadius: 16,
            padding: '20px 24px', marginBottom: 32, fontSize: 14.5, color: C.text, lineHeight: 1.7,
          }}>
            <strong>{business.operatedByLine}</strong>
          </div>

          <LegalContext.Provider value={{ h2, p, ul }}>
            {children}
          </LegalContext.Provider>

          <div style={{
            marginTop: 48, paddingTop: 28, borderTop: `1px solid ${C.border}`,
            display: 'flex', gap: 24, flexWrap: 'wrap',
          }}>
            <div>
              <div style={{ fontSize: 12, fontWeight: 700, color: C.textGray, textTransform: 'uppercase', letterSpacing: 0.5 }}>Business Name</div>
              <div style={{ fontSize: 15, fontWeight: 700, color: C.text, marginTop: 4 }}>{business.legalName}</div>
            </div>
            <div>
              <div style={{ fontSize: 12, fontWeight: 700, color: C.textGray, textTransform: 'uppercase', letterSpacing: 0.5 }}>Email</div>
              <a href={business.emailHref} style={{ fontSize: 15, fontWeight: 700, color: C.green, marginTop: 4, display: 'block', textDecoration: 'none' }}>{business.email}</a>
            </div>
            <div>
              <div style={{ fontSize: 12, fontWeight: 700, color: C.textGray, textTransform: 'uppercase', letterSpacing: 0.5 }}>Phone</div>
              <a href={business.phoneHref} style={{ fontSize: 15, fontWeight: 700, color: C.green, marginTop: 4, display: 'block', textDecoration: 'none' }}>{business.phone}</a>
            </div>
            <div>
              <div style={{ fontSize: 12, fontWeight: 700, color: C.textGray, textTransform: 'uppercase', letterSpacing: 0.5 }}>Location</div>
              <div style={{ fontSize: 15, fontWeight: 700, color: C.text, marginTop: 4 }}>{business.address}</div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

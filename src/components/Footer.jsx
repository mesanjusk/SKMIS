import { Link } from 'react-router-dom'
import { C } from '../styles/globals'

const LogoWhite = () => (
  <svg width="130" height="34" viewBox="0 0 140 36" fill="none">
    <polygon points="18,2 30,9 30,23 18,30 6,23 6,9" fill={C.greenLight} />
    <text x="18" y="21" textAnchor="middle" fill={C.dark} fontSize="11" fontWeight="800" fontFamily="Inter,sans-serif">IN</text>
    <text x="44" y="25" fill={C.white} fontSize="20" fontWeight="800" fontFamily="Inter,sans-serif">INST</text>
    <text x="96" y="25" fill={C.gold} fontSize="20" fontWeight="800" fontFamily="Inter,sans-serif">IFY</text>
  </svg>
)

const InstagramIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <circle cx="12" cy="12" r="4"/>
    <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor"/>
  </svg>
)

const WhatsAppIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
)

export default function Footer() {
  const col = { flex: 1, minWidth: 160 }
  const heading = { color: C.white, fontWeight: 700, fontSize: 15, marginBottom: 14 }
  const link = {
    color: 'rgba(255,255,255,0.7)',
    textDecoration: 'none',
    fontSize: 14,
    display: 'block',
    marginBottom: 8,
    transition: 'color 0.2s',
  }

  return (
    <footer style={{ background: C.dark }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '56px 24px 32px' }}>
        <div style={{ display: 'flex', gap: 40, flexWrap: 'wrap', marginBottom: 48 }}>
          {/* Brand */}
          <div style={{ ...col, minWidth: 200 }}>
            <LogoWhite />
            <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: 13, marginTop: 12, lineHeight: 1.6 }}>
              Institutions Simplified
            </p>
            <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: 13, marginTop: 4 }}>
              SANJU SK Digital, Gondia
            </p>
          </div>

          {/* Product */}
          <div style={col}>
            <h4 style={heading}>Product</h4>
            <Link to="/features" style={link}>Features</Link>
            <Link to="/pricing" style={link}>Pricing</Link>
            <Link to="/about" style={link}>About</Link>
            <a href="https://app.instify.in" style={link}>App Login</a>
          </div>

          {/* Support */}
          <div style={col}>
            <h4 style={heading}>Support</h4>
            <Link to="/contact" style={link}>Contact Us</Link>
            <a href="mailto:info@instify.in" style={link}>info@instify.in</a>
            <a href="https://wa.me/91XXXXXXXXXX" style={link}>WhatsApp Us</a>
          </div>

          {/* Connect */}
          <div style={col}>
            <h4 style={heading}>Connect</h4>
            <div style={{ display: 'flex', gap: 16, marginBottom: 16 }}>
              <a href="https://instagram.com/instify.in" style={{ color: 'rgba(255,255,255,0.7)', transition: 'color 0.2s' }}
                onMouseEnter={e => e.currentTarget.style.color = C.goldLight}
                onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.7)'}>
                <InstagramIcon />
              </a>
              <a href="https://wa.me/91XXXXXXXXXX" style={{ color: 'rgba(255,255,255,0.7)', transition: 'color 0.2s' }}
                onMouseEnter={e => e.currentTarget.style.color = '#25d366'}
                onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.7)'}>
                <WhatsAppIcon />
              </a>
            </div>
            <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: 13 }}>instify.in</p>
          </div>
        </div>

        <div style={{
          borderTop: '1px solid rgba(255,255,255,0.1)',
          paddingTop: 20,
          textAlign: 'center',
          color: 'rgba(255,255,255,0.4)',
          fontSize: 13,
        }}>
          © 2026 INSTIFY — SANJU SK Digital, Gondia, Maharashtra
        </div>
      </div>
    </footer>
  )
}

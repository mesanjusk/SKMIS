import { Link } from 'react-router-dom'
import { C } from '../styles/globals'
import { business } from '../data/business'

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

const LinkedInIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124zM7.119 20.452H3.554V9h3.565v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
)

const FacebookIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.494v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.464.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.312h3.587l-.467 3.622h-3.12v9.294h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"/>
  </svg>
)

const YouTubeIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
  </svg>
)

const GitHubIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.333-1.755-1.333-1.755-1.089-.745.083-.729.083-.729 1.205.084 1.84 1.237 1.84 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.605-2.665-.303-5.467-1.332-5.467-5.93 0-1.31.468-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23A11.5 11.5 0 0 1 12 5.803c1.02.005 2.045.138 3.003.404 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
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
        <div style={{ display: 'flex', gap: 40, flexWrap: 'wrap', marginBottom: 40 }}>
          {/* Brand */}
          <div style={{ ...col, minWidth: 220 }}>
            <LogoWhite />
            <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: 13, marginTop: 12, lineHeight: 1.6, fontWeight: 600 }}>
              {business.tagline}
            </p>
            <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: 13, marginTop: 6, lineHeight: 1.6 }}>
              {business.shortOperatedByLine}
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

          {/* Legal */}
          <div style={col}>
            <h4 style={heading}>Legal</h4>
            <Link to="/privacy-policy" style={link}>Privacy Policy</Link>
            <Link to="/terms-and-conditions" style={link}>Terms &amp; Conditions</Link>
            <Link to="/refund-policy" style={link}>Refund Policy</Link>
            <Link to="/cancellation-policy" style={link}>Cancellation Policy</Link>
            <Link to="/cookie-policy" style={link}>Cookie Policy</Link>
            <Link to="/shipping-policy" style={link}>Shipping Policy</Link>
          </div>

          {/* Support */}
          <div style={col}>
            <h4 style={heading}>Support</h4>
            <Link to="/contact" style={link}>Contact Us</Link>
            <a href={business.emailHref} style={link}>{business.email}</a>
            <a href={business.whatsappHref} style={link}>WhatsApp Us</a>
            <a href={business.phoneHref} style={link}>{business.phone}</a>
          </div>

          {/* Connect */}
          <div style={col}>
            <h4 style={heading}>Connect</h4>
            <div style={{ display: 'flex', gap: 14, marginBottom: 16, flexWrap: 'wrap' }}>
              <a href={business.whatsappHref} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp"
                style={{ color: 'rgba(255,255,255,0.7)', transition: 'color 0.2s' }}
                onMouseEnter={e => e.currentTarget.style.color = '#25d366'}
                onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.7)'}>
                <WhatsAppIcon />
              </a>
              {[
                { key: 'instagram', label: 'Instagram', icon: <InstagramIcon />, hover: C.goldLight },
                { key: 'linkedin', label: 'LinkedIn', icon: <LinkedInIcon />, hover: '#0A66C2' },
                { key: 'facebook', label: 'Facebook', icon: <FacebookIcon />, hover: '#1877F2' },
                { key: 'youtube', label: 'YouTube', icon: <YouTubeIcon />, hover: '#FF0000' },
                { key: 'github', label: 'GitHub', icon: <GitHubIcon />, hover: C.white },
              ].map(({ key, label, icon, hover }) => {
                const url = business.social[key]
                if (!url) {
                  return (
                    <span key={key} aria-label={`${label} (coming soon)`} title={`${label} — coming soon`}
                      style={{ color: 'rgba(255,255,255,0.25)', cursor: 'not-allowed' }}>
                      {icon}
                    </span>
                  )
                }
                return (
                  <a key={key} href={url} target="_blank" rel="noopener noreferrer" aria-label={label}
                    style={{ color: 'rgba(255,255,255,0.7)', transition: 'color 0.2s' }}
                    onMouseEnter={e => e.currentTarget.style.color = hover}
                    onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.7)'}>
                    {icon}
                  </a>
                )
              })}
            </div>
            <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: 13 }}>instify.in</p>
          </div>
        </div>

        {/* Business info strip */}
        <div style={{
          borderTop: '1px solid rgba(255,255,255,0.1)',
          paddingTop: 24, paddingBottom: 24,
          display: 'flex', gap: 32, flexWrap: 'wrap',
        }}>
          <div>
            <div style={{ color: 'rgba(255,255,255,0.9)', fontWeight: 700, fontSize: 14, marginBottom: 6 }}>{business.legalName}</div>
            <div style={{ color: 'rgba(255,255,255,0.55)', fontSize: 13 }}>Legal entity operating the INSTIFY platform</div>
          </div>
          <div>
            <div style={{ color: 'rgba(255,255,255,0.9)', fontWeight: 700, fontSize: 14, marginBottom: 6 }}>Phone</div>
            <a href={business.phoneHref} style={{ color: 'rgba(255,255,255,0.55)', fontSize: 13, textDecoration: 'none' }}>{business.phone}</a>
          </div>
          <div>
            <div style={{ color: 'rgba(255,255,255,0.9)', fontWeight: 700, fontSize: 14, marginBottom: 6 }}>Email</div>
            <a href={business.emailHref} style={{ color: 'rgba(255,255,255,0.55)', fontSize: 13, textDecoration: 'none' }}>{business.email}</a>
          </div>
          <div>
            <div style={{ color: 'rgba(255,255,255,0.9)', fontWeight: 700, fontSize: 14, marginBottom: 6 }}>Location</div>
            <div style={{ color: 'rgba(255,255,255,0.55)', fontSize: 13 }}>{business.address}</div>
          </div>
        </div>

        <div style={{
          borderTop: '1px solid rgba(255,255,255,0.1)',
          paddingTop: 20,
          textAlign: 'center',
          color: 'rgba(255,255,255,0.4)',
          fontSize: 13,
        }}>
          © 2026 INSTIFY — A product of {business.legalName}, Gondia, Maharashtra. All Rights Reserved.
        </div>
      </div>
    </footer>
  )
}

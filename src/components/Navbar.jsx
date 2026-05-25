import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { C } from '../styles/globals'

const Logo = ({ dark = false }) => (
  <svg width="140" height="36" viewBox="0 0 140 36" fill="none">
    <polygon points="18,2 30,9 30,23 18,30 6,23 6,9" fill={C.green} />
    <text x="18" y="21" textAnchor="middle" fill="white" fontSize="11" fontWeight="800" fontFamily="Inter,sans-serif">IN</text>
    <text x="44" y="25" fill={dark ? C.dark : C.dark} fontSize="20" fontWeight="800" fontFamily="Inter,sans-serif">INST</text>
    <text x="96" y="25" fill={C.gold} fontSize="20" fontWeight="800" fontFamily="Inter,sans-serif">IFY</text>
  </svg>
)

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/features', label: 'Features' },
  { to: '/pricing', label: 'Pricing' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => { setOpen(false) }, [location])

  const isActive = (to) => location.pathname === to

  const nav = {
    position: 'sticky',
    top: 0,
    zIndex: 100,
    background: C.white,
    borderBottom: `2px solid ${C.green}`,
    boxShadow: scrolled ? '0 2px 16px rgba(0,0,0,0.10)' : 'none',
    transition: 'box-shadow 0.25s ease',
  }

  const inner = {
    maxWidth: 1200,
    margin: '0 auto',
    padding: '0 24px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 64,
  }

  const linkStyle = (active) => ({
    color: active ? C.green : C.text,
    textDecoration: active ? 'underline' : 'none',
    textDecorationColor: C.green,
    fontWeight: active ? 600 : 500,
    fontSize: 15,
    padding: '4px 2px',
    transition: 'color 0.2s',
    cursor: 'pointer',
  })

  const ctaBtn = {
    background: C.green,
    color: C.white,
    border: 'none',
    borderRadius: 10,
    padding: '10px 20px',
    fontWeight: 700,
    fontSize: 14,
    cursor: 'pointer',
    textDecoration: 'none',
    transition: 'background 0.2s, transform 0.15s',
    display: 'inline-block',
  }

  const hamburger = {
    display: 'flex',
    flexDirection: 'column',
    gap: 5,
    cursor: 'pointer',
    background: 'none',
    border: 'none',
    padding: 4,
  }

  const bar = { width: 24, height: 2.5, background: C.dark, borderRadius: 2, display: 'block', transition: 'all 0.2s' }

  return (
    <nav style={nav}>
      <div style={inner}>
        <Link to="/" style={{ textDecoration: 'none' }}>
          <Logo />
        </Link>

        {/* Desktop links */}
        <div style={{ display: 'flex', gap: 32, alignItems: 'center' }}
          className="desktop-nav">
          <style>{`
            @media(max-width:768px){.desktop-nav{display:none!important;}.mobile-only{display:flex!important;}}
            @media(min-width:769px){.mobile-only{display:none!important;}}
            .nav-link:hover{color:#1a7a4a!important;}
          `}</style>
          {navLinks.map(l => (
            <Link key={l.to} to={l.to} className="nav-link" style={linkStyle(isActive(l.to))}>
              {l.label}
            </Link>
          ))}
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <a href="https://app.instify.in/signup"
            style={ctaBtn}
            onMouseEnter={e => e.currentTarget.style.background = C.greenMid}
            onMouseLeave={e => e.currentTarget.style.background = C.green}
          >
            Free शुरू करें
          </a>
          <button className="mobile-only" style={{ ...hamburger, display: 'none' }}
            onClick={() => setOpen(o => !o)} aria-label="Menu">
            <span style={bar} />
            <span style={bar} />
            <span style={bar} />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div style={{
          background: C.white,
          borderTop: `1px solid ${C.border}`,
          padding: '12px 24px 20px',
          display: 'flex',
          flexDirection: 'column',
          gap: 4,
        }}>
          {navLinks.map(l => (
            <Link key={l.to} to={l.to} style={{
              ...linkStyle(isActive(l.to)),
              padding: '12px 0',
              borderBottom: `1px solid ${C.border}`,
              fontSize: 16,
            }}>
              {l.label}
            </Link>
          ))}
          <a href="https://app.instify.in/signup" style={{
            ...ctaBtn,
            marginTop: 12,
            textAlign: 'center',
            padding: '14px 20px',
            fontSize: 16,
          }}>
            Free शुरू करें
          </a>
        </div>
      )}
    </nav>
  )
}

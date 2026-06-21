import { useState, useEffect } from 'react';
import { NAV_LINKS } from '../../utils/constants';
import './Navigation.scss';

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
      <div className="nav__inner">
        <a href="#" className="nav__logo" data-hover>
          <svg viewBox="0 0 40 40" fill="none" className="nav__logo-icon">
            <path d="M20 4 L36 34 L4 34 Z" stroke="currentColor" strokeWidth="1.2" fill="none"/>
            <circle cx="20" cy="16" r="4" stroke="currentColor" strokeWidth="0.8"/>
          </svg>
          <span className="nav__logo-text">THE ALTITUDE</span>
        </a>

        <div className={`nav__links ${menuOpen ? 'nav__links--open' : ''}`}>
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} className="nav__link" data-hover onClick={() => setMenuOpen(false)}>
              {link.label}
            </a>
          ))}
          <a href="#reservation" className="nav__cta" data-hover onClick={() => setMenuOpen(false)}>
            Reserve
          </a>
        </div>

        <button
          className={`nav__hamburger ${menuOpen ? 'nav__hamburger--open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </nav>
  );
}

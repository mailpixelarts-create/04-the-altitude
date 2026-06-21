import './Footer.scss';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          <div className="footer__brand">
            <div className="footer__logo">
              <svg viewBox="0 0 40 40" fill="none" className="footer__logo-icon">
                <path d="M20 4 L36 34 L4 34 Z" stroke="currentColor" strokeWidth="1.2" fill="none"/>
                <circle cx="20" cy="16" r="4" stroke="currentColor" strokeWidth="0.8"/>
              </svg>
              <span className="footer__logo-text">THE ALTITUDE</span>
            </div>
            <p className="footer__tagline">Above the Clouds</p>
          </div>

          <div className="footer__links">
            <div className="footer__col">
              <h4 className="footer__col-title">Experience</h4>
              <a href="#story" className="footer__link" data-hover>Our Story</a>
              <a href="#coffee" className="footer__link" data-hover>Signature Coffee</a>
              <a href="#menu" className="footer__link" data-hover>Menu</a>
              <a href="#ritual" className="footer__link" data-hover>The Ritual</a>
            </div>
            <div className="footer__col">
              <h4 className="footer__col-title">Visit</h4>
              <a href="#gallery" className="footer__link" data-hover>Gallery</a>
              <a href="#observatory" className="footer__link" data-hover>Observatory</a>
              <a href="#visit" className="footer__link" data-hover>Directions</a>
              <a href="#reservation" className="footer__link" data-hover>Reservations</a>
            </div>
            <div className="footer__col">
              <h4 className="footer__col-title">Connect</h4>
              <a href="#" className="footer__link" data-hover>Instagram</a>
              <a href="#" className="footer__link" data-hover>Newsletter</a>
              <a href="#" className="footer__link" data-hover>Press</a>
              <a href="#" className="footer__link" data-hover>Careers</a>
            </div>
          </div>
        </div>

        <div className="footer__bottom">
          <div className="footer__credit">
            <p>A LOOKBOOK Studio Experience</p>
            <p>&copy; Norman James, made with love ❤️ by Empathy Studio</p>
          </div>
          <div className="footer__legal">
            <a href="#" className="footer__legal-link" data-hover>Privacy</a>
            <a href="#" className="footer__legal-link" data-hover>Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

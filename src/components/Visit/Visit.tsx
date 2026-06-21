import { useRevealOnScroll } from '../../hooks/useScrollTrigger';
import './Visit.scss';

export default function Visit() {
  const sectionRef = useRevealOnScroll();

  return (
    <section className="visit section" id="visit" ref={sectionRef}>
      <div className="container">
        <div className="visit__grid">
          <div className="visit__info">
            <span className="visit__label reveal">Plan Your Visit</span>
            <h2 className="visit__title reveal section__title">
              Reach the<br />Altitude
            </h2>
            <p className="visit__desc reveal">
              THE ALTITUDE sits at 3,200 meters above sea level.
              Accessible by mountain trail or private cable car.
              Reservations highly recommended.
            </p>

            <div className="visit__details reveal">
              <div className="visit__detail">
                <span className="visit__detail-label">Location</span>
                <span className="visit__detail-value">Summit Ridge, 3200m<br />Alpine Observatory District</span>
              </div>
              <div className="visit__detail">
                <span className="visit__detail-label">Hours</span>
                <span className="visit__detail-value">Dawn Service: 5:30 AM<br />Day Service: 9:00 AM - 6:00 PM<br />Sunset Ritual: 4:00 PM</span>
              </div>
              <div className="visit__detail">
                <span className="visit__detail-label">Access</span>
                <span className="visit__detail-value">Cable Car: 15 min from base<br />Mountain Trail: 2.5 hrs<br />Private Helicopter: 8 min</span>
              </div>
              <div className="visit__detail">
                <span className="visit__detail-label">Contact</span>
                <span className="visit__detail-value">+41 27 000 0000<br />hello@thealtitude.ch</span>
              </div>
            </div>
          </div>

          <div className="visit__visual reveal-scale">
            <div className="visit__map">
              <svg viewBox="0 0 500 600" fill="none">
                <rect width="500" height="600" fill="#e8f4f8"/>
                <path d="M0,600 L50,450 L100,500 L150,380 L200,420 L250,300 L300,350 L350,250 L400,300 L450,200 L500,250 L500,600 Z" fill="#28435E" opacity="0.2"/>
                <path d="M0,600 L100,480 L200,520 L300,400 L400,450 L500,380 L500,600 Z" fill="#28435E" opacity="0.35"/>
                <circle cx="350" cy="180" r="12" fill="#7D5F49" stroke="#fff" strokeWidth="3"/>
                <path d="M350,180 L350,150 M350,180 L370,180 M350,180 L330,180 M350,180 L350,210" stroke="#7D5F49" strokeWidth="1"/>
                <text x="350" y="140" textAnchor="middle" fill="#7D5F49" fontSize="10" fontFamily="monospace">THE ALTITUDE</text>
                <line x1="100" y1="550" x2="350" y2="180" stroke="#7D5F49" strokeWidth="0.5" strokeDasharray="4 4" opacity="0.4"/>
                <circle cx="100" cy="550" r="8" fill="#AFCDEB" stroke="#fff" strokeWidth="2"/>
                <text x="100" y="575" textAnchor="middle" fill="#777" fontSize="9" fontFamily="monospace">Base Station</text>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

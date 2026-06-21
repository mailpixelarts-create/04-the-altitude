import { useState } from 'react';
import { useRevealOnScroll } from '../../hooks/useScrollTrigger';
import './Reservation.scss';

export default function Reservation() {
  const sectionRef = useRevealOnScroll();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    date: '',
    time: '',
    guests: '2',
    occasion: '',
    notes: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <section className="reservation section" id="reservation" ref={sectionRef}>
      <div className="reservation__bg" />
      <div className="container">
        <div className="reservation__grid">
          <div className="reservation__info">
            <span className="reservation__label reveal">Reservations</span>
            <h2 className="reservation__title reveal section__title">
              Reserve Your<br />Altitude
            </h2>
            <p className="reservation__desc reveal">
              Tables at THE ALTITUDE are limited to preserve intimacy.
              We recommend booking at least two weeks in advance.
              Dawn service requires special arrangement.
            </p>
            <div className="reservation__note reveal">
              <p>For groups larger than 8 or private events, please contact us directly.</p>
            </div>
          </div>

          <form className="reservation__form reveal" onSubmit={handleSubmit}>
            <div className="reservation__field">
              <label className="reservation__field-label" htmlFor="name">Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                className="reservation__input"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="reservation__field">
              <label className="reservation__field-label" htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                className="reservation__input"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="reservation__row">
              <div className="reservation__field">
                <label className="reservation__field-label" htmlFor="date">Date</label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  className="reservation__input"
                  value={formData.date}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="reservation__field">
                <label className="reservation__field-label" htmlFor="time">Service</label>
                <select
                  id="time"
                  name="time"
                  className="reservation__select"
                  value={formData.time}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select</option>
                  <option value="dawn">Dawn Service (5:30 AM)</option>
                  <option value="morning">Morning (9:00 AM)</option>
                  <option value="midday">Midday (12:00 PM)</option>
                  <option value="afternoon">Afternoon (3:00 PM)</option>
                  <option value="sunset">Sunset Ritual (4:00 PM)</option>
                </select>
              </div>
            </div>

            <div className="reservation__row">
              <div className="reservation__field">
                <label className="reservation__field-label" htmlFor="guests">Guests</label>
                <select
                  id="guests"
                  name="guests"
                  className="reservation__select"
                  value={formData.guests}
                  onChange={handleChange}
                >
                  {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
                    <option key={n} value={n}>{n} {n === 1 ? 'Guest' : 'Guests'}</option>
                  ))}
                </select>
              </div>
              <div className="reservation__field">
                <label className="reservation__field-label" htmlFor="occasion">Occasion</label>
                <select
                  id="occasion"
                  name="occasion"
                  className="reservation__select"
                  value={formData.occasion}
                  onChange={handleChange}
                >
                  <option value="">None</option>
                  <option value="birthday">Birthday</option>
                  <option value="anniversary">Anniversary</option>
                  <option value="proposal">Proposal</option>
                  <option value="business">Business</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>

            <div className="reservation__field">
              <label className="reservation__field-label" htmlFor="notes">Special Requests</label>
              <textarea
                id="notes"
                name="notes"
                className="reservation__textarea"
                rows={3}
                value={formData.notes}
                onChange={handleChange}
              />
            </div>

            <button type="submit" className="reservation__submit" data-hover>
              Request Reservation
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

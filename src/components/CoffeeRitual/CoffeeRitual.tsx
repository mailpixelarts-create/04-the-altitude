import { useRevealOnScroll } from '../../hooks/useScrollTrigger';
import './CoffeeRitual.scss';

const RITUAL_STEPS = [
  {
    number: '01',
    title: 'The Ascent',
    description: 'Guests arrive via our mountain trail or private cable car. The thin air sharpens every sense. Your journey to altitude begins.',
    icon: 'mountain',
  },
  {
    number: '02',
    title: 'The Warmth',
    description: 'Step into the glass pavilion. The fireplace crackles. Floor-to-ceiling windows frame the alpine panorama. You are home.',
    icon: 'fire',
  },
  {
    number: '03',
    title: 'The Selection',
    description: 'Your barista presents today\'s altitude blends — beans harvested at precise elevations where terroir creates magic.',
    icon: 'bean',
  },
  {
    number: '04',
    title: 'The Pour',
    description: 'Water heated to 93°C. A slow, meditative pour-over. Each cup crafted with the reverence the mountain demands.',
    icon: 'pour',
  },
  {
    number: '05',
    title: 'The Observation',
    description: 'Take your cup to the observatory. Watch clouds drift below. The sun traces its arc. Time dissolves.',
    icon: 'eye',
  },
];

export default function CoffeeRitual() {
  const sectionRef = useRevealOnScroll();

  return (
    <section className="coffee-ritual section" id="ritual" ref={sectionRef}>
      <div className="container">
        <div className="coffee-ritual__header">
          <span className="coffee-ritual__label reveal">The Experience</span>
          <h2 className="coffee-ritual__title reveal section__title">
            The Altitude<br />Ritual
          </h2>
          <p className="coffee-ritual__intro reveal">
            More than coffee. A ceremony of elevation.
            Each step designed to bring you closer to the mountain.
          </p>
        </div>

        <div className="coffee-ritual__steps">
          {RITUAL_STEPS.map((step, index) => (
            <div className="coffee-ritual__step reveal" key={step.number}>
              <div className="coffee-ritual__step-number">{step.number}</div>
              <div className="coffee-ritual__step-content">
                <h3 className="coffee-ritual__step-title">{step.title}</h3>
                <p className="coffee-ritual__step-desc">{step.description}</p>
              </div>
              <div className="coffee-ritual__step-line" />
            </div>
          ))}
        </div>

        <div className="coffee-ritual__cta reveal">
          <a href="#reservation" className="coffee-ritual__btn" data-hover>
            Begin Your Ritual
          </a>
        </div>
      </div>
    </section>
  );
}

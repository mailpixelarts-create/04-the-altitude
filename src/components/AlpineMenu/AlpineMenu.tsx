import { useState } from 'react';
import { MENU_SEASONS } from '../../utils/constants';
import { useRevealOnScroll } from '../../hooks/useScrollTrigger';
import './AlpineMenu.scss';

export default function AlpineMenu() {
  const [activeSeason, setActiveSeason] = useState(0);
  const sectionRef = useRevealOnScroll();

  return (
    <section className="alpine-menu section" id="menu" ref={sectionRef}>
      <div className="container">
        <div className="alpine-menu__header">
          <span className="alpine-menu__label reveal">The Menu</span>
          <h2 className="alpine-menu__title reveal section__title">
            Seasonal<br />Alpine Cuisine
          </h2>
        </div>

        <div className="alpine-menu__tabs reveal">
          {MENU_SEASONS.map((season, index) => (
            <button
              key={season.season}
              className={`alpine-menu__tab ${index === activeSeason ? 'alpine-menu__tab--active' : ''}`}
              onClick={() => setActiveSeason(index)}
              data-hover
            >
              {season.season}
            </button>
          ))}
        </div>

        <div className="alpine-menu__content">
          <div className="alpine-menu__season">
            <h3 className="alpine-menu__season-title">
              {MENU_SEASONS[activeSeason].season}
            </h3>
            <div className="alpine-menu__items">
              {MENU_SEASONS[activeSeason].items.map((item, index) => (
                <div className="alpine-menu__item" key={item.name}>
                  <div className="alpine-menu__item-header">
                    <h4 className="alpine-menu__item-name">{item.name}</h4>
                    <span className="alpine-menu__item-price">{item.price}</span>
                  </div>
                  <p className="alpine-menu__item-desc">{item.desc}</p>
                  <div className="alpine-menu__item-line" />
                </div>
              ))}
            </div>
          </div>

          <div className="alpine-menu__note reveal">
            <p>
              All ingredients sourced within 12km of our summit.
              Menu changes with the mountain's rhythm.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

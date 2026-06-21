import { useState, useEffect } from 'react';
import Loader from './components/Loader/Loader';
import Navigation from './components/Navigation/Navigation';
import Hero from './components/Hero/Hero';
import MountainStory from './components/MountainStory/MountainStory';
import SignatureCoffee from './components/SignatureCoffee/SignatureCoffee';
import AlpineMenu from './components/AlpineMenu/AlpineMenu';
import ScenicGallery from './components/ScenicGallery/ScenicGallery';
import Observatory from './components/Observatory/Observatory';
import CoffeeRitual from './components/CoffeeRitual/CoffeeRitual';
import Sustainability from './components/Sustainability/Sustainability';
import Visit from './components/Visit/Visit';
import Reservation from './components/Reservation/Reservation';
import Footer from './components/Footer/Footer';
import Cursor from './components/Cursor/Cursor';
import { useLenis } from './hooks/useLenis';

function App() {
  const [loading, setLoading] = useState(true);

  useLenis();

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 4500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading && <Loader onComplete={() => setLoading(false)} />}
      <div className={`app ${loading ? 'app--hidden' : 'app--visible'}`}>
        <Cursor />
        <Navigation />
        <main>
          <Hero />
          <MountainStory />
          <SignatureCoffee />
          <AlpineMenu />
          <ScenicGallery />
          <Observatory />
          <CoffeeRitual />
          <Sustainability />
          <Visit />
          <Reservation />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;

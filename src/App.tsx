import { useEffect } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Projects from './components/Projects';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import ClickSparks from './components/ClickSparks';
import { useSmoothScroll } from './hooks/useSmoothScroll';
import './styles/App.css';

function App() {
  useSmoothScroll();

  useEffect(() => {
    console.log('🚀 Portfolio loaded!');
  }, []);

  return (
    <>
      <CustomCursor />
      <ClickSparks />
      
      <div data-scroll-container>
        <Navigation />
        <Hero />
        <Services />
        <About />
        <Projects />
        <Testimonials />
        <FAQ />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;

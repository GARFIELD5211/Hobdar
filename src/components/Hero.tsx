import './Hero.css';
import LightRays from './Lightrays';

const Hero = () => {
  return (
    
    <section id="home" className="hero" data-scroll-section>

      <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0 }}>
        <LightRays 
          raysOrigin="top-center"
          raysColor="#ffffff"
          raysSpeed={1}
          lightSpread={0.5}
          rayLength={3}
        />
      </div>
      <div className="container">
        <div className="hero-content">
          <div className="hero-text" data-scroll data-scroll-speed="1">
            <div className="hero-greeting">👋 Hey there!</div>
            <h2 className="hero-name">Saad Malik</h2>
            <h1 className="hero-title">Full Stack<br/>Web Developer</h1>
            <p className="hero-subtitle">
              NERD | Student at BUIC'28 | Passionate about building innovative web solutions and turning ideas into reality.
            </p>
          </div>
          <div className="hero-images" data-scroll data-scroll-speed="2">
            <div className="hero-image hero-image-1">
              <div className="hero-image-text">🚀</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

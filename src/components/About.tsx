import './About.css';

const About = () => {
  return (
    <section id="about" className="about" data-scroll-section>
      <div className="container">
        <h2 className="section-title">About me</h2>
        <p className="section-subtitle">Get to know me better!</p>
        
        <div className="about-content">
          <div className="about-text">
            <p>Hey! I'm Hobdar Haider — a frontend web developer currently studying at BUIC'28. I love building beautiful, responsive, and performant user interfaces that deliver great user experiences.</p>
            
            <div className="stats-grid">
              <div className="stat-item">
                <div className="stat-number">3+</div>
                <div className="stat-label">Years Coding</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">50+</div>
                <div className="stat-label">Projects Built</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">24/7</div>
                <div className="stat-label">Ready to Code</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

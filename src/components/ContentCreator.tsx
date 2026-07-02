import './ContentCreator.css';

const ContentCreator = () => {
  return (
    <section id="content-creator" className="content-creator" data-scroll-section>
      <div className="container">
        <h2 className="section-title" data-scroll data-scroll-speed="1">
          Behind the Code
        </h2>
        <p className="section-subtitle" data-scroll data-scroll-speed="1">
          When I'm not building websites, I'm making people laugh.
        </p>

        <div className="creator-content" data-scroll data-scroll-speed="0.5">
          <div className="creator-card">
            <div className="creator-icon">🎬</div>
            <h3 className="creator-heading">Content Creator & Influencer</h3>
            <p className="creator-text">
              I create funny, random, and relatable humour content on Instagram.
              From skits to everyday absurdity — if it makes people smile, I'm
              all in. Come for the laughs, stay for the vibes.
            </p>
            <a
              href="https://www.instagram.com/teenotabahiii/"
              target="_blank"
              rel="noopener noreferrer"
              className="creator-btn"
            >
              <span className="creator-btn-icon">📸</span>
              Follow on Instagram
              <span className="creator-btn-arrow">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContentCreator;

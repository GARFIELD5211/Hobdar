import './Footer.css';

const Footer = () => {
  return (
    <footer data-scroll-section>
      <div className="container">
        <div className="footer-content">
          <div className="footer-info">
            <div><strong>Email:</strong> <a href="mailto:saad@example.com">saad@example.com</a></div>
            <div><strong>University:</strong> BUIC'28</div>
          </div>
          <div className="social-links">
            <a href="#" className="social-link">𝕏</a>
            <a href="#" className="social-link">in</a>
            <a href="#" className="social-link">gh</a>
          </div>
          <div>
            <p style={{ color: 'var(--text-secondary)' }}>© 2025 Saad Malik. Built with 💻 and ☕</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import './Footer.css';

const Footer = () => {
  return (
    <footer data-scroll-section>
      <div className="container">
        <div className="footer-content">
          <div className="footer-info">
            <div><strong>Email:</strong> <a href="mailto:Hobdar110@gmail.com">Hobdar110@gmail.com</a></div>
            <div><strong>University:</strong> BUIC'28</div>
          </div>
          <div className="social-links">
            <a href="#" className="social-link">𝕏</a>
            <a href="https://www.linkedin.com/in/hobdar-haider-507368212/" className="social-link" target="_blank" rel="noopener noreferrer">in</a>
            <a href="https://github.com/hobdar110" className="social-link" target="_blank" rel="noopener noreferrer">gh</a>
          </div>
          <div>
            <p style={{ color: 'var(--text-secondary)' }}>© 2025 Hobdar Haider. Built with 💻 and ☕</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

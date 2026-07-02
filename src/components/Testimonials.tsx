import './Testimonials.css';

const Testimonials = () => {
  const testimonials = [
    { name: 'Ahmed Khan', role: 'Tech Startup Founder', text: 'Hobdar delivered a flawless frontend solution ahead of schedule. His UI craftsmanship and attention to detail are exceptional!' },
    { name: 'Sarah Ahmed', role: 'Product Manager', text: 'Working with Hobdar was a breeze. He transformed our designs into a polished, pixel-perfect interface.' },
    { name: 'Ali Hassan', role: 'CTO', text: 'His frontend skills are top-notch. Hobdar turned our complex UI requirements into a clean, responsive application.' },
    { name: 'Fatima Ali', role: 'Project Lead', text: 'Great communicator and even better developer. Hobdar is someone you want on your team for any frontend project.' }
  ];

  return (
    <section className="testimonials" data-scroll-section>
      <div className="container">
        <h2 className="section-title">What People Say</h2>
        <p className="section-subtitle">Here's what clients and colleagues have shared about working with me.</p>
        
        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <p className="testimonial-text">"{testimonial.text}"</p>
              <div className="testimonial-author">
                <div className="author-avatar"></div>
                <div className="author-info">
                  <h4>{testimonial.name}</h4>
                  <p>{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

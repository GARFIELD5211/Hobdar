import './Testimonials.css';

const Testimonials = () => {
  const testimonials = [
    { name: 'Ahmed Khan', role: 'Tech Startup Founder', text: 'Saad delivered a flawless full-stack solution ahead of schedule. His code quality and attention to detail are exceptional!' },
    { name: 'Sarah Ahmed', role: 'Product Manager', text: 'Working with Saad was a breeze. He understood our requirements perfectly and built exactly what we needed.' },
    { name: 'Ali Hassan', role: 'CTO', text: 'His problem-solving skills are top-notch. Saad turned our complex requirements into a clean, scalable application.' },
    { name: 'Fatima Ali', role: 'Project Lead', text: 'Great communicator and even better developer. Saad is someone you want on your team for any web project.' }
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

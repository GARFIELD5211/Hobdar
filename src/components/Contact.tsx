import { FormEvent } from 'react';
import './Contact.css';

const Contact = () => {
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    alert('Thank you for your message! I will get back to you soon.');
  };

  return (
    <section id="contact" className="contact" data-scroll-section>
      <div className="container">
        <div className="contact-content">
          <h2>Let's build something amazing</h2>
          <p>Have a project in mind? Let's turn your ideas into reality. Drop me a message and let's discuss how we can work together!</p>
          
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Name</label>
              <input type="text" placeholder="Your name" required />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input type="email" placeholder="your@email.com" required />
            </div>
            <div className="form-group">
              <label>Project Type</label>
              <select required>
                <option value="">Select...</option>
                <option value="fullstack">Full Stack App</option>
                <option value="frontend">Frontend Development</option>
                <option value="backend">Backend/API</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div className="form-group">
              <label>Tell me about your project</label>
              <textarea placeholder="Describe your project..." required></textarea>
            </div>
            <button type="submit" className="btn">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;

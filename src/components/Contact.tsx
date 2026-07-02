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
              <label htmlFor="name">Name</label>
              <input id="name" type="text" placeholder="Your name" autoComplete="name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input id="email" type="email" placeholder="your@email.com" autoComplete="email" required />
            </div>
            <div className="form-group">
              <label htmlFor="project-type">Project Type</label>
              <select id="project-type" required>
                <option value="">Select...</option>
                <option value="frontend">Frontend Development</option>
                <option value="redesign">Site Redesign</option>
                <option value="landing">Landing Page</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="message">Tell me about your project</label>
              <textarea id="message" placeholder="Describe your project..." required></textarea>
            </div>
            <button type="submit" className="btn">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;

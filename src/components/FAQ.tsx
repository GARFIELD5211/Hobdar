import './FAQ.css';

const FAQ = () => {
  const faqs = [
    '1. What technologies do you work with?',
    '2. How long does a typical project take?',
    '3. Do you work on both frontend and backend?',
    '4. Can you help with existing projects?',
    '5. Do you provide maintenance after deployment?',
    '6. How can we get started?'
  ];

  return (
    <section className="faq" data-scroll-section>
      <div className="container">
        <h2 className="section-title">Frequently Asked Questions</h2>
        <p className="section-subtitle">Here are answers to some common questions about working with me.</p>
        
        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div key={index} className="faq-item">
              <div className="faq-question">{faq}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;

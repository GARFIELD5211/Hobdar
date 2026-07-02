import './Services.css';

const Services = () => {
  const services = [
    {
      number: '1.',
      title: 'Frontend Development',
      items: [
        'React.js & Next.js applications',
        'Responsive UI/UX implementation',
        'Modern JavaScript (ES6+)',
        'Tailwind CSS & styled components'
      ]
    },
    {
      number: '2.',
      title: 'UI/UX Implementation',
      items: [
        'Pixel-perfect design to code',
        'Interactive prototypes & mockups',
        'Accessibility (a11y) best practices',
        'Cross-browser compatibility'
      ]
    },
    {
      number: '3.',
      title: 'Animation & Interaction',
      items: [
        'Smooth page transitions',
        'Scroll-triggered animations',
        'Micro-interactions & hover effects',
        'Framer Motion & GSAP'
      ]
    },
    {
      number: '4.',
      title: 'Performance & SEO',
      items: [
        'Lighthouse score optimization',
        'Lazy loading & code splitting',
        'SEO-friendly markup',
        'Fast load times & Core Web Vitals'
      ]
    }
  ];

  return (
    <section className="services" data-scroll-section>
      <div className="container">
        <h2 className="section-title" data-scroll data-scroll-speed="1">
          what I can build for you
        </h2>
        <p className="section-subtitle" data-scroll data-scroll-speed="1">
          As a frontend developer, I create beautiful, responsive, and performant web interfaces that deliver exceptional user experiences.
        </p>
        
        <div className="services-grid">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="service-card" 
              data-scroll 
              data-scroll-speed={0.5 + index * 0.1}
            >
              <div className="service-number">{service.number}</div>
              <h3 className="service-title">{service.title}</h3>
              <ul className="service-list">
                {service.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

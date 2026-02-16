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
      title: 'Backend Development',
      items: [
        'Node.js & Express.js APIs',
        'Database design (MongoDB, PostgreSQL)',
        'RESTful & GraphQL APIs',
        'Authentication & authorization'
      ]
    },
    {
      number: '3.',
      title: 'Full Stack Apps',
      items: [
        'End-to-end web applications',
        'E-commerce platforms',
        'Dashboard & admin panels',
        'Real-time applications (Socket.io)'
      ]
    },
    {
      number: '4.',
      title: 'DevOps & Tools',
      items: [
        'Git & GitHub workflows',
        'Docker containerization',
        'CI/CD pipelines',
        'Cloud deployment (AWS, Vercel)'
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
          As a full stack developer, I create scalable, efficient, and user-friendly web applications that solve real-world problems.
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

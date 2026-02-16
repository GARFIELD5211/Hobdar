import './Projects.css';

const Projects = () => {
  const projects = [
    {
      category: 'Full Stack',
      title: 'E-Commerce Platform',
      description: 'Built a complete e-commerce solution with React, Node.js, and MongoDB. Features include cart management, payment integration, and admin dashboard.'
    },
    {
      category: 'Web App',
      title: 'Real-Time Chat Application',
      description: 'Developed a real-time messaging app using Socket.io, Express, and React with authentication and message persistence.'
    },
    {
      category: 'API Development',
      title: 'RESTful API Service',
      description: 'Created a scalable REST API with Node.js and PostgreSQL, implementing JWT authentication and comprehensive documentation.'
    },
    {
      category: 'Dashboard',
      title: 'Analytics Dashboard',
      description: 'Built an interactive analytics dashboard with Next.js and Chart.js for real-time data visualization and reporting.'
    }
  ];

  const techStack = ['⚛️ React', '📦 Next.js', '💚 Node.js', '🍃 MongoDB', '🎨 Tailwind CSS', '📘 TypeScript', '🔥 Express.js', '🐳 Docker', '☁️ AWS', '🔌 REST API', '🎯 GraphQL', '🔐 JWT Auth'];

  return (
    <section id="projects" className="projects" data-scroll-section>
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>
        <p className="section-subtitle">Check out some of my recent work — from full-stack applications to innovative web solutions.</p>
        
        <div className="tech-stack-section">
          <div className="tech-stack-scroll">
            {[...techStack, ...techStack].map((tech, index) => (
              <div key={index} className="tech-item">{tech}</div>
            ))}
          </div>
        </div>
        
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-image"></div>
              <div className="project-content">
                <div className="project-category">{project.category}</div>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

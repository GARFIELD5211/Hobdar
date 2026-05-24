import './Projects.css';

const Projects = () => {
  const projects = [
    {
      category: 'Shopify / Fashion',
      title: 'Black Bird ',
      description: 'Built Black Bird Clothing, a bold black-themed Shopify streetwear store with a clean, modern UI, smooth navigation, and a premium shopping feel designed to make products look expensive even when your budget disagrees.',
      image: '/images/blackbird.webp',
      link: 'https://blackbird.clothing'
    },
    {
      category: 'Lead Gen / B2B',
      title: 'The Voice Studio',
      description: 'Lead-gen site for a B2B call centre. Service pages built around what their buyers actually care about, case studies pulled forward instead of buried, and a contact form short enough that people actually fill it out.',
      image: '/images/tvs.webp',
      link: 'https://thevoicestudio.com'
    },
    {
      category: 'Media / Branding',
      title: 'Broadcast UAE',
      description: 'Portfolio site for a UAE media production company. Built it more like a landing page than a brochure, with the showreel doing the heavy lifting up top. Their work sells the work.',
      image: '/images/broadcast.webp',
      link: 'https://broadcastuae.com'
    },
    {
      category: 'AI Automation',
      title: 'XYNTRA AI',
      description: 'Site and back-office stack for a voice AI startup that sells into ecommerce. Their chatbot handles the tier-1 support tickets so their client`s human teams can stay on the harder stuff that actually needs a person.',
      image: '/images/xyntra.webp',
      link: 'https://xyntra.ai'
    }
  ];

  const handleViewProject = (link: string | undefined) => {
    if (link) {
      window.open(link, '_blank');
    }
  };

  return (
    <section id="projects" className="projects" data-scroll-section>
      {projects.map((project, index) => (
        <div key={index} className="project-fullscreen">
          <div className="project-fullscreen-content">
            <div 
              className="project-fullscreen-image"
              style={{ backgroundImage: `url(${project.image})` }}
            ></div>
            <div className="project-fullscreen-text">
              <div className="project-category">{project.category}</div>
              <h2 className="project-title">{project.title}</h2>
              <p className="project-description">{project.description}</p>
              <button 
                className="project-btn"
                onClick={() => handleViewProject(project.link)}
              >
                View Project →
              </button>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Projects;

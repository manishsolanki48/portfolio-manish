import { motion } from 'framer-motion';
import './ProjectsSection.css';
import myProjectImg1 from '../../images/project-image1.png';
import myProjectImg3 from '../../images/project-image3.png';
import myProjectImg5Png from '../../images/project-image5.png';
import myProjectImg5 from '../../images/my-project-image5.jpg';

const PROJECTS_DATA = [
  {
    title: 'Hono.ai - HR Platform',
    desc: 'Modern HR platform for streamlined employee management and workplace operations.',
    tags: ['REACT', 'MATERIAL UI'],
    variant: 'brand',
    img: myProjectImg5Png,
    link: 'https://www.hono.ai/',
  },
  {
    title: 'SRDS - Smart Resource Management',
    desc: 'Professional resource distribution and management system built with modern web technologies.',
    tags: ['REACT', 'TAILWIND'],
    variant: 'brand',
    img: myProjectImg1,
    link: 'https://srds.ai/',
  },
  {
    title: 'Nether Then Turn - Experience',
    desc: 'Interactive web experience with smooth animations and responsive design.',
    tags: ['REACT', 'FRAMER'],
    variant: 'accent',
    img: myProjectImg5,
    link: 'https://nether-then-turn.netlify.app/',
  },
  {
    title: 'Express Motors',
    desc: 'Responsive Express Motors dealership website showcasing vehicles with a clean, modern interface.',
    tags: ['REACT', 'RESPONSIVE'],
    variant: 'brand',
    img: myProjectImg3,
    link: 'https://expressmotors.bb/',
  },
];

function ProjectCard({ title, desc, tags, variant, img, link, delay }) {
  const handleCardClick = () => {
    if (link) window.open(link, '_blank');
  };
  return (
    <motion.div 
      className={`project-card project-card--${variant}`} 
      onClick={handleCardClick} 
      style={{ cursor: link ? 'pointer' : 'default' }}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay: delay }}
    >
      <div className="project-card__img-wrap">
        <img src={img} alt={title} className="project-card__img" />
        <div className="project-card__overlay">
          <span className="project-card__overlay-btn">{link ? 'Visit Project' : 'View Details'}</span>
        </div>
      </div>
      <div className="project-card__body">
        <h3 className="project-card__title">{title}</h3>
        <p className="project-card__desc">{desc}</p>
        <div className="project-card__tags">
          {tags.map((t) => (
            <span key={t} className="project-card__tag">{t}</span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function ProjectsSection() {
  return (
    <section className="sa-section projects" id="terminals">
      <div className="sa-container">

        <motion.div 
          className="projects__header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
        >
          <div>
            <p className="sa-section-label">Portfolio // Work_Experience</p>
            <h2 className="sa-section-title">Featured Projects</h2>
          </div>
          <div className="projects__meta">
            TOTAL_PROJECTS: 003<br />
            EXPERIENCE: 4.6 YEARS
          </div>
        </motion.div>

        <div className="projects__grid">
          {PROJECTS_DATA.map((project, index) => (
            <ProjectCard key={project.title} {...project} delay={index * 0.2} />
          ))}
        </div>

      </div>
    </section>
  );
}

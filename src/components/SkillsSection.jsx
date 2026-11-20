import { motion } from 'framer-motion';
import './SkillsSection.css';

const SKILLS_DATA = [
  {
    tag: '[ FRONTEND_STACK ]',
    name: 'Core Technologies',
    variant: 'brand',
    items: [
      { label: 'HTML5', pct: '99%' },
      { label: 'CSS3', pct: '98%' },
      { label: 'JavaScript/ES6+', pct: '97%' },
      { label: 'React.js', pct: '96%' },
    ],
  },
  {
    tag: '[ STYLING_FRAMEWORKS ]',
    name: 'UI & Design Tools',
    variant: 'accent',
    items: [
      { label: 'Tailwind CSS', pct: '99%' },
      { label: 'Bootstrap', pct: '92%' },
      { label: 'Figma', pct: '90%' },
      { label: 'Framer Motion', pct: '95%' },
    ],
  },
  {
    tag: '[ AI_TOOLS ]',
    name: 'AI & Productivity',
    variant: 'brand',
    items: [
      { label: 'ChatGPT', pct: '95%' },
      { label: 'Gemini', pct: '90%' },
      { label: 'Claude', pct: '92%' },
      { label: 'Copilot', pct: '93%' },
    ],
  },
];

function SkillCard({ tag, name, variant, items, delay }) {
  return (
    <motion.div 
      className={`skill-card hud-border skill-card--${variant}`}
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: delay }}
    >
      <div className={`skill-card__tag skill-card__tag--${variant}`}>{tag}</div>
      <h3 className="skill-card__name">{name}</h3>
      <ul className="skill-card__list">
        {items.map((item) => (
          <li key={item.label} className="skill-card__item">
            <span className="skill-card__label">{item.label}</span>
            <span className={`skill-card__pct skill-card__pct--${variant}`}>{item.pct}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

export default function SkillsSection() {
  return (
    <section className="sa-section skills" id="neural-network">
      <div className="sa-container">

        <motion.div 
          className="skills__header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
        >
          <p className="sa-section-label">Section_02 // Neural_Network</p>
          <h2 className="sa-section-title">Technical Architecture</h2>
        </motion.div>

        <div className="skills__grid">
          {SKILLS_DATA.map((skill, index) => (
            <SkillCard key={skill.name} {...skill} delay={index * 0.15} />
          ))}
        </div>

      </div>
    </section>
  );
}

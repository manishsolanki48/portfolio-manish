import { motion } from 'framer-motion';
import './Footer.css';

const LINKS = [
  { label: 'Github', href: '#' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/manish-solanki-002448244?utm_source=share_via&utm_content=profile&utm_medium=member_android' },
  { label: 'X-Terminal', href: '#' },
];

export default function Footer() {
  return (
    <motion.footer 
      className="footer"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="footer__inner sa-container">
        <p className="footer__copy">© 2026 MANISH_SOLANKI // ALL_RIGHTS_RESERVED</p>
        <nav className="footer__links">
          {LINKS.map(({ label, href }) => (
            <a key={label} href={href} className="footer__link" target="_blank" rel="noopener noreferrer">{label}</a>
          ))}
        </nav>
        <p className="footer__ping">LATENCY: 24ms // LOCATION: 37.7749° N, 122.4194° W</p>
      </div>
    </motion.footer>
  );
}

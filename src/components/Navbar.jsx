import { useState } from 'react';
import { motion } from 'framer-motion';
import './Navbar.css';
import resumePdf from '../../images/Manish_Solanki_UI_Developer.pdf';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <motion.nav 
      className="navbar"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="navbar__inner">

        {/* ── Logo ── */}
        <div className="navbar__logo">
          <div className="navbar__logo-box">
            <span className="navbar__logo-text">MS</span>
          </div>
          <span className="navbar__logo-label">MANISH_SOLANKI V2.0</span>
        </div>

        {/* ── Toggle Button (Mobile) ── */}
        <button 
          className="navbar__toggle" 
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? '✕' : '☰'}
        </button>

        {/* ── Links ── */}
        <div className={`navbar__links ${isOpen ? 'navbar__links--open' : ''}`}>
          <a href="#terminals" className="navbar__link" onClick={() => setIsOpen(false)}>
            <span className="navbar__link-num">[01]</span> Terminals
          </a>
          <a href="#neural-network" className="navbar__link" onClick={() => setIsOpen(false)}>
            <span className="navbar__link-num">[02]</span> Neural Network
          </a>
          <a href="#bio-data" className="navbar__link" onClick={() => setIsOpen(false)}>
            <span className="navbar__link-num">[03]</span> Bio-Data
          </a>
          <a href={resumePdf} target="_blank" rel="noopener noreferrer" className="navbar__cta" onClick={() => setIsOpen(false)}>Access Bio-Data</a>
        </div>

      </div>
    </motion.nav>
  );
}

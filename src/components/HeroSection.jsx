import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import './HeroSection.css';
import heroVideo from '../../images/379cq5jjexrmy0cx25hsgsjx1r_result_.mp4';

function ParticleCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animId;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    window.addEventListener('resize', resize);
    resize();

    const particles = Array.from({ length: 50 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.5,
      size: Math.random() * 2,
    }));

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = '#0df2f2';
      ctx.strokeStyle = 'rgba(13,242,242,0.1)';

      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
      });

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 100) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
      animId = requestAnimationFrame(animate);
    };

    animate();
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return <canvas ref={canvasRef} className="hero__canvas" />;
}

const textVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

export default function HeroSection() {
  return (
    <section className="hero circuit-bg">

      {/* Video Background */}
      <div className="hero__video-wrap">
        <video
          className="hero__video"
          src={heroVideo}
          autoPlay
          loop
          muted
          playsInline
        />
        <div className="hero__video-overlay" />
      </div>

      {/* Particle background */}
      <div className="hero__canvas-wrap">
        <ParticleCanvas />
      </div>

      <div className="hero__grid sa-container">

        {/* ── Left: Text ── */}
        <motion.div
          className="hero__content"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
          }}
        >
          <motion.div variants={textVariants} className="hero__badge">
            Status: System Online // Always Learning
          </motion.div>

          <motion.h1 variants={textVariants} className="hero__heading">
            IM FRONTEND<br />
            <span className="hero__heading--brand glow-text">
              <em>DEVELOPER</em>
            </span>
            <span className="hero__subname">[MANISH_SOLANKI]</span>
          </motion.h1>

          <motion.p variants={textVariants} className="hero__desc">
            Turning ideas into{' '}
            <span className="hero__desc--highlight">pixel-perfect digital solutions</span>.
            Experienced Frontend Developer proficient in React, Tailwind, and modern web technologies.
          </motion.p>

          <motion.div variants={textVariants} className="hero__btns">
            <button className="btn-primary">Launch Portfolio</button>
            <button className="btn-secondary" onClick={() => document.getElementById('uplink')?.scrollIntoView({ behavior: 'smooth' })}>Get in Touch</button>
          </motion.div>
        </motion.div>

        {/* ── Right: Visual ── */}
        <motion.div
          className="hero__visual"
          initial={{ opacity: 0, scale: 0.8, filter: "blur(4px)" }}
          animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
        >
          <div className="hero__vis-wrap">
            <div className="hero__vis-center">
              <div className="hero__vis-inner">

                {/* Outer tech overlay */}
                <motion.img
                  initial={{ rotate: -10, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 0.8 }}
                  transition={{ duration: 1.5, ease: "easeOut", delay: 0.8 }}
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBeTOtRIE7GxI075l2Qpw5oV-yBFSBRUU53E7GX-Eaxa_eBxQvNCGAubO-asl7XWAlIZmk2Hkq8vvrQ-qoRoa07_LYTx0X-_ungSZNJZHvlpcJKTqak9ULfJrGjRvxpBP1sxtoMtELLDnOrV74cSnVtUX0x8DT5q62UD_PNRVWHLc1kjdNfeZR8RmOpUtMVvShqv766_oSbWCB22gfwyvfFn9TBCEi3yRdc-IAEXE6DmP40MMB7ZpWOEOs3hlndbX60g3ZVpBjRC58"
                  alt="Cybernetic Interface"
                  className="hero__vis-outer"
                />

                {/* Inner portrait */}
                <div className="hero__vis-portrait-ring">
                  <motion.img
                    initial={{ scale: 1.2, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 1, ease: "easeOut", delay: 0.6 }}
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDwkxRSiiMlwXA6T_yXCQpxvb8vZTRVsmjzOI09YxcUlJ3u2BzsdrtdxR9PL-FGkwghSStJbb5jut3ltGdmnsLKARIf1iURt8lUUfoe__U-jxq6PBtO8WuxXP-BjMqTsqS8mHDeDzEx-yssHvfqtmjcXXyskHlLLJcgIZ1WkygajTfgjTe7dcXH_ctzr2LybMpHYnfkCsrffV6aWVJohE_kqL4lYQ3bA2NBLjjSoDegumDk_KduMKKOUVXKIejMhIjSiVNBunjl4dQ"
                    alt="Human Developer"
                    className="hero__vis-portrait"
                  />
                  <div className="hero__laser-scan"></div>
                </div>

                {/* Rotating rings */}
                <div className="hero__ring hero__ring--1" />
                <div className="hero__ring hero__ring--2" />

                {/* HUD callouts */}
                <motion.div
                  className="hero__callout hero__callout--right"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 1.2 }}
                >
                  BIO-DATA SYNC: ACTIVE<br />
                  LATENCY: 12ms<br />
                  KERNEL_VER: 4.2.0<br />
                  COGNITIVE_OVERLAY: 100%
                </motion.div>
                <motion.div
                  className="hero__callout hero__callout--left"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 1.4 }}
                >
                  CORE_TEMP: 32°C<br />
                  UPTIME: 1440H
                </motion.div>

              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

import { motion } from 'framer-motion';
import './BioSection.css';
import profileImg from '../../images/profile-image.png';

const META_ROWS = [
  { key: 'Designation', value: 'UI Developer' },
  { key: 'Experience', value: '4.6 Years' },
  { key: 'Current', value: 'Hono.ai' },
];

const STATS = [
  { num: '4.6+', label: 'Years Experience' },
  { num: '2', label: 'Companies' },
];

export default function BioSection() {
  return (
    <section className="sa-section bio" id="bio-data">
      <div className="sa-container">
        <motion.div
          className="bio__card hud-border"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >

          {/* ── Top bar (like a browser/terminal window) ── */}
          <div className="bio__topbar">
            <span className="bio__topbar-label">PROFESSIONAL_PROFILE: //UI_DEVELOPER</span>
            <div className="bio__dots">
              <span className="bio__dot bio__dot--red" />
              <span className="bio__dot bio__dot--yellow" />
              <span className="bio__dot bio__dot--green" />
            </div>
          </div>

          {/* ── Main body ── */}
          <div className="bio__body">
            <div className="bio__grid">

              {/* Left: Photo + meta */}
              <motion.div
                className="bio__left"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="bio__photo-wrap">
                  <img
                    src={profileImg}
                    alt="ID Profile"
                    className="bio__photo"
                  />
                </div>
                <div className="bio__meta">
                  {META_ROWS.map(({ key, value }) => (
                    <div key={key} className="bio__meta-row">
                      <span className="bio__meta-key">{key}</span>
                      <span>{value}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Right: Summary text + stats */}
              <motion.div
                className="bio__right"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <h3 className="bio__title">PROFILE SUMMARY</h3>
                <p className="bio__text">
                  Frontend UI Developer with 4.6+ years of hands-on experience in building responsive,
                  user-centric web interfaces. Expertise in HTML5, CSS3, Tailwind CSS, Bootstrap, and React.js.
                  Proficient in Figma for design collaboration. Currently working at Hono.ai, previously at
                  Krishna 53 Pvt Ltd and Arcitech.ai. Passionate about writing clean, efficient code and delivering
                  seamless digital experiences.
                </p>
                <div className="bio__stats">
                  {STATS.map(({ num, label }) => (
                    <div key={label} className="bio__stat">
                      <div className="bio__stat-num">{num}</div>
                      <div className="bio__stat-label">{label}</div>
                    </div>
                  ))}
                </div>
              </motion.div>

            </div>
          </div>

        </motion.div>
      </div>
    </section>
  );
}

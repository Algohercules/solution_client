import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__glow" />
      <div className="footer__container">
        <motion.div
          className="footer__brand"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="footer__brand-icon">100×</span>
          <span className="footer__brand-text">Solutions Education</span>
          <p className="footer__tagline">Your curated directory of AI tools for learning and creation.</p>
        </motion.div>

        <div className="footer__links">
          <motion.div
            className="footer__col"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="footer__heading">Explore</h4>
            <Link to="/categories" className="footer__link">Categories</Link>
            <Link to="/categories/video-generation" className="footer__link">Video</Link>
            <Link to="/categories/audio-generation" className="footer__link">Audio</Link>
            <Link to="/categories/image-generation" className="footer__link">Image</Link>
            <Link to="/categories/chatbots" className="footer__link">Chatbots</Link>
            <Link to="/categories/text-writing-content" className="footer__link">Text & Writing</Link>
            <Link to="/categories/agentic-automation" className="footer__link">Agentic AI</Link>
            <Link to="/categories/data-analytics-decision" className="footer__link">Data & Analytics</Link>
            <Link to="/categories/developer-tools" className="footer__link">Developer Tools</Link>
            <Link to="/categories/specialized-industry" className="footer__link">Specialized</Link>
            <Link to="/categories/multimodal" className="footer__link">Multimodal</Link>
          </motion.div>
          <motion.div
            className="footer__col"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="footer__heading">Resources</h4>
            <a href="#" className="footer__link">About Us</a>
            <a href="#" className="footer__link">Contact</a>
            <a href="#" className="footer__link">Privacy</a>
          </motion.div>
        </div>
      </div>

      <div className="footer__bottom">
        <p className="footer__copyright">
          © {currentYear} 100xSolutions Education. Curated for learners and creators.
        </p>
      </div>
    </footer>
  );
}

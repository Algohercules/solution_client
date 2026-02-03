import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/categories', label: 'Categories' },
  ];

  return (
    <motion.header
      className="navbar"
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <div className="navbar__container">
        <Link to="/" className="navbar__brand">
          <span className="navbar__brand-icon">100×</span>
          <span className="navbar__brand-text">Solutions Education</span>
        </Link>

        <nav className="navbar__nav">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`navbar__link ${location.pathname === link.to ? 'navbar__link--active' : ''}`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          className="navbar__toggle"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <span className={mobileOpen ? 'navbar__toggle-bar open' : 'navbar__toggle-bar'} />
          <span className={mobileOpen ? 'navbar__toggle-bar open' : 'navbar__toggle-bar'} />
          <span className={mobileOpen ? 'navbar__toggle-bar open' : 'navbar__toggle-bar'} />
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="navbar__mobile"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="navbar__mobile-link"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

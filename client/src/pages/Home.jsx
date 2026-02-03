import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { categories } from '../data/tools';
import CategoryCard from '../components/CategoryCard';

export default function Home() {
  return (
    <main className="page page--home">
      <section className="hero">
        <motion.div
          className="hero__3d-badge"
          initial={{ opacity: 0, rotateY: -30 }}
          animate={{ opacity: 1, rotateY: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          <span>AI Tools Directory</span>
        </motion.div>
        <motion.h1
          className="hero__title"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="hero__title-accent">100×</span> Solutions Education
        </motion.h1>
        <motion.p
          className="hero__subtitle"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Discover and explore the best AI tools — video, audio, image, and chatbots — all in one place.
        </motion.p>
        <motion.div
          className="hero__actions"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
        >
          <Link to="/categories" className="btn btn--primary">
            Browse categories
          </Link>
        </motion.div>
      </section>

      <section className="categories-section">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          AI tool categories
        </motion.h2>
        <div className="categories-grid">
          {categories.map((cat, i) => (
            <CategoryCard key={cat.id} category={cat} index={i} />
          ))}
        </div>
      </section>
    </main>
  );
}

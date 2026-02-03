import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { categories } from '../data/tools';
import CategoryCard from '../components/CategoryCard';

export default function Categories() {
  return (
    <main className="page page--categories">
      <motion.section
        className="page-header"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="page-title">Categories</h1>
        <p className="page-subtitle">Choose a category to see all related AI tools</p>
      </motion.section>
      <div className="categories-grid categories-grid--page">
        {categories.map((cat, i) => (
          <CategoryCard key={cat.id} category={cat} index={i} />
        ))}
      </div>
    </main>
  );
}

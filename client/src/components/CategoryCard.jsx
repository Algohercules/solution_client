import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import CategoryLogo3D from './CategoryLogo3D';

export default function CategoryCard({ category, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -8, scale: 1.02, rotateX: 2, rotateY: 2 }}
      className="category-card"
    >
      <Link to={`/categories/${category.slug}`} className="category-card__link">
        <div className="category-card__icon-wrap category-card__icon-wrap--3d">
          <CategoryLogo3D slug={category.slug} />
        </div>
        <h3 className="category-card__title">{category.name}</h3>
        <p className="category-card__desc">{category.description}</p>
        <span className="category-card__cta">
          View tools <span className="category-card__arrow">→</span>
        </span>
      </Link>
    </motion.div>
  );
}

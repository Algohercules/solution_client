import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { categories, toolsByCategory } from '../data/tools';
import ToolCard from '../components/ToolCard';
import CategoryLogo3D from '../components/CategoryLogo3D';

const API_BASE = '/api';

export default function CategoryPage() {
  const { slug } = useParams();
  const [tools, setTools] = useState([]);
  const [loading, setLoading] = useState(true);

  const category = categories.find((c) => c.slug === slug);

  useEffect(() => {
    async function fetchTools() {
      setLoading(true);
      try {
        const res = await fetch(`${API_BASE}/categories/${slug}/tools`);
        if (res.ok) {
          const data = await res.json();
          setTools(data);
        } else {
          setTools(toolsByCategory[slug] || []);
        }
      } catch {
        setTools(toolsByCategory[slug] || []);
      } finally {
        setLoading(false);
      }
    }
    if (slug) fetchTools();
  }, [slug]);

  if (!category) {
    return (
      <main className="page">
        <div className="error-state">
          <h2>Category not found</h2>
          <Link to="/categories" className="btn btn--primary">Back to categories</Link>
        </div>
      </main>
    );
  }

  return (
    <main className="page page--category">
      <motion.section
        className="page-header category-header"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Link to="/categories" className="back-link">← Categories</Link>
        <div className="category-header__icon category-header__icon--3d">
          <CategoryLogo3D slug={category.slug} />
        </div>
        <h1 className="page-title">{category.name}</h1>
        <p className="page-subtitle">{category.description}</p>
      </motion.section>

      {loading ? (
        <div className="tools-loading">
          <div className="tools-loading__spinner" />
          <p>Loading tools...</p>
        </div>
      ) : (
        <motion.section
          className="tools-section"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <div className="tools-grid">
            {tools.map((tool, i) => (
              <ToolCard key={tool.name} tool={tool} index={i} />
            ))}
          </div>
        </motion.section>
      )}
    </main>
  );
}

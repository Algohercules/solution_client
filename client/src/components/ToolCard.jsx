import { motion } from 'framer-motion';

export default function ToolCard({ tool, index }) {
  const handleClick = () => {
    window.open(tool.url, '_blank', 'noopener,noreferrer');
  };

  return (
    <motion.article
      className="tool-card"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      whileHover={{ y: -6, scale: 1.02 }}
    >
      <button type="button" className="tool-card__btn" onClick={handleClick}>
        <div className="tool-card__logo">{tool.logo}</div>
        <div className="tool-card__content">
          <h3 className="tool-card__name">{tool.name}</h3>
          <p className="tool-card__desc">{tool.description}</p>
        </div>
        <span className="tool-card__external">Visit site ↗</span>
      </button>
    </motion.article>
  );
}

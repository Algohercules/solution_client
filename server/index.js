import express from 'express';

import { categories, toolsByCategory } from './data/tools.js';
import cors from "cors";

app.use(cors({
  origin: "solutionsclient-git-main-adarshs-projects-e60bb8e5.vercel.app",
  credentials: true
}));


const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get('/api/categories', (req, res) => {
  res.json(categories);
});

app.get('/api/categories/:slug/tools', (req, res) => {
  const { slug } = req.params;
  const tools = toolsByCategory[slug] || [];
  res.json(tools);
});

app.get('/api/tools/:categorySlug', (req, res) => {
  const { categorySlug } = req.params;
  const tools = toolsByCategory[categorySlug] || [];
  res.json(tools);
});

app.listen(PORT, () => {
  console.log(`100xSolutions API running on http://localhost:${PORT}`);
});

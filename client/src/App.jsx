import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FloatingBackground from './components/FloatingBackground';
import Home from './pages/Home';
import Categories from './pages/Categories';
import CategoryPage from './pages/CategoryPage';

export default function App() {
  return (
    <>
      <FloatingBackground />
      <Navbar />
      <div className="app-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/categories/:slug" element={<CategoryPage />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

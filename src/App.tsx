import { HashRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import StocksPage from './pages/StocksPage';
import ReportsPage from './pages/ReportsPage';
import SupportPage from './pages/SupportPage';
import AcademyPage from './pages/AcademyPage';
import AboutPage from './pages/AboutPage';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/stocks" element={<StocksPage />} />
        <Route path="/reports" element={<ReportsPage />} />
        <Route path="/academy" element={<AcademyPage />} />
        <Route path="/support" element={<SupportPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </HashRouter>
  );
}

export default App;

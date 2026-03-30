import { HashRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import StocksPage from './pages/StocksPage';
import ReportsPage from './pages/ReportsPage';
import SupportPage from './pages/SupportPage';
import AcademyPage from './pages/AcademyPage';
import AboutPage from './pages/AboutPage';
import ShareholderPage from './pages/ShareholderPage';

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
        <Route path="/shareholder" element={<ShareholderPage />} />
      </Routes>
    </HashRouter>
  );
}

export default App;

import { HashRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import StocksPage from './pages/StocksPage';
import ReportsPage from './pages/ReportsPage';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/stocks" element={<StocksPage />} />
        <Route path="/reports" element={<ReportsPage />} />
      </Routes>
    </HashRouter>
  );
}

export default App;

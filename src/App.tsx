import { HashRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import StocksPage from './pages/StocksPage';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/stocks" element={<StocksPage />} />
      </Routes>
    </HashRouter>
  );
}

export default App;

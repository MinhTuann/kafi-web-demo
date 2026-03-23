import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import StocksPage from './pages/StocksPage';

function App() {
  return (
    <BrowserRouter basename="/kafi-web-demo">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/stocks" element={<StocksPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

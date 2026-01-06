import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import  Home from './pages/Home'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<div className="p-10 text-center">Aquí construiremos la carta...</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

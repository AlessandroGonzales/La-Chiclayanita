import { BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import ScrollToTop from "./ScrollToTop";
import Menu from "./pages/Menu"; // Asegúrate de crearlo en tu carpeta de páginas

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/menu/:categoryKey" element={<Menu />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

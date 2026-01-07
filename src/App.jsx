import { BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import ScrollToTop from "./ScrollToTop";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/menu"
          element={
            <div className="p-40 text-center">
              Aquí construiremos la carta...
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

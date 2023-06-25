import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import Products from "./pages/Products";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/products" element={<Products />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

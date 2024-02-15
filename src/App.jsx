import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import TopBar from "./components/TopBar";
import Index from "./pages/Index";
import Products from "./pages/Products";
import ShoppingCart from "./pages/ShoppingCart";

function App() {
  return (
    <Router>
      <TopBar />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/products" element={<Products />} />
        <Route path="/cart" element={<ShoppingCart />} />
      </Routes>
    </Router>
  );
}

export default App;

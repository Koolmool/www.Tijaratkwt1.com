import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import TopBar from "./components/TopBar";
import Index from "./pages/Index";
import Products from "./pages/Products";
import ShoppingCart from "./pages/ShoppingCart";
import LoginPage from "./pages/LoginPage";
import BikesProducts from "./pages/BikesProducts";
import CarsProducts from "./pages/CarsProducts";

function App() {
  return (
    <Router>
      <TopBar />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/products" element={<Products />} />
        <Route path="/cart" element={<ShoppingCart />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/bikes" element={<BikesProducts />} />
        <Route path="/cars" element={<CarsProducts />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </Router>
  );
}

export default App;

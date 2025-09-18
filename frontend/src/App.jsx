import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "../pages/LandingPage"
import Products from "../pages/Products";
import Support from "../pages/Support";
import Gaming from "../pages/Gaming";

function App() {
  return (
    <Router>
      {/* Navigation */}
      <nav className="bg-black text-white p-4 flex gap-6">
        <Link to="/" className="hover:text-red-500">Home</Link>
        <Link to="/products" className="hover:text-red-500">Products</Link>
        <Link to="/support" className="hover:text-red-500">Support</Link>
        <Link to="/gaming" className="hover:text-red-500">Gaming</Link>
      </nav>

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/support" element={<Support />} />
        <Route path="/gaming" element={<Gaming />} />
      </Routes>
    </Router>
  );
}

export default App;

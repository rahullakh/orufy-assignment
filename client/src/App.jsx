import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import AuthFlow from "./components/auth/AuthFlow";
import Home from "./pages/homepage/Home";
import DashboardLayout from "./components/layout/DashboardLayout";
import Products from "./pages/products/Products";

import Published from "./pages/homepage/Published";
import Unpublished from "./pages/homepage/Unpublished ";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AuthFlow></AuthFlow>}></Route>
        <Route path="/home" element={<DashboardLayout />}>
           <Route index element={<Home />} />
           <Route path="products" element={<Products />} />
            <Route path="published" element={<Published />} />
            <Route path="unpublished" element={<Unpublished />} />
        
        </Route>
      </Routes>
    </Router>
  );
}

export default App;

import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
import CartProvider from "./context/CartContext";

function App() {
  const [searchQuery, setSearchQuery] = useState(""); // Manage search query here

  // Handle search input changes
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <CartProvider>
      <Router>
        <Header searchQuery={searchQuery} onSearchChange={handleSearchChange} />
        <Routes>
          <Route path="/" element={<HomePage searchQuery={searchQuery} />} />
          <Route path="/product/:id" element={<ProductPage />} />
        </Routes>
        <Footer />
      </Router>
    </CartProvider>
  );
}

export default App;

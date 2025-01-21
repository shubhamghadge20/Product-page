import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const HomePage = ({ searchQuery }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  // Filter products based on the search query
  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="container">
      <h2>Products</h2>

      <div className="product-cards">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div key={product.id} className="product-card">
              <img
                src={product.image}
                alt={product.title}
                style={{ width: "150px", height: "150px", objectFit: "cover" }}
              />
              <h3>{product.title}</h3>
              <p>${product.price}</p>
              <Link to={`/product/${product.id}`} className="view-details">
                View Details
              </Link>
            </div>
          ))
        ) : (
          <p>No products found matching your search</p> // Show message if no products match the search
        )}
      </div>
    </div>
  );
};

export default HomePage;

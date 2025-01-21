import React, { useState, useEffect } from "react";

const RelatedProducts = ({ category }) => {
  const [relatedProducts, setRelatedProducts] = useState([]);

  useEffect(() => {
    if (!category) return; // Avoid fetching if category is not available

    // Fetch products from FakeStore API based on category
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        // Filter products by category
        const filteredProducts = data.filter(
          (product) => product.category === category
        );
        setRelatedProducts(filteredProducts.slice(0, 4)); // Get only the first 4 products
      })
      .catch((error) => console.error("Error fetching related products:", error));
  }, [category]); // Re-run when category changes

  if (!category) {
    return null; // Avoid rendering related products if no category is provided
  }

  return (
    <div className="related-products">
      <h3>Related Products</h3>
      <div className="product-list">
        {relatedProducts.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.title} />
            <p>{product.title}</p>
            <p>${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RelatedProducts;

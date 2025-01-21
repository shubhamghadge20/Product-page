import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import Carousel from "../components/Carousel";
import RelatedProducts from "../components/RelatedProducts"; // Import RelatedProducts

const ProductPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1); // Add quantity state
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [id]);

  const handleQuantityChange = (e) => {
    const value = parseInt(e.target.value, 10);
    if (value > 0) setQuantity(value); // Validate quantity
  };

  if (!product) return <p>Loading...</p>;

  return (
    <div className="container product-page">
      <div className="product-image">
        <Carousel images={[product.image]} />
      </div>
      <div className="product-details">
        <h2>{product.title}</h2>
        <p className="price">${product.price}</p>
        <p className="rating">
          Rating: ⭐ {product.rating?.rate || "N/A"} (Reviews: {product.rating?.count || 0})
        </p>
        <p className="description">{product.description}</p>

        <div className="quantity">
          <label htmlFor="quantity">Quantity:</label>
          <input
            id="quantity"
            type="number"
            value={quantity}
            onChange={handleQuantityChange}
            min="1"
            className="quantity-input"
          />
        </div>

        <div className="action-buttons">
          <button
            onClick={() => addToCart({ ...product, quantity })}
            className="add-to-cart"
          >
            Add to Cart
          </button>
          <button className="buy-now">Buy Now</button>
        </div>
      </div>

      {/* Pass category to RelatedProducts */}
      <RelatedProducts category={product.category} />
    </div>
  );
};

export default ProductPage;

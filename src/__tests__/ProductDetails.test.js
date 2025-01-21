import { render, screen } from "@testing-library/react";
import ProductPage from "../pages/ProductPage";
import { CartContext } from "../context/CartContext";
import { BrowserRouter } from "react-router-dom";

test("renders product details", async () => {
  const mockProduct = {
    id: 1,
    title: "Test Product",
    price: 100,
    description: "This is a test product",
    image: "test.jpg",
  };

  fetch.mockResponseOnce(JSON.stringify(mockProduct));

  render(
    <CartContext.Provider value={{ addToCart: jest.fn() }}>
      <BrowserRouter>
        <ProductPage />
      </BrowserRouter>
    </CartContext.Provider>
  );

  expect(await screen.findByText(/Test Product/i)).toBeInTheDocument();
});

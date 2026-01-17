import { useEffect, useState } from "react";
import { getProducts } from "../api/products";
import "./Products.css";

export default function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts("beds").then(setProducts);
  }, []);

  return (
    <div className="products-page">

      <section className="products-hero">
        <h1>Our Blessed Collection</h1>
        <p>Designed with love, faith & divine care</p>
      </section>

      <section className="products-grid">
        {products.map((item) => (
          <div key={item._id} className="product-card">

            <div className="product-image-wrapper">
              <img src={item.image} alt={item.name} />
            </div>

            <div className="product-info">
              <h3>{item.name}</h3>
              <p className="price">₹{item.price}</p>
              <button className="view-btn">View Details</button>
            </div>

          </div>
        ))}
      </section>

    </div>
  );
}

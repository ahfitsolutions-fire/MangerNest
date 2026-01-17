import { useEffect, useState } from "react";
import { getProducts } from "../api/products";
import "./KidsClothing.css";

export default function KidsClothing() {
  const [clothes, setClothes] = useState([]);

  useEffect(() => {
    getProducts("clothes").then(setClothes);
  }, []);

  return (
    <div className="clothing-page">

      <section className="clothing-hero">
        <h1>Kids Pure Cotton</h1>
        <p>Gentle on skin. Pure in heart. Blessed in comfort.</p>
      </section>

      <section className="clothing-grid">
        {clothes.map((item) => (
          <div key={item._id} className="clothing-card">

            <div className="clothing-image-wrapper">
              <img src={item.image} alt={item.name} />
            </div>

            <div className="clothing-info">
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

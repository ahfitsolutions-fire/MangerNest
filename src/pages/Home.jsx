import "./Home.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getProducts } from "../api/products";

export default function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts().then(setProducts);
  }, []);

  const bedsCount = products.filter(p => p.category === "beds").length;
  const clothesCount = products.filter(p => p.category === "clothes").length;

  return (
    <div className="home">

      {/* HERO SECTION */}
      <section className="hero">
        <h1>
          Peaceful Beginnings,<br />Inspired care.
        </h1>
        <button className="primary-btn">Shop Now</button>
      </section>

      {/* Featured Categories */}
      <section className="section light">
        <h2 className="section-title">Featured Product Categories</h2>

        <div className="category-grid">

          {/* Manger Beds */}
          <Link to="/products" className="category-card">
            <img
              src="/images/manger-bed.jpg"
              className="category-image"
              alt="Manger Beds"
            />
            <p className="category-title">Manger Beds</p>
            <span className="category-sub">
              Heavenly Rest · {bedsCount} Products
            </span>
          </Link>

          {/* Kids Clothing */}
          <Link to="/kids-clothing" className="category-card">
            <img
              src="/images/kids-clothing.jpg"
              className="category-image"
              alt="Kids Clothing"
            />
            <p className="category-title">Kids Pure Cotton</p>
            <span className="category-sub">
              Soft as Grace · {clothesCount} Products
            </span>
          </Link>

          {/* Gift Sets */}
          <div className="category-card disabled">
            <p className="category-title">Gift Sets</p>
            <span className="category-sub">Coming Soon</span>
          </div>

        </div>
      </section>

      {/* Trust Badges */}
      <section className="section">
        <div className="badge-row">
          <span className="badge">✔ Safety Certified</span>
          <span className="badge">🌿 100% Organic</span>
          <span className="badge">🤍 Ethical Production</span>
        </div>
      </section>

      {/* Our Story */}
      <section className="section light">
        <div className="story-grid">
          <div>
            <h2>Our Story</h2>
            <p>
              Inspired by the humility of the manger, MangerNest creates baby
              essentials with care, faith, and integrity. Every product is
              crafted gently, honoring life as God’s precious gift.
            </p>
          </div>
          <div className="story-image">Image</div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section">
        <h2 className="section-title">Customer Testimonials</h2>

        <div className="testimonial-grid">
          <div className="testimonial-card">
            ⭐⭐⭐⭐⭐
            <p>“Beautiful quality and peaceful design.”</p>
          </div>
          <div className="testimonial-card">
            ⭐⭐⭐⭐⭐
            <p>“Truly inspired by love and care.”</p>
          </div>
        </div>
      </section>

    </div>
  );
}

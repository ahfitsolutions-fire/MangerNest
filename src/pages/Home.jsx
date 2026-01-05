import "./Home.css";

export default function Home() {
  return (
    <div className="home">

            {/* HERO SECTION */}
      <section className="hero">
        <h1>
          Peaceful Beginnings,<br />Inspired Care.
        </h1>
        <button className="primary-btn">Shop Now</button>
      </section>

      {/* Featured Categories */}
      <section className="section light">
        <h2 className="section-title">Featured Product Categories</h2>

        <div className="category-grid">
          <div className="category-card">
            🛏️
            <p>Baby Beds</p>
          </div>
          <div className="category-card">
            👕
            <p>Baby Clothes</p>
          </div>
          <div className="category-card">
            🎁
            <p>Gift Sets</p>
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
          <div className="story-image">
            Image
          </div>
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

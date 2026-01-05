import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Logo from "./Logo";
import "./navbar.css";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Announcement Bar */}
      <div className="announcement-bar">
        God is the Boss. We are only stewards 🙏
      </div>

      {/* Sticky Navbar */}
      <nav className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}>
        <div className="navbar-inner">

          {/* Logo */}
          <div className="nav-logo">
            <Logo />
          </div>

          {/* Center Links */}
          <div className="nav-center">
            <Link to="/products">Manger</Link>
            <Link to="/clothing">Kids Pure Cotton</Link>
            <Link to="/collections">Tree of Life</Link>
            <Link to="/faith">Faith</Link>
          </div>

          {/* Right */}
          <div className="nav-right">
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
            <button className="icon-btn">🔍</button>
            <button className="icon-btn">🛒</button>
          </div>

        </div>
      </nav>
    </>
  );
}

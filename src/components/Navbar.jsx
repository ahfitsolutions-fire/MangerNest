import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Logo from "./Logo";
import "./navbar.css";
import { Search, ShoppingBag, X, User, UserPlus } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isRegistered, setIsRegistered] = useState(false);

  const navigate = useNavigate();

  /* Scroll effect */
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* Auth check */
  useEffect(() => {
    const token = localStorage.getItem("token");
    const registered = localStorage.getItem("isRegistered");

    setIsRegistered(!!registered);
    setIsLoggedIn(!!token);
  }, []);

  /* Logout */
  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    navigate("/login");
  };

  return (
    <>
      {/* Announcement Bar */}
      <div className="announcement-bar">
        God is the Boss. We are only stewards
      </div>

      {/* Navbar */}
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
            <Link to="/about" className="nav-link">About</Link>
            <Link to="/contact" className="nav-link">Contact</Link>

            {/* Auth Icons */}
            {!isRegistered ? (
              <Link to="/signup" className="icon-btn">
                <UserPlus size={20} strokeWidth={1.5} />
              </Link>
            ) : !isLoggedIn ? (
              <Link to="/login" className="icon-btn">
                <User size={20} strokeWidth={1.5} />
              </Link>
            ) : (
              <button onClick={handleLogout} className="icon-btn">
                <User size={20} strokeWidth={1.5} />
              </button>
            )}

            {/* Search */}
            <button className="icon-btn" onClick={() => setSearchOpen(true)}>
              <Search size={20} strokeWidth={1.5} />
            </button>

            {/* Cart */}
            <button className="icon-btn">
              <ShoppingBag size={20} strokeWidth={1.5} />
            </button>
          </div>

        </div>
      </nav>

      {/* Search Overlay */}
      {searchOpen && (
        <div className="search-overlay">
          <div className="search-container">
            <input
              type="text"
              placeholder="What are you looking for...?"
              autoFocus
            />
            <button className="close-btn" onClick={() => setSearchOpen(false)}>
              <X size={24} strokeWidth={2} />
            </button>
          </div>
        </div>
      )}
    </>
  );
}

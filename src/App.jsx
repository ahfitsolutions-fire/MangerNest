import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"

import Home from "./pages/Home"
import Products from "./pages/Products"
import KidsClothing from "./pages/KidsClothing"
import About from "./pages/About"
import Faith from "./pages/Faith"
import Contact from "./pages/Contact"
import Testimony from "./pages/Testimony"
import Login from "./pages/Login";
import Signup from "./pages/Signup";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/kids-clothing" element={<KidsClothing />} />
        <Route path="/about" element={<About />} />
        <Route path="/faith" element={<Faith />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/testimony" element={<Testimony />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  )
}

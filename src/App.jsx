import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"

import Home from "./pages/Home"
import Products from "./pages/Products"
import About from "./pages/About"
import Faith from "./pages/Faith"
import Contact from "./pages/Contact"
import Testimony from "./pages/Testimony";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/about" element={<About />} />
        <Route path="/faith" element={<Faith />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/testimony" element={<Testimony />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  )
}

import { useState } from "react";
import logo from "./assets/logo.png";
import "./Logo.css";

export default function Logo() {
  const [step, setStep] = useState(0);

  const handleClick = () => {
    setStep((prev) => (prev === 0 ? 1 : 0));
  };

  return (
    <div
      className={`logo-container ${step === 1 ? "text-left" : "text-behind"}`}
      onClick={handleClick}
    >
      <img src={logo} alt="MangerNest Logo" className="logo-img" />
      <span className="logo-text">MangerNest - Baby of promise </span>
    </div>
  );
}

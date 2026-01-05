import { useNavigate } from "react-router-dom";
import "./FaithBanner.css";

export default function FaithBanner() {
  const navigate = useNavigate();

  return (
    <div
      className="faith-banner"
      onClick={() => navigate("/testimony")}
    >
      <span className="faith-text">
        God is the Boss. We are only stewards 🙏
      </span>

      <div className="faith-hover-panel">
        <p>
          Our journey is led by faith, obedience, and stewardship.
          Every product we create is an offering, not ownership.
        </p>
        <small>Click to read our testimony →</small>
      </div>
    </div>
  );
}

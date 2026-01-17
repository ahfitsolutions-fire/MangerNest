import { useState } from "react";
import { loginUser } from "../api/auth.jsx";
import { useNavigate } from "react-router-dom";
import "./Auth.css";

export default function Login() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await loginUser(form);

      localStorage.setItem("token", res.access_token);

      alert("Login successful ✅");
      navigate("/"); // go to home or dashboard

    } catch (err) {
      alert("Invalid email or password");
    }
  };

  return (
    <div className="auth-page">
      <h1>Welcome Back</h1>

      <form onSubmit={handleSubmit} className="auth-form">
        <input
          type="email"
          placeholder="Email"
          required
          value={form.email}
          onChange={(e) =>
            setForm({ ...form, email: e.target.value })
          }
        />

        <input
          type="password"
          placeholder="Password"
          required
          value={form.password}
          onChange={(e) =>
            setForm({ ...form, password: e.target.value })
          }
        />

        <button type="submit">Login</button>
      </form>
    </div>
  );
}

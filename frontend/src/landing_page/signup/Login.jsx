import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  getBackendUrl,
  getDashboardUrl,
  setAuth,
} from "../../utils/auth";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError("");
    setIsSubmitting(true);

    try {
      const response = await fetch(`${getBackendUrl()}/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();
      if (!response.ok) {
        setError(data.message || "Login failed");
        return;
      }

      setAuth({
        token: data.token,
        user: data.user,
      });

      const dashboardUrl = `${getDashboardUrl()}/dashboard?token=${encodeURIComponent(
        data.token
      )}`;
      window.location.href = dashboardUrl;
    } catch {
      setError("Cannot reach server. Start backend and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="auth-section">
      <div className="auth-card">
        <h2>Login</h2>
        <p>Login and continue to your dashboard.</p>

        <form onSubmit={handleSubmit} className="auth-form">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Signing in..." : "Login"}
          </button>
        </form>

        {error ? <p className="auth-error">{error}</p> : null}

        <p className="auth-alt">
          New user? <Link to="/signup">Sign up</Link>
        </p>
        <p className="auth-alt">
          <button className="linkish" type="button" onClick={() => navigate("/")}>
            Back to home
          </button>
        </p>
      </div>
    </section>
  );
}

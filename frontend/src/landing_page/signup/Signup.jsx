import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  getBackendUrl,
  getDashboardUrl,
  setAuth,
} from "../../utils/auth";

export default function Signup() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError("");
    setIsSubmitting(true);

    try {
      const response = await fetch(`${getBackendUrl()}/auth/signup`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ fullName, email, password }),
      });

      const data = await response.json();
      if (!response.ok) {
        setError(data.message || "Signup failed");
        return;
      }

      let token = data.token;
      let user = data.user;

      if (!token) {
        const loginResponse = await fetch(`${getBackendUrl()}/auth/login`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password }),
        });

        const loginData = await loginResponse.json();
        if (!loginResponse.ok || !loginData?.token) {
          setError("Signup completed, but auto-login failed. Please login.");
          return;
        }

        token = loginData.token;
        user = loginData.user;
      }

      setAuth({
        token,
        user,
      });

      const dashboardUrl = `${getDashboardUrl()}/dashboard?token=${encodeURIComponent(
        token
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
        <h2>Create account</h2>
        <p>Sign up to start trading from your dashboard.</p>

        <form onSubmit={handleSubmit} className="auth-form">
          <input
            type="text"
            placeholder="Full name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
          />
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
            minLength={6}
            required
          />
          <button type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Creating..." : "Sign up"}
          </button>
        </form>

        {error ? <p className="auth-error">{error}</p> : null}

        <p className="auth-alt">
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    </section>
  );
}

import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  clearAuth,
  getAuth,
  getDashboardUrl,
} from "../utils/auth";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const auth = getAuth();
  const isLoggedIn = Boolean(auth?.token);

  const handleLogout = () => {
    clearAuth();
    window.location.href = "/";
  };

  const handleMenuClose = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img src="images/logo.svg" alt="logo img" style={{ width: "120px" }} />
        </Link>
        <button
          type="button"
          className="mobile-menu-toggle"
          aria-label="Toggle navigation"
          onClick={() => setIsMenuOpen((prev) => !prev)}
        >
          {isMenuOpen ? "Close" : "Menu"}
        </button>

        <div
          className={`navbar-collapse-custom ${isMenuOpen ? "open" : ""}`}
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav Nav-link mb-2 mb-lg-0 p-2">
            {isLoggedIn ? (
              <>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href={`${getDashboardUrl()}/dashboard?token=${encodeURIComponent(
                      auth.token
                    )}`}
                    onClick={handleMenuClose}
                  >
                    Dashboard
                  </a>
                </li>
                <li className="nav-item">
                  <button className="nav-link btn-as-link" onClick={handleLogout}>
                    Logout
                  </button>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item">
                  <Link className="nav-link" to="/signup" onClick={handleMenuClose}>
                    Sign up
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/login" onClick={handleMenuClose}>
                    Login
                  </Link>
                </li>
              </>
            )}
            <li className="nav-item">
              <Link className="nav-link" to="/about" onClick={handleMenuClose}>
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/products" onClick={handleMenuClose}>
                Products
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/pricing" onClick={handleMenuClose}>
                Pricing
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/support" onClick={handleMenuClose}>
                Support
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

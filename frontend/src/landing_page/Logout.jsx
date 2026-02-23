import React, { useEffect } from "react";
import { clearAuth } from "../utils/auth";

export default function Logout() {
  useEffect(() => {
    clearAuth();
    window.location.replace("/login");
  }, []);

  return <p style={{ padding: "24px" }}>Logging out...</p>;
}

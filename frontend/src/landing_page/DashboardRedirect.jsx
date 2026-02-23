import React, { useEffect } from "react";
import { getDashboardUrl, getAuthToken } from "../utils/auth";

export default function DashboardRedirect() {
  useEffect(() => {
    const token = getAuthToken();
    const dashboardUrl = `${getDashboardUrl()}/dashboard${
      token ? `?token=${encodeURIComponent(token)}` : ""
    }`;
    window.location.href = dashboardUrl;
  }, []);

  return <p style={{ padding: "24px" }}>Redirecting to dashboard...</p>;
}

import React, { useEffect } from "react";
import { getDashboardUrl, getAuthToken, hasDashboardUrl } from "../utils/auth";

export default function DashboardRedirect() {
  const dashboardConfigured = hasDashboardUrl();

  useEffect(() => {
    if (!dashboardConfigured) return;

    const token = getAuthToken();
    const baseDashboardUrl = getDashboardUrl().replace(/\/+$/, "");
    const dashboardUrl = `${baseDashboardUrl}/${
      token ? `?token=${encodeURIComponent(token)}` : ""
    }`;
    window.location.href = dashboardUrl;
  }, [dashboardConfigured]);

  if (!dashboardConfigured) {
    return (
      <p style={{ padding: "24px" }}>
        Dashboard URL is not configured. Set <code>VITE_DASHBOARD_URL</code> in
        frontend environment variables.
      </p>
    );
  }

  return <p style={{ padding: "24px" }}>Redirecting to dashboard...</p>;
}

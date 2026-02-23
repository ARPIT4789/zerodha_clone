const AUTH_STORAGE_KEY = "sigma_user_auth";
const DEPLOYED_BACKEND_URL = "https://zerodha-clone-by-arpit.onrender.com";
const DEPLOYED_DASHBOARD_URL = "https://zerodha-dashboard-by-arpit.onrender.com";

const BACKEND_URL =
  import.meta.env.VITE_BACKEND_URL || DEPLOYED_BACKEND_URL;
const DASHBOARD_URL =
  import.meta.env.VITE_DASHBOARD_URL || DEPLOYED_DASHBOARD_URL;

export const getBackendUrl = () => BACKEND_URL;

export const getDashboardUrl = () => DASHBOARD_URL;
export const hasDashboardUrl = () => Boolean(DASHBOARD_URL);

export const getAuth = () => {
  const raw = localStorage.getItem(AUTH_STORAGE_KEY);
  if (!raw) return null;

  try {
    return JSON.parse(raw);
  } catch {
    localStorage.removeItem(AUTH_STORAGE_KEY);
    return null;
  }
};

export const getAuthToken = () => {
  const auth = getAuth();
  return auth?.token || "";
};

export const setAuth = (payload) => {
  localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(payload));
};

export const clearAuth = () => {
  localStorage.removeItem(AUTH_STORAGE_KEY);
};

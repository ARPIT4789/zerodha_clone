const AUTH_STORAGE_KEY = "sigma_dashboard_auth";
const DEPLOYED_BACKEND_URL = "https://zerodha-clone-by-arpit.onrender.com";

const getRuntimeOrigin = (port) => {
  const protocol = window.location.protocol || "http:";
  const host = window.location.hostname || "localhost";
  return `${protocol}//${host}:${port}`;
};

const BACKEND_URL =
  import.meta.env.VITE_BACKEND_URL || DEPLOYED_BACKEND_URL;
const FRONTEND_URL =
  import.meta.env.VITE_FRONTEND_LOGIN_URL || `${getRuntimeOrigin(5173)}/logout`;

export const getBackendUrl = () => BACKEND_URL;

export const getFrontendLoginUrl = () => FRONTEND_URL;

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
  return getAuth()?.token || "";
};

export const setAuth = (payload) => {
  localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(payload));
};

export const clearAuth = () => {
  localStorage.removeItem(AUTH_STORAGE_KEY);
};

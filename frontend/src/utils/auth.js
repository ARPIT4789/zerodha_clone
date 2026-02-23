const AUTH_STORAGE_KEY = "sigma_user_auth";

const getRuntimeOrigin = (port) => {
  const protocol = window.location.protocol || "http:";
  const host = window.location.hostname || "localhost";
  return `${protocol}//${host}:${port}`;
};

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL || getRuntimeOrigin(3535);
const DASHBOARD_URL =
  import.meta.env.VITE_DASHBOARD_URL || getRuntimeOrigin(5174);

export const getBackendUrl = () => BACKEND_URL;

export const getDashboardUrl = () => DASHBOARD_URL;

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

import React, { useEffect, useState } from "react";
import axios from "axios";
import Dashboard from "./Dashboard";
import TopBar from "./TopBar";
import {
  clearAuth,
  getAuth,
  getBackendUrl,
  getFrontendLoginUrl,
  setAuth,
} from "../utils/auth";

const Home = () => {
  const [isCheckingAuth, setIsCheckingAuth] = useState(true);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const syncAuth = async () => {
      const params = new URLSearchParams(window.location.search);
      const tokenFromQuery = params.get("token");
      if (tokenFromQuery) {
        setAuth({ token: tokenFromQuery });
        const cleanUrl = `${window.location.origin}${window.location.pathname}`;
        window.history.replaceState({}, "", cleanUrl);
      }

      const localAuth = getAuth();
      if (!localAuth?.token) {
        setIsCheckingAuth(false);
        return;
      }

      try {
        const response = await axios.get(`${getBackendUrl()}/auth/me`, {
          headers: {
            Authorization: `Bearer ${localAuth.token}`,
          },
        });
        const verifiedUser = response.data?.user || null;
        if (!verifiedUser) {
          clearAuth();
          setUser(null);
          setIsCheckingAuth(false);
          return;
        }
        setAuth({ token: localAuth.token, user: verifiedUser });
        setUser(verifiedUser);
      } catch {
        clearAuth();
        setUser(null);
      } finally {
        setIsCheckingAuth(false);
      }
    };

    syncAuth();
  }, []);

  const handleLogout = async () => {
    const localAuth = getAuth();
    if (localAuth?.token) {
      try {
        await axios.post(
          `${getBackendUrl()}/auth/logout`,
          {},
          {
            headers: {
              Authorization: `Bearer ${localAuth.token}`,
            },
          }
        );
      } catch {
        // Client cleanup is enough when server call fails.
      }
    }
    clearAuth();
    setUser(null);
    window.location.href = getFrontendLoginUrl();
  };

  if (isCheckingAuth) {
    return <div style={{ padding: "24px" }}>Checking session...</div>;
  }

  if (!user) {
    return (
      <div style={{ padding: "24px" }}>
        <h3>Please login from frontend first.</h3>
        <a href={getFrontendLoginUrl()}>Go to Login</a>
      </div>
    );
  }

  return (
    <>
      <TopBar user={user} onLogout={handleLogout} />
      <Dashboard />
    </>
  );
};

export default Home;

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export function useAuthCheck() {
  const [checkingAuth, setCheckingAuth] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    setTimeout(() => {
      if (!isLoggedIn) {
        navigate("/");
      } else {
        setCheckingAuth(false);
      }
    }, 100);
  }, [navigate]);

  return checkingAuth;
}

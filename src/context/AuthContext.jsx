import { createContext, useState, useEffect } from "react";
import { refreshToken } from "../api/Auth";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(null);
  const [loading, setLoading] = useState(true);
  const [purchased, setPurchased] = useState([])
  const [notPurchased,setNotPurchased] = useState([])
  const [user, setUser] = useState("")
  const [userID, setUserID] = useState("")
  
  const loadUser = async () => {
    try {
      const data = await refreshToken();
      if (data.access_token) {
        setToken(data.access_token);
        setUser(data.username)
        setPurchased(data.purchased)
        setNotPurchased(data.notPurchased)
        setUserID(data.userID)
      }
    } catch (err) {
      setToken(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadUser(); // 🔥 auto-login on app start
  }, []);

  return (
    <AuthContext.Provider value={{ token, setToken, loading, user, setUser, purchased, notPurchased, setPurchased, setNotPurchased, userID, setUserID }}>
      {children}
    </AuthContext.Provider>
  );
};
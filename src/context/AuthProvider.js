import { createContext, useState, useMemo, useContext } from "react";
import { useNavigate, useLocation } from "react-router-dom";
// import {
//   getItemFromLocalStorage,
//   setItemInLocalStorage,
// } from "./UseLocalStorage";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  const login = async (data) => {
    setUser(data);
    navigate("posts");
  };

  // call this function to sign out logged in user
  const logout = () => {
    setUser(null);
    navigate("signin", { replace: true });
  };

  // memoize the value to prevent unnecessary re-renders
  const value = useMemo(
    () => ({
      user,
      login,
      logout,
    }),
    [user]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthContext;

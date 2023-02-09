// import { useEffect, createContext, useState, useMemo, useContext } from "react";
// import { useNavigate, useLocation } from "react-router-dom";

// import {
//   getItemFromLocalStorage,
//   setItemInLocalStorage,
// } from "../useLocalStorage";

// const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState(null);
//   const navigate = useNavigate();
//   const location = useLocation();

//   useEffect(() => {
//     const lsUser = getItemFromLocalStorage("user");

//     if (lsUser) {
//       // set user in state
//       setUser(lsUser);
//       // navigate them to where they need to go
//     } else {
//       navigate(location.pathname);
//     }
//   }, []);

//   const login = async (data) => {
//     setItemInLocalStorage("user");
//     setUser(data);
//     navigate("posts");
//   };

//   // call this function to sign out logged in user
//   const logout = () => {
//     setUser(null);
//     setItemInLocalStorage("user", null);
//     navigate("signin", { replace: true });
//   };

//   // memoize the value to prevent unnecessary re-renders
//   const value = useMemo(
//     () => ({
//       user,
//       login,
//       logout,
//     }),
//     [user]
//   );

//   return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
// };

// export const useAuth = () => {
//   return useContext(AuthContext);
// };

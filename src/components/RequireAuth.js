import { useAuth } from "../context/useAuth";
import { Navigate, Outlet } from "react-router-dom";

// export const RequireAuth = ({ children }) => {
//   const auth = useAuth();

//   if (!auth.user) {
//     return <Navigate to="/signin" />;
//   }
//   return children;
// };
export const RequireAuth = () => {
  const auth = useAuth();

  if (!auth.user) {
    return <Navigate to="/signin" />;
  }
  return <Outlet />;
};

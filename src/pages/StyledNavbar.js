import { NavLink, useNavigate } from "react-router-dom";
import * as React from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import RestoreIcon from "@mui/icons-material/Restore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ArchiveIcon from "@mui/icons-material/Archive";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Paper from "@mui/material/Paper";
import { getItemFromLocalStorage } from "../useLocalStorage";
import { setItemInLocalStorage } from "../useLocalStorage";
import { useAuth } from "../context/useAuth";
import userEvent from "@testing-library/user-event";

const Navbar = () => {
  const auth = useAuth();

  const navigate = useNavigate();
  const handleLogout = () => {
    auth.logout();
    navigate("/");
  };

  // const navigate = useNavigate();

  // const handleClick = () => {
  //   console.log("logging out");
  //   setItemInLocalStorage("user", null);
  //   navigate("/");
  // };

  // const user = getItemFromLocalStorage("user");
  // console.log(user);

  return (
    <nav className="navbar">
      {/* {user && <p className="navbar-name">{user.name}'s Posts</p>} */}
      {/* <NavNavLink to="/" className="btn">
        Home
      </NavLink> */}
      {/* <NavLink to="/posts" className="btn">
        All
      </NavLink> */}
      <NavLink
        to="/posts"
        style={({ isActive }) => {
          return {
            color: isActive ? "CornFlowerBlue" : "grey",
            textDecoration: "none",
          };
        }}
      >
        All
      </NavLink>
      {auth.user && (
        <NavLink
          to="/postform"
          style={({ isActive }) => {
            return {
              color: isActive ? "CornFlowerBlue" : "grey",
              textDecoration: "none",
            };
          }}
        >
          New Post
        </NavLink>
      )}
      {auth.user && (
        <NavLink
          to="/dashboard"
          style={({ isActive }) => {
            return {
              color: isActive ? "CornFlowerBlue" : "grey",
              textDecoration: "none",
            };
          }}
        >
          Dashboard
        </NavLink>
      )}

      {!auth.user && (
        <NavLink
          to="/signupform"
          style={({ isActive }) => {
            return {
              color: isActive ? "CornFlowerBlue" : "grey",
              textDecoration: "none",
            };
          }}
        >
          Sign Up
        </NavLink>
      )}

      {/* {user && <button onClick={handleClick}>Log Out</button>} */}
      {!auth.user && (
        <NavLink
          to="/signin"
          style={({ isActive }) => {
            return {
              color: isActive ? "CornFlowerBlue" : "grey",
              textDecoration: "none",
            };
          }}
        >
          Login
        </NavLink>
      )}
      {auth.user && <button onClick={handleLogout}>Log Out</button>}
    </nav>
  );
};
export default Navbar;

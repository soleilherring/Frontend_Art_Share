import { Link } from "react-router-dom";
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

const Navbar = () => {
  const handleClick = () => {
    setItemInLocalStorage("user", null);
  };
  const user = getItemFromLocalStorage("user");
  console.log(user);

  return (
    <nav className="navbar">
      <Link to="/" className="btn">
        Home
      </Link>
      <Link to="/posts" className="btn">
        All
      </Link>
      <Link to="/signin" className="btn">
        Login
      </Link>
      <Link to="/signupform" className="btn">
        Sign Up
      </Link>
      {user && <button onClick={handleClick}>Log Out</button>}
      <Link to="/postform" className="btn">
        New Post
      </Link>
    </nav>
  );
};
export default Navbar;

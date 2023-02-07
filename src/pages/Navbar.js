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

// const Navbar = () => {
//   return (
//     <>
//       <nav class="navbar navbar-expand-lg navbar-light bg-light">
//         <div class="container-fluid">
//           <button
//             class="navbar-toggler"
//             type="button"
//             data-bs-toggle="collapse"
//             data-bs-target="#navbarColor03"
//             aria-controls="navbarColor03"
//             aria-expanded="false"
//             aria-label="Toggle navigation"
//           >
//             <span class="navbar-toggler-icon"></span>
//           </button>
//           <div class="collapse navbar-collapse" id="navbarColor03">
//             <ul class="navbar-nav me-auto">
//               <li class="nav-item">
//                 <Link to="/postlist">All</Link>
//                 <span class="visually-hidden">(current)</span>
//               </li>
//               <li class="nav-item">
//                 <Link to="/categories">setCategories</Link>
//               </li>
//               <li class="nav-item">
//                 <Link to="/signin">Sign In</Link>
//               </li>
//               <li class="nav-item">
//                 <Link to="/signout">Sign Out</Link>
//               </li>
//               <li class="nav-item dropdown">
//                 <a
//                   class="nav-link dropdown-toggle"
//                   data-bs-toggle="dropdown"
//                   href="#"
//                   role="button"
//                   aria-haspopup="true"
//                   aria-expanded="false"
//                 >
//                   Dropdown
//                 </a>
//                 <div class="dropdown-menu">
//                   <a class="dropdown-item" href="#">
//                     Action
//                   </a>
//                   <a class="dropdown-item" href="#">
//                     Another action
//                   </a>
//                   <a class="dropdown-item" href="#">
//                     Something else here
//                   </a>
//                   <div class="dropdown-divider"></div>
//                   <a class="dropdown-item" href="#">
//                     Separated link
//                   </a>
//                 </div>
//               </li>
//             </ul>
//             <form class="d-flex">
//               <input
//                 class="form-control me-sm-2"
//                 type="search"
//                 placeholder="Search"
//               />
//               <button class="btn btn-secondary my-2 my-sm-0" type="submit">
//                 Search
//               </button>
//             </form>
//           </div>
//         </div>
//       </nav>
//     </>
//   );
// };

//   <Paper
//     sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
//     elevation={3}
//   >
//     <BottomNavigation>
//       <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
//       <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
//       <BottomNavigationAction label="Archive" icon={<ArchiveIcon />} />
//     </BottomNavigation>
//   </Paper>

/* <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
          <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
          <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
          <BottomNavigationAction label="Archive" icon={<ArchiveIcon />} />
        </BottomNavigation> */
// }

const Navbar = () => {
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
      <Link to="/postform" className="btn">
        New Post
      </Link>
      <Link to="/signupform" className="btn">
        Sign Up
      </Link>
    </nav>
  );
};
export default Navbar;

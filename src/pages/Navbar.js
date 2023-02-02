import { Link } from "react-router-dom";
import * as React from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import RestoreIcon from "@mui/icons-material/Restore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ArchiveIcon from "@mui/icons-material/Archive";

const Navbar = () => {
  return (
    <BottomNavigation>
      <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
      <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
      <BottomNavigationAction label="Archive" icon={<ArchiveIcon />} />
    </BottomNavigation>
  );
};
export default Navbar;
{
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
}

// const Navbar = () => {
//   return (
//     <nav className="navbar">
//       <Link to="/">Home</Link>
//       <Link to="/postlist">All</Link>
//       <Link to="/posts/:post_id">Selected Post</Link>
//     </nav>
//   );
// };
// export default Navbar;

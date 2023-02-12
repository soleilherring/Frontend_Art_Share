import { Link, Outlet } from "react-router-dom";
import Navbar from "../StyledNavbar";
import artshare from "../../images/artshare.gif";

const Home = () => {
  return (
    <>
      {/* <Navbar /> */}
      <section
        className="section"
        sx={{
          width: "100%",
        }}
      >
        {/* <h2>Welcome to Art Share</h2> */}
        <img
          className="home-img"
          src={artshare}
          alt="gif welcoming users"
          style={{ height: "auto", width: " 100%" }}
        ></img>
        {/* <Outlet /> */}
      </section>
    </>
    // <section className="home">
    //   <h2>Welcome to Art Share</h2>
    //   <Link to="/signin" className="btn">
    //     Sign In
    //   </Link>
    //   <Link to="/signup" className="btn">
    //     Signup
    //   </Link>
    // </section>
  );
};

export default Home;

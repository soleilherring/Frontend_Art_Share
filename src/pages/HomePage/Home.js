import { Link, Outlet } from "react-router-dom";
import Navbar from "../StyledNavbar";

const Home = () => {
  return (
    <>
      <Navbar />
      {/* <section className="section"> */}
      <Outlet />
      {/* </section> */}
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

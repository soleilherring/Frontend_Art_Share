import { Link } from "react-router-dom";

const Home = () => {
  return (
    <section className="home">
      <h2>Welcome to Art Share</h2>
      <Link to="/signin" className="btn">
        Sign In
      </Link>
      <Link to="/signup" className="btn">
        Signup
      </Link>
    </section>
  );
};

export default Home;

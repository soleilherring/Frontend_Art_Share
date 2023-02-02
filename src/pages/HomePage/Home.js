import { Link } from "react-router-dom";

const Home = () => {
  return (
    <section className="home">
      <h2>Welcome to Art Share</h2>
      <Link to="/signup" className="btn">
        Sign In
      </Link>
    </section>
  );
};

export default Home;

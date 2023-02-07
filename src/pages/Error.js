import { Link } from "react-router-dom";
const Error = () => {
  return (
    <section className="section">
      <h2>404 </h2>
      <h2>Page not found</h2>
      <Link to="/posts">Home</Link>
    </section>
  );
};

export default Error;

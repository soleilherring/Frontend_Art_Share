import { useAuth } from "../context/useAuth";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const auth = useAuth();
  // const navigate = useNavigate();
  // const handleLogout = () => {
  //   auth.logout();
  //   navigate("/");
  // };

  return (
    <section className="section">
      <h4>{auth.user ? `Welcome, ${auth.user.name}` : ""}</h4>
      {/* {auth.user && <button onClick={handleLogout}>Log Out</button>} */}
    </section>
  );
};
export default Dashboard;

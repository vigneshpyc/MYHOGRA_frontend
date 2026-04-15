import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const Dashboard = () => {
  const { token, loading, user } = useContext(AuthContext);

  if (loading) return <h2>Loading...</h2>;
  if (!token) return <h2>Please Login</h2>;
  const username = user

  return (
    <div>
      <h1>Welcome {username} You are authenticated ✅</h1>
    </div>
  );
};

export default Dashboard;
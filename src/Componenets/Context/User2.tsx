import { useContext } from "react";
import { UserContext } from "./UserContext";
export const User2 = () => {
  const UserContex = useContext(UserContext);
  const handleLogin = () => {
    UserContex.setUser({ name: "Rabiul", email: "rabiul@123" });
  };

  const handleLogout = () => {
    UserContex.setUser(null);
  };

  return (
    <div>
      <button className="btn" onClick={handleLogin}>
        Login
      </button>
      <button className="btn" onClick={handleLogout}>
        Logout
      </button>
      <div>User name is {UserContex.user?.name} </div>
      <div>User email is {UserContex.user?.email} </div>
    </div>
  );
};

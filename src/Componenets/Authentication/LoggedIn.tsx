import { useState } from "react";

export const LoggedIn = () => {
  const [isLoggedIn, setLoggedIn] = useState(false);

  const handlelogin = () => {
    setLoggedIn(true);
  };

  const handlelogout = () => {
    setLoggedIn(false);
  };

  return (
    <div>
      <button className="btn" onClick={handlelogin}>
        Login
      </button>
      <button className="btn" onClick={handlelogout}>
        Logout
      </button>
      <div>User is {isLoggedIn ? "logged in" : "logged out"}</div>
    </div>
  );
};

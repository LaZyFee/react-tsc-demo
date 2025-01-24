import { useState } from "react";

type AuthUser = {
  name: string;
  email: string;
};

export const User = () => {
  //   const [user, setUser] = useState<AuthUser | null>(null);
  const [user, setUser] = useState<AuthUser>({} as AuthUser);

  const handleLogin = () => {
    setUser({
      name: "Rabiul",
      email: "rabiul@123",
    });
  };

  //   const handleLogout = () => {
  //     setUser(null);
  //   };

  return (
    <div>
      <button className="btn" onClick={handleLogin}>
        Login
      </button>
      {/* <button className="btn" onClick={handleLogout}>
        Logout
      </button> */}
      {user && (
        <>
          <div>User name is {user.name}</div>
          <div>User email is {user.email}</div>
        </>
      )}
    </div>
  );
};

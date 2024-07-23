import React from "react";
import UserContext from "./UserContext";

export const UserProvider = UserContext.Provider;


const UserContextProvider = ({ children }) => {
  const [user, setUser] = React.useState(null);

  return <UserProvider value={{ user, setUser }}>{children}</UserProvider>;
};

export default UserContextProvider;

import React, { useEffect, useState } from "react";
import { app } from "./config.js";

export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
  // const [currentUser, setCurrentUser] = useState(null);
  const [currentUser, setCurrentUser] = useState([]);
  // const [pending, setPending] = useState(true);
  const [pending, setPending] = useState(false);

  // useEffect(() => {
  //   app.auth().onAuthStateChanged((user) => {
  //     console.log(user);
  //     setCurrentUser(user);
  //     setPending(false);
  //   });
  // }, []);

  if (pending) {
    return <>Loading...</>;
  }

  return (
    <AuthContext.Provider
      value={{
        currentUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

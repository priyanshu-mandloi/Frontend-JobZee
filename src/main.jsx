import React, { createContext, useState, useEffect } from "react";
import App from "./App.jsx";
import ReactDOM from "react-dom/client";

export const Context = createContext({
  // isAuthorized: false,
  user: {},
  // isLogged: false,
});

const AppWrapper = () => {
  const [isAuthorized, setIsAuthorized] = useState(
    localStorage.getItem("isAuthorized") === "true"
  );
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("user")) || {}
  );

  // useEffect(() => {
  //   localStorage.setItem("isAuthorized", isAuthorized);
  // }, [isAuthorized]);

  // useEffect(() => {
  //   localStorage.setItem("user", JSON.stringify(user));
  // }, [user]);

  return (
    <Context.Provider
      value={{
        isAuthorized,
        setIsAuthorized,
        user,
        setUser,
      }}
    >
      <App />
    </Context.Provider>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AppWrapper />
  </React.StrictMode>
);

import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { createContext } from "react";
const Context = createContext({ isAuthorized: false });

const AppWrapper = () => {
  const [isAuthorized, SetisAuthorized] = useState(false);
  const [user, Setuser] = useState({});

  return (
    <Context.Provider value={{ isAuthorized, SetisAuthorized, user, Setuser }}>
      <App />
    </Context.Provider>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AppWrapper />
  </React.StrictMode>
);

export default Context;

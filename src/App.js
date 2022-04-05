import React from "react";
import LoginButton from "./components/LoginButton";
import LogOutButton from "./components/LogOutButton";

const App = () => {
  return (
    <div className="container">
      <LoginButton />
      <LogOutButton />
    </div>
  );
};

export default App;

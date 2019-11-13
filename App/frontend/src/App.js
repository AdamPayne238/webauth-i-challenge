import React from 'react';
import './App.css';

import UserData from "../src/Components/users/UserData";
import Login from "../src/Components/forms/Login";
import Register from "../src/Components/forms/Register";

function App() {
  return (
    <div className="App">
      <h1>Welcome Frontend Application!</h1>
      <UserData />
      <Login />
      <Register />
    </div>
  );
}

export default App;

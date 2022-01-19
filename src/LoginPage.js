import React, { useState, useEffect } from "react";
import "./login.css";

const Login = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    console.log("componentDidMount");
  });

  function validateForm() {
    return name.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <div className="ParentDiv">
      <div className="ImgChildDiv"></div>
      <div className="FormChildDiv">
       <div className="LoginForm">
       <form onSubmit={handleSubmit} className="InputGroup">
        <h2 className="FormHeading">TSK Login</h2>
        {/* below input for name of the user */}
        <input
          type="text"
          name="name"
          placeholder="Name"
          className="InputField"
          value={name}
          onChange={e => setName(e.target.value)}
          required
        />
        {/* Below input tag for user Password */}
        <input
          type="password"
          name="password"
          placeholder="Password"
          className="InputField"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
        />
        {/* Login action Button */}
        <button type="submit" disabled={!validateForm()} className="LoginBtn">
          Login
        </button>
      </form>

       </div>
      </div>
    </div>
  );
};

export default Login;

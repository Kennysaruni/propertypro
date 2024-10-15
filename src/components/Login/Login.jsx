import React, { useState, useEffect } from "react";
import "./Login.css";
import API_BASE_URL from "../../utilities/env";
import { useNavigate } from "react-router";
import { getJSONPayloadFromJwt, jwtLoginHandler } from "../../utilities/auth";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);

  const navigate = useNavigate();

  function loginSuccessCallback(token) {
    const userParams = getJSONPayloadFromJwt(token);
    if ("owner_id" in userParams) {
      navigate("/dashboard");
    } else if ("tenant_id" in userParams) {
      navigate("/tenant");
    }
  }

  async function loginFailureCallback(responsePromise) {
    const response = await responsePromise.json();
    setErrors(response.errors);
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const loginRequestBody = {username,password}
    jwtLoginHandler(loginRequestBody, `${API_BASE_URL}/login`,loginSuccessCallback, loginFailureCallback)
  }
  return (
    <div className="form-container">
      <h1 className="login-title">Log in</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">
          {" "}
          Username
          <input
            className="input-block"
            id="username"
            type="text"
            placeholder="Enter username"
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <label htmlFor="password">
          {" "}
          Password
          <input
            className="input-block"
            id="password"
            type="password"
            placeholder="Enter password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <button className="submit" type="submit">
          Log in
        </button>
      </form>
    </div>
  );
}

export default Login;

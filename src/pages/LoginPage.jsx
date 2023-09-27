import React, { useContext, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import { Service } from "../http/service";

export default function LoginPage() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const location = useLocation()

  console.log(location);

  const { setIsAuth } = useContext(UserContext);

  const submitHandle = (e) => {
    e.preventDefault();
    Service.userLogin(formData)
      .then((data) => {
        localStorage.setItem("token", data.token);
        setIsAuth(true);
      })
      .catch((e) => console.log(e));
  };

  return (
    <div className="loginPage">
      <div className="loginContent">
        <form onSubmit={submitHandle}>
          <input
            type="email"
            placeholder="Enter Email"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            required
          />
          <input
            type="password"
            placeholder="Enter Password"
            value={formData.password}
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
            required
          />
          <input type="submit" value={"SignIn"} />
        </form>
        <p>
          You don't have some account?
          <NavLink to={"/register"}>Sign Up</NavLink>
        </p>
      </div>
    </div>
  );
}

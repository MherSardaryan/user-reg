import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import { Service } from "../http/service";

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });


  const { setIsAuth } = useContext(UserContext);

  const submitHandle = (e) => {
    e.preventDefault();
    Service.userRegister(formData)
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
          <NavLink to={"/login"}>Sign In</NavLink>
        </p>
      </div>
    </div>
  );
}

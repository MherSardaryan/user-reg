import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { UserContext } from "../context/UserContext";

export default function HomePage() {

  const { setIsAuth } = useContext(UserContext)

  return (
    <div className="homepage">
      <button
        className="logout"
        onClick={() => {
          localStorage.removeItem("token");
          setIsAuth(false)
        }}
      >
        <img
          src="data:image/png;base64,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"
          alt=""
        />
      </button>
      <h1>Welcome to my site</h1>
      <h2>
        Here you can create your own ToDo{" "}
        <NavLink style={{ textDecoration: "none", color: "#fff" }} to="/todo">
          {"-->"}
        </NavLink>
      </h2>
    </div>
  );
}

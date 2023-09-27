import React, { useContext } from "react";
import { Route, Routes } from "react-router";
import { UserContext } from "../context/UserContext";
import { authRoutes, publicRoutes } from "./routes";

export default function Routing() {
  const { isAuth } = useContext(UserContext);

  if (localStorage.getItem("token") || isAuth) {
    return (
      <Routes>
        {authRoutes.map((route) => (
          <Route path={route.path} element={route.element} key={route.path} />
        ))}
      </Routes>
    );
  }

  return (
    <Routes>
      {publicRoutes.map((route) => (
        <Route path={route.path} element={route.element} key={route.path} />
      ))}
    </Routes>
  );
}

import React, { useEffect, useState } from "react";
import { UserContext } from "./UserContext";

export default function UserProvider({ children }) {
  const [isAuth, setIsAuth] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token')
    if(token) {
        setIsAuth(true)
    }
  },[])
  
  return (
    <UserContext.Provider value={{ isAuth, setIsAuth,  }}>
      {children}
    </UserContext.Provider>
  );
}

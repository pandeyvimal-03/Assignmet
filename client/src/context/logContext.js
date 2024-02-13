import React, { createContext, useState } from "react";

const LogContext = createContext();

export const LogProvider = ({ children }) => {
  const [logedIn, setLogedIn] = useState(false);
  const [countOrder, setCountOrder] = useState(0);

  return (
    <LogContext.Provider value={{ logedIn, setLogedIn, countOrder, setCountOrder }}>
      {children}
    </LogContext.Provider>
  );
};

export default LogContext;
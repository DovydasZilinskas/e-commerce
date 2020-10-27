import React, { useState, createContext } from "react";

export const LocationContext = createContext();

export const LocationProvider = ({ children }) => {
  const [state, setState] = useState("");
  return (
    <LocationContext.Provider value={{ state, setState }}>
      {children}
    </LocationContext.Provider>
  );
};

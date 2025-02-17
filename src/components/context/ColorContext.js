import React, { createContext, useState, useContext } from "react";

const ColorContext = createContext();

export const ColorContextProvider = ({ children }) => {
  const [color, setColor] = useState("#d4af37"); // Default gold color

  return (
    <ColorContext.Provider value={{ color, setColor }}>
      {children}
    </ColorContext.Provider>
  );
};

// Custom hook for easy access
export const useColorContext = () => useContext(ColorContext);

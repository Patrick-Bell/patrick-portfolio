import React, { createContext, useState, useMemo, useContext, useEffect } from "react";
import { createTheme, ThemeProvider, CssBaseline } from "@mui/material";

const ThemeContext = createContext();

export const ThemeContextProvider = ({ children }) => {

  const [mode, setMode] = useState('dark')

  
  // Memoize theme creation to avoid unnecessary recalculations
  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          ...(mode === "dark"
            ? {
                primary: {
                  main: "#d4af37", //90caf9
                },
                background: {
                  default: "#121212", // Dark background
                  paper: "#1e1e20",
                },
                text: { primary: '#fff' }, // Ensure text color is readable
              }
            : {
                primary: {
                  main: "#d4af37", //1976d2
                },
                background: {
                  default: "#ffffff", // Light background
                  paper: "#f5f5f5",
                },
                text: { primary: '#000' }, // Ensure text color is readable
              }),
        },
      }),
    [mode]
  );

  return (
    <ThemeContext.Provider value={{ mode }}>
      <ThemeProvider theme={theme}>
        {/* Ensure global background styles are applied */}
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};

// Hook to consume the ThemeContext
export const useThemeContext = () => useContext(ThemeContext);

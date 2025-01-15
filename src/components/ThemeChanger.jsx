import React, { createContext, useState, useContext } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const colors = ["#FF5733", "#33FF57", "#3357FF", "#F333FF", "#FFC300", "#FF5733"];
  const [theme, setTheme] = useState(colors[0]);

  const changeTheme = () => {
    setTheme((prevTheme) => {
      const currentIndex = colors.indexOf(prevTheme);
      return colors[(currentIndex + 1) % colors.length];
    });
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme: changeTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

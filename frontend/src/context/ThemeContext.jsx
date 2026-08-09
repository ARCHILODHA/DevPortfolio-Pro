import { createContext, useState } from "react";

export const ThemeContext = createContext();

export default function ThemeProvider({ children }) {

  const [darkMode, setDarkMode] = useState(true);

 const toggleTheme = () => {
  console.log("Current:", darkMode);
  setDarkMode(!darkMode);
};

  return (
    <ThemeContext.Provider value={{ darkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
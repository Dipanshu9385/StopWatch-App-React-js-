// ThemeContext.js
import React, { createContext, useState } from 'react';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [backgroundColor, setBackgroundColor] = useState('white'); // Default color

  const changeBackgroundColor = (color) => {
    setBackgroundColor(color);
  };

  return (
    <ThemeContext.Provider value={{ backgroundColor, changeBackgroundColor }}>
      {children}
    </ThemeContext.Provider>
  );
};


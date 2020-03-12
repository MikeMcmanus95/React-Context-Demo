import React from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

const ThemeToggle = () => {
  return (
    <ThemeContext.Consumer>
      {value => {
        const { toggleTheme } = value;
        return <button onClick={toggleTheme}>Change Theme</button>;
      }}
    </ThemeContext.Consumer>
  );
};

export default ThemeToggle;

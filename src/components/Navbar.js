import React from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import { AuthContext } from '../contexts/AuthContext';

const Navbar = () => {
  return (
    <AuthContext.Consumer>
      {({ isAuthenticated, toggleAuth }) => (
        <ThemeContext.Consumer>
          {({ isLightTheme, light, dark }) => {
            const theme = isLightTheme ? light : dark;
            return (
              <nav style={{ background: theme.ui, color: theme.mainColor }}>
                <h1>Context App</h1>
                <div>{isAuthenticated ? 'Logged in' : 'Logged out'}</div>
                <ul>
                  <li>Home</li>
                  <li>About</li>
                  <li>Contact</li>
                </ul>
              </nav>
            );
          }}
        </ThemeContext.Consumer>
      )}
    </AuthContext.Consumer>
  );
};

export default Navbar;

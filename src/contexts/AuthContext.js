import React, { useState, createContext } from 'react';

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const toggleAuth = () => {
    setIsAuthenticated(!isAuthenticated);
  };
  return (
    <AuthContext.Provider value={{ isAuthenticated, toggleAuth: toggleAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;

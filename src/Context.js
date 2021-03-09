import React, { useState, createContext } from 'react';

export const Context = createContext();

const Provider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(() => {
    return sessionStorage.getItem('authToken');
  });
  const value  = {
    isAuth,
    activateAuth: (token) => {
      sessionStorage.setItem('authToken', token);
      setIsAuth(true)
    }
  };

  return (
    <Context.Provider value={value}>
      {children}
    </Context.Provider>
  )
};

export default {
  Provider,
  Consumer: Context.Consumer
};

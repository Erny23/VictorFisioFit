import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const AuthContext = createContext();
const URI = 'http://localhost:3000/';

export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [user, setUser] = useState(null);

    useEffect(() => {

      const checkAuth = async () => {
        const isLoggedIn = localStorage.getItem('isAuthenticated');
        if(isLoggedIn) {
          try {
              const res = await axios.get(`${URI}test`);
              setIsAuthenticated(res.data.success);
              setUser(res.data.name);
          } catch (err) {
              console.error(err);
          }
        }
      };

      checkAuth();

    }, []);

    const login = async (email, password, callback) => {
        try {
          const res = await axios.post(`${URI}login`, { email, password });
          setIsAuthenticated(res.data.success);
          setUser(res.data.name);
          localStorage.setItem('isAuthenticated', isAuthenticated ? 'true' : 'false');
          callback(res.data.name);
          if(res.data!='' && res.data.success == true){
            console.log('Acceso concedido por authProvider')
          }
        } catch (err) {
          callback(null);
          console.error('Acceso negado por authProvider debido a: ', err);
        }
    };

    const logout = () => {
        setIsAuthenticated(false);
        setUser(null);
        localStorage.removeItem('isAuthenticated');
    };

    const test = async () => {
        try {
          const res = await axios.get(`${URI}test`);
          setIsAuthenticated(res.data.success);
          setUser(res.data.name);
          console.log(res.data);
        } catch (err) {
          console.error(err);
        }
    };

    /*useEffect(() => {
        test();
    }, []);*/

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
};
import { useState, useContext, createContext} from 'react';

const FAKE_USERS = [
  { 
    id: 1, 
    user: 'admin', 
    password: '1234', 
    rol: 'admin',
    name: 'Admin'
  },
  { 
    id: 2, 
    user: 'jose', 
    password: '1234', 
    rol: 'usuario',
    name: 'jose'
  }
];

const AuthContext = createContext('');

export const AuthProvider = ({ children }) => {  
    const [user, setUser] = useState(null);
  
    const login = (userName, password) => {
    
    const userLogin = FAKE_USERS.find(
      u => u.user === userName && u.password === password
    );

    if (userLogin) {
      const token = `fake-token-${userName}`;
      localStorage.setItem('authToken', token);
      setUser(userLogin);
      return true;
    }
    return false;
  }  
                                       
  const logout = () => {
    localStorage.removeItem('authToken');
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout}}>
      {children}
    </AuthContext.Provider>
  ); 
}

export const useAuthContext = () => useContext(AuthContext);
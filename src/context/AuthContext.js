import React, {
    createContext,
    useContext,
    useEffect,
    useState,
  } from 'react';
  import { useNavigate } from 'react-router-dom';
  import * as sessions from '../api/sessions';
  
  const initialContext = {
    user: {
        player: {
            name: '',
            avatar: '',
            event: ''
        },
        status: ''
    },
    login: () => {},
    logout: () => {}
  }

  const getInitialState = () => {
    const initialAuthData = localStorage.getItem('authData') !== undefined ? JSON.parse(localStorage.getItem('authData')) : {};
    return initialAuthData;
  };

  const getInitialUsername = () => {
    const initialUsername = localStorage.getItem('playerUsername') !== undefined ? JSON.parse(localStorage.getItem('playerUsername')) : '';
    return initialUsername;
  }
  
  const AuthContext = createContext(initialContext);
  
  export function AuthProvider({ children }) {
   const [authData, setAuthData] = useState(getInitialState)
   const [username, setUsername] = useState(getInitialUsername)
   
   const navigate = useNavigate();

    useEffect(() => {
        localStorage.setItem('authData', JSON.stringify(authData))
        localStorage.setItem('playerUsername', JSON.stringify(username))

    }, [authData, username ]);



    function login(data) {
     // setLoading(true);
       setUsername(data.username)

       sessions.login(data)
        .then(data => {
          setAuthData(data)
          navigate('games');
        })
        .catch(error => console.log(error))
       // .finally(() => setLoading(false));
    }
  
    function logout(data) {
      sessions.logout(data)
      .then(() => { 
        setAuthData({})
        setUsername('')
      });
    }
  

    return (
      <AuthContext.Provider value={{ authData, login, logout, username }}>
        {children}
      </AuthContext.Provider>
    );
  }

  export default function useAuth() {
    return useContext(AuthContext);
  }
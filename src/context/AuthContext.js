import React, {
    createContext,
    useContext,
    useEffect,
    useState,
  } from 'react';
  import { useNavigate } from 'react-router-dom';
  import * as sessions from '../api/sessions';
  
  // const initialContext = {
  //   user: {
  //       player: {
  //           name: '',
  //           avatar: '',
  //           event: ''
  //       },
  //       status: ''
  //   },
  //   login: () => {},
  //   logout: () => {}
  // }
  

  const getInitialState = () => {
    const initialAuthData = localStorage.getItem('authData') !== undefined ? JSON.parse(localStorage.getItem('authData')) : {};
    return initialAuthData;
  };

  const getInitialUsername = () => {
    const initialUsername = localStorage.getItem('playerUsername') !== undefined ? JSON.parse(localStorage.getItem('playerUsername')) : '';
    return initialUsername;
  }
  
  //const AuthContext = createContext(initialContext);
  const AuthContext = createContext({});

  export function AuthProvider({ children }) {
   const [authData, setAuthData] = useState(getInitialState);
   const [username, setUsername] = useState(getInitialUsername);
   const [error, setError] = useState({});
   const [loading, setLoading] = useState(false);

   
   const navigate = useNavigate();

    useEffect(() => {
        localStorage.setItem('authData', JSON.stringify(authData))
        localStorage.setItem('playerUsername', JSON.stringify(username))

    }, [authData, username ]);



    function login(data) {
       setLoading(true);
       setUsername(data.username)

       sessions.login(data)
        .then(data => {
          setAuthData(data)
          setError({})
          navigate('games');
        })
        .catch(error => 
          setError(error)
        )
       .finally(() => setLoading(false));
    }
  
    function logout(data) {
      setLoading(true);
      sessions.logout(data)
      .then(() => { 
        setAuthData({})
        setUsername('')
        setError({})
      })
      .catch(error => 
        setError(error)
      )
     .finally(() => setLoading(false));
    }
  

    return (
      <AuthContext.Provider value={{ authData, login, logout, username, error, loading }}>
        {children}
      </AuthContext.Provider>
    );
  }

  export default function useAuth() {
    return useContext(AuthContext);
  }
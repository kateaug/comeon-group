import React from 'react';
import { Navigate, useLocation } from 'react-router-dom'
import  useAuth  from '../context/AuthContext';

function RequireAuth({ children }){

    const location = useLocation();
    const { authData } = useAuth()
 
    if (authData.status !== 'success') {
        return <Navigate to='/login' state={{ from: location.pathname }} />
    }
    return children
}

export default RequireAuth;
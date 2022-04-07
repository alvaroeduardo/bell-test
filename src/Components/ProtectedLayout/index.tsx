import React from 'react';
import { useAuth } from "../../Context/AuthProvider/useAuth"
import LoginPage from '../../Views/Login';

export const ProtectedLayout = ({children}: {children: JSX.Element}) => {
    const auth = useAuth();

    if(!auth.email){
        return(
            <LoginPage/>
        )
    }

    return children;
}
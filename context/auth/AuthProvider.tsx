import { FC, useReducer, useEffect } from 'react';
import { AuthContext, authReducer } from './';
import axios from 'axios';

import { Usuario } from '../../interfaces/Usuario';

export interface AuthState {
    isLoggedIn: boolean;
    user?: Usuario;
}


const AUTH_INITIAL_STATE: AuthState = {
    isLoggedIn: false,
    user: undefined,
}


export const AuthProvider:FC = ({ children }) => {

    const [state, dispatch] = useReducer( authReducer, AUTH_INITIAL_STATE );


    const loginUser = async( email: string, password: string ): Promise<boolean> => {

        try {
            const { data } = await axios.post('api/auth/login', { email, password });
            const { user } = data;
            dispatch({ type: '[Auth] - Login', payload: user });
            return true;
        } catch (error) {
            return false;
        }

    }




    return (
        <AuthContext.Provider value={{
            ...state,

            // Methods
            loginUser,

        }}>
            { children }
        </AuthContext.Provider>
    )
};
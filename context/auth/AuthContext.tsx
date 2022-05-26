import { createContext } from "react";
import { Usuario } from "../../interfaces/Usuario";

interface contextProps {
    isLoggedIn: boolean;
    User?:Usuario;
    loginUser: (email: string, password: string) => Promise<boolean>;
}

export const AuthContext = createContext({} as contextProps);
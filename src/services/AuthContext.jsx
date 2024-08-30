import { TOKEN_KEY, isAuthenticated, getToken, login, logout } from "./Auth";
import { createContext, useContext, useEffect, useMemo, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [token, setToken] = useState(isAuthenticated());

    const contextValue = useMemo(
        () => ({
            token,
            setToken
        }),
        [token]
    )

    useEffect(() => {
        if (token) {
            login(token);
        } else {
            logout();
        }
    }, [token])

    return(<AuthContext.Provider value={{token, setToken}}>{children}</AuthContext.Provider>)
}
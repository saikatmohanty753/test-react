import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export const useAuth = () => {
    return useContext(AuthContext)
}

export const AuthProvider = ({ children }) => {
    const [isLoggedIn, setLoggedIn] = useState(false);

    useEffect(() => {
        const token = sessionStorage.getItem('token');
        setLoggedIn(!!token);
    }, []);

    return (
        <AuthProvider value={{ isLoggedIn }}>
            {children}
        </AuthProvider>
    );
}
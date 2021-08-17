import React, { useState } from 'react';

type ContextObject = {
    token: string,
    isLoggedIn: boolean,
    login: (token: any) => void,
    logout: () => void,    
};

const AuthContext = React.createContext<ContextObject>({
    token: '',
    isLoggedIn: false,
    login: (token) => {},
    logout: () => {},
});

export const AuthContextProvider: React.FC = (props) => {

    const initialToken = localStorage.getItem('token');

    const [token, setToken] = useState<any>(initialToken);
    const userIsLoggedIn = !!token;

    const loginHandler = (token: any) => {
        setToken(token);
        localStorage.setItem('token', token);
    };

    const logoutHandler = () => {
        setToken('');
        localStorage.removeItem('token');
    };

    const contextValue: ContextObject = {
        token: token,
        isLoggedIn: userIsLoggedIn,
        login: loginHandler,
        logout: logoutHandler,
    };

    return (
        <AuthContext.Provider value={contextValue}>
            {props.children}
        </AuthContext.Provider>
    );
};

export default AuthContext;
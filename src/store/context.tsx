import React, { useState } from 'react';

type ContextObject = {
    token: string,
    isLoggedIn: boolean,
    login: (token: any) => void,
};

const AuthContext = React.createContext<ContextObject>({
    token: '',
    isLoggedIn: false,
    login: (token) => {},
});

export const AuthContextProvider: React.FC = (props) => {

    const [token, setToken] = useState<any>(null);
    const userIsLoggedIn = !!token;

    const loginHandler = (token: any) => {
        setToken(token);
    };

    const contextValue: ContextObject = {
        token: token,
        isLoggedIn: userIsLoggedIn,
        login: loginHandler,
    };

    return (
        <AuthContext.Provider value={contextValue}>
            {props.children}
        </AuthContext.Provider>
    );
};

export default AuthContext;
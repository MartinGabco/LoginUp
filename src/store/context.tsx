import React, { useState } from 'react';

type ContextObject = {
    token: string,
    isLoggedIn: boolean,
    login: (token: any) => void,
    logout: () => void, 
    messageRegistration: string[], 
    addErrorMessageRegistration: (messageRegistration: string[]) => void,  
    messageLogin: string[], 
    addErrorMessageLogin: (messageLogin: string[]) => void,
};

const AuthContext = React.createContext<ContextObject>({
    token: '',
    isLoggedIn: false,
    login: (token) => {},
    logout: () => {},
    messageRegistration: [],
    addErrorMessageRegistration: () => {},
    messageLogin: [],
    addErrorMessageLogin: () => {},
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

    const [messageLogin, setMessageLogin] = useState<string[]>([]);

    const addErrorMessageLogin = (messageLogin: string[]) => {
        setMessageLogin(messageLogin);
    };

    const [messageRegistration, setMessageRegistration] = useState<string[]>([]);

    const addErrorMessageRegistration = (messageRegistration: string[]) => {
        setMessageRegistration(messageRegistration);
    };

    const contextValue: ContextObject = {
        token: token,
        isLoggedIn: userIsLoggedIn,
        login: loginHandler,
        logout: logoutHandler,
        messageLogin: messageLogin,
        addErrorMessageLogin: addErrorMessageLogin,
        messageRegistration: messageRegistration,
        addErrorMessageRegistration: addErrorMessageRegistration,        
    };

    return (
        <AuthContext.Provider value={contextValue}>
            {props.children}
        </AuthContext.Provider>
    );
};

export default AuthContext;
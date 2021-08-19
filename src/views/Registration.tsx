import React, { useRef, useContext, useState } from 'react'

//imports
import { Link, useHistory } from 'react-router-dom';

//context
import AuthContext from '../store/context';

//styles
import '../styles/Registration.css';

const Registration: React.FC = () => {

    //calling useContext
    const authCtx = useContext(AuthContext);

    //Hooks
    const history = useHistory();

    //useRef - gain data from inputs
    const emailInputRef = useRef<HTMLInputElement>(null);
    const passwordInputRef = useRef<HTMLInputElement>(null);

    const submitHandler = (event: React.FormEvent) => {
        event.preventDefault();

        const receivedEmail = emailInputRef.current?.value;
        const receivedPassword = passwordInputRef.current?.value;

        authCtx.loadingRegistrationHandler(true);

        fetch('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBjA92JwCN3PE6mLVmDrQGfEOGWPoJj0a4',
        {
            method: 'POST',
            body: JSON.stringify({
                email: receivedEmail,
                password: receivedPassword,
                returnSecureToken: true
            }),
            headers: {
                'Content-Type':'application/json',
            },
        }).then((res) => {
            authCtx.loadingRegistrationHandler(false);
            if(res.ok) {
                history.replace('/login')
            } else {
                return res.json().then((data) => {
                    if (data && data.error && data.error.message) {
                        let errorMessage = data.error.message;
                        authCtx.addErrorMessageRegistration(errorMessage);
                        if (data.error.message.trim() === 'EMAIL_EXISTS') {
                        setTimeout(() => {
                                history.replace('/login')
                            }, 1000);
                        }
                    }
                });
            }
        });
    }

    return (
        <div className="registration">
            <p className="rtitle">Registration</p>
            <Link to="/login">I am registered, I want to login</Link>
            <section className="form-place">
                <form onSubmit={submitHandler}>
                    <div className="email">
                        <label 
                            htmlFor="email" 
                            className="email-title"
                        >
                            Your Email
                        </label>
                        <input 
                            type="email" 
                            id="email" 
                            className="input" 
                            ref={emailInputRef}
                            required
                        />
                    </div>
                    <div className="password">
                        <label 
                            htmlFor="password" 
                            className="password-title"
                        >
                            Your password
                        </label>
                        <input 
                            type="password" 
                            id="password" 
                            className="input" 
                            ref={passwordInputRef}
                            required
                        />
                    </div>
                     <p className="error-message">{authCtx.messageRegistration}</p>
                    {!authCtx.isLoadingRegistration && <button 
                        type="submit" 
                        className="submit-button"
                    >
                        Register me, please!
                    </button>}
                    {authCtx.isLoadingRegistration && <p className="loading"></p>}
                </form>
            </section>
        </div>
    )
}
 
export default Registration;
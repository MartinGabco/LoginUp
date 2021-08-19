import React, { useRef, useContext } from 'react';
import { useHistory } from 'react-router-dom';

//styles
import '../styles/Registration.css';

//context
import AuthContext from '../store/context';

const Login: React.FC = () => {

    //useRef - gain data from inputs
    const emailInputRef = useRef<HTMLInputElement>(null);
    const passwordInputRef = useRef<HTMLInputElement>(null);

    //calling useContext
    const authCtx = useContext(AuthContext);

    //useHistory() hook
    const history = useHistory();

    const submitHandler = (event: React.FormEvent) => {
        event.preventDefault();

        authCtx.loadingLoginHandler(true);

        const receivedEmail = emailInputRef.current?.value;
        const receivedPassword = passwordInputRef.current?.value;

        fetch('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBjA92JwCN3PE6mLVmDrQGfEOGWPoJj0a4',
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
            authCtx.loadingLoginHandler(false);
            if(res.ok) {
                return res.json().then((data) => {
                    authCtx.login(data.idToken);
                    history.replace('/home');
                });
            } else {
                return res.json().then((data) => {
                    if (data && data.error && data.error.message) {
                       let errorMessage = data.error.message;
                       authCtx.addErrorMessageLogin(errorMessage);
                    }
                });
            }
        });
    }    

    return ( 
        <div className="login">
            <p className="ltitle">Login</p>
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
                    <p>{authCtx.messageLogin}</p> 
                    {!authCtx.isLoadingLogin && <button 
                        type="submit" 
                        className="submit-button"
                    >
                        LOG IN!
                    </button>}
                    {authCtx.isLoadingLogin && <p className="loading"></p>}
                </form>
            </section>
        </div>
    );
}
 
export default Login;
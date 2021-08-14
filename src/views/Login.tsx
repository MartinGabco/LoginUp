import React from 'react';

//imports
import { Link } from 'react-router-dom';

//styles
import '../styles/Login.css';
//styles
import '../styles/Registration.css';

const Login: React.FC = () => {
    return ( 
        <div className="login">
            <p className="ltitle">Login</p>
            <section className="form-place">
                <form>
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
                            required
                        />
                    </div>
                    <button 
                        type="submit" 
                        className="submit-button"
                    >
                        LOG IN!
                    </button>
                </form>
            </section>
        </div>
    );
}
 
export default Login;
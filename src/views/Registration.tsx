import React, { useRef } from 'react'

//imports
import { Link } from 'react-router-dom';

//styles
import '../styles/Registration.css';

const Registration: React.FC = () => {

    //useRef - gain data from inputs
    const emailInputRef = useRef<HTMLInputElement>(null);
    const passwordInputRef = useRef<HTMLInputElement>(null);

    const submitHandler = (event: React.FormEvent) => {
        event.preventDefault();

        const receivedEmail = emailInputRef.current?.value;
        const receivedPassword = passwordInputRef.current?.value;

        console.log(receivedEmail);
        console.log(receivedPassword);
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
                    <button 
                        type="submit" 
                        className="submit-button"
                    >
                        Register me, please!
                    </button>
                </form>
            </section>
        </div>
    )
}
 
export default Registration;
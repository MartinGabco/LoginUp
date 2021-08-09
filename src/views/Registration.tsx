import React from 'react'

//imports
import { Link } from 'react-router-dom';

//styles
import '../styles/Registration.css';

const Registration: React.FC = () => ( 
        <div className="registration">
            <p className="rtitle">Registration</p>
            <Link to="/login">I am registered, I want to login</Link>
            <section className="form-place">
                <form>
                    <div className="email">
                        <label htmlFor="email" className="email-title">Your Email</label>
                        <input type="email" id="email" className="input" required/>
                    </div>
                    <div className="password">
                        <label htmlFor="password" className="password-title">Your password</label>
                        <input type="password" id="password" className="input" required/>
                    </div>
                    <button type="button" className="submit-button">Register me, please!</button>
                </form>
            </section>
        </div>
    )
 
export default Registration;
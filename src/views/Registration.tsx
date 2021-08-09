import React from 'react'

//imports
import { Link } from 'react-router-dom';

//styles
import '../styles/Registration.css';

const Registration: React.FC = () => {
    return ( 
        <div className="registration">
            <p className="rtitle">Registration</p>
            <Link to="/login">I am registered, I want to login</Link>
        </div>
    );
}
 
export default Registration;
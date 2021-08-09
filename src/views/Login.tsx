import React from 'react';

//imports
import { Link } from 'react-router-dom';

//styles
import '../styles/Login.css';

const Login: React.FC = () => {
    return ( 
        <div className="login">
            <p className="ltitle">Login</p>
            <Link to="/home">Log in</Link>
        </div>
    );
}
 
export default Login;
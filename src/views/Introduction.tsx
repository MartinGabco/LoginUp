import React from 'react'

//routes
import { Link } from 'react-router-dom';

//styles
import '../styles/Introduction.css';

const Introduction: React.FC = () => {
    return (
        <div className="introduction">
            <p className="title">Introduction</p>
                <Link to="/registration" className="intro-link">
                    <p className="link-text">I want to start</p>
                </Link>
        </div>
    );
}
 
export default Introduction;
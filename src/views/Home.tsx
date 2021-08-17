import React from 'react';

//imports
import { Link } from 'react-router-dom';

//styles
import '../styles/Home.css';

const Home: React.FC = () => {
    return ( 
        <div className="home">
            <nav className="navigation">
                <button className="logout">Logout</button>
            </nav>
            <p className="htitle">Welcome home!</p>
        </div>
    );
}
 
export default Home;
import React from 'react';

//imports
import { Link } from 'react-router-dom';

//styles
import '../styles/Home.css';

const Home: React.FC = () => {
    return ( 
        <div className="home">
            <p className="htitle">Welcome home!</p>
            <Link to="/">Log out</Link>
        </div>
    );
}
 
export default Home;
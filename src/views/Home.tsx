import React, { useContext } from 'react';
import AuthContext from '../store/context';

//styles
import '../styles/Home.css';

const Home: React.FC = () => {

    const authCtx = useContext(AuthContext);

    const logoutHandler = () => {
        authCtx.logout();
    }

    return ( 
        <div className="home">
            <nav className="navigation">
                <button className="logout" onClick={logoutHandler}>Logout</button>
            </nav>
            <p className="htitle">Welcome home!</p>
        </div>
    );
}
 
export default Home;
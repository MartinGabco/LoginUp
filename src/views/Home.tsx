import React, { useContext } from 'react';
import AuthContext from '../store/context';

//imports
import { useHistory } from 'react-router-dom';

//styles
import '../styles/Home.css';

const Home: React.FC = () => {

    const authCtx = useContext(AuthContext);

    //useHistory() hook
    const history = useHistory();

    const logoutHandler = () => {
        authCtx.logout();
        history.replace('/login');
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
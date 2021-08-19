import React, { useContext } from 'react';
import './App.css';
import { Route, Redirect } from 'react-router-dom';

//views
import Introduction from './views/Introduction';
import Registration from './views/Registration';
import Login from './views/Login';
import Home from './views/Home';

//Context
import AuthContext from './store/context';

function App() {

  const authCtx = useContext(AuthContext);

  return (
    <div className="App">
      <header className="App-header">
          <Route path='/' component={Introduction} exact/>
          <Route path='/registration' component={Registration} />
          <Route path='/login' component={Login} />
          {authCtx.isLoggedIn && <Route path='/home' component={Home} />}
          {!authCtx.isLoggedIn && <Redirect to='/' />}
      </header>
    </div>
  );
}

export default App;

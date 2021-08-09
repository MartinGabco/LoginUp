import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';

//views
import Introduction from './views/Introduction';
import Registration from './views/Registration';
import Login from './views/Login';
import Home from './views/Home';

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <Route path='/' component={Introduction} exact/>
          <Route path='/registration' component={Registration} />
          <Route path='/login' component={Login} />
          <Route path='/home' component={Home} />
      </header>
    </div>
  );
}

export default App;

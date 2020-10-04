import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Login from './components/Login/Login';
import Routes from './components/Routes';
import Sidebar from './components/Sidebar/Sidebar';
import { useStateValue } from './context/StateProvider';

function App() {
  const [{ user }] = useStateValue();

  return (
    // css classname uses BEM naming convention
    <div className="app">
      <Router>
        {!user ? <Login/> : (
          <>
            <Header />
            <div className="app__body">
              <Sidebar />
              <Routes />
            </div>
          </>
        )}

      </Router>
    </div>
  );
}

export default App;

/* https://youtu.be/Oo4ziTddOxs?t=5233 */
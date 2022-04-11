import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import Login from './pages/LogIn';
// import SignIn from './pages/SignIn';
import Home from './pages/Home';

ReactDOM.render(
  <React.StrictMode>
    {/* <Login />  */}
    {/* <SignIn /> */}
    <Home />
  </React.StrictMode>,
  document.getElementById('root')
);


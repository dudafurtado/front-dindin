import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import Login from './pages/LogIn';
import SignIn from './pages/SignIn';

ReactDOM.render(
  <React.StrictMode>
    {/* <Login />  */}
    <SignIn />
  </React.StrictMode>,
  document.getElementById('root')
);


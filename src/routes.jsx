import Home from '../src/pages/Home';
import SignIn from '../src/pages/SignIn';
import LogIn from '../src/pages/LogIn';

import { getItem } from './utils/storage'

import { Routes, Route, Outlet, Navigate } from 'react-router-dom';

function ProtectedRoutes ({ redirectTo }) {
    const isAuthenticated = getItem('token');
    return isAuthenticated ? <Outlet /> : <Navigate to={redirectTo} />
}

function MainRoutes() {
    return (
        <Routes>
          <Route element={<LogIn />}>
            <Route path='/' element={<LogIn />} />
            <Route path='/login' element={<LogIn />} />
          </Route>

          <Route path='/cadastrar' element={<SignIn />} />

          <Route element={<ProtectedRoutes redirectTo='/login' />}>
            <Route path='/home' element={<Home />} />
          </Route>
        </Routes>
    );
}

export default MainRoutes;
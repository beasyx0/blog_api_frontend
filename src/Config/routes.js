import React from 'react';
import HomePage from '../Pages/HomePage';
import Login from '../Pages/Login';
import Dashboard from '../Pages/Dashboard/index';
import PageNotFound from '../Pages/PageNotFound';
import Logout from '../Pages/Logout';


const routes = [
    {
        path: '/',
        component: HomePage,
    },
    {
        path:'/login',
        component: Login,
    },
    {
        path:'/logout',
        component: Logout,
    },
    {
        path:'/dashboard',
        component: Dashboard,
    },
    {
        path:'/*',
        component: PageNotFound,
    },
]

export default routes;

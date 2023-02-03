import Home from '../components/Home';
import React from 'react';
import { Navigate, RouteObject } from 'react-router-dom';
import About from '../components/About';
import Counter from '../components/Counter';
import Message from '../components/About/Message';
import User from '../components/About/User';

const routes: RouteObject[] = [
  {
    path: '/about',
    element: <About />,
  },
  {
    path: '/home',
    element: <Home />,
    children: [
      {
        path: 'message',
        element: <Message />,
      },
      {
        path: 'user',
        element: <User />,
      },
    ],
  },
  {
    path: '/counter',
    element: <Counter />,
  },
  {
    path: '/',
    element: <Navigate replace={false} to={'/home'} />,
  },
];
export default routes;

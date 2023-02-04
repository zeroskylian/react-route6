import Home from '../pages/Home';
import React from 'react';
import { Navigate, RouteObject } from 'react-router-dom';
import About from '../pages/About';
import Counter from '../pages/Counter';
import Message from '../pages/Home/Message';
import User from '../pages/Home/User';
import MessageDetail, {
  MessageDetailUseSearch,
  MessageDetailUseState,
} from '../pages/Home/MessageDetail';

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
        children: [
          {
            path: 'detailParams/:id/:content',
            element: <MessageDetail />,
          },
          {
            path: 'detailSearch',
            element: <MessageDetailUseSearch />,
          },
          {
            path: 'detailState',
            element: <MessageDetailUseState />,
          },
        ],
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

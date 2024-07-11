import React from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { Menu } from '@src/features/menu';

import { Tictac } from './pages/tictactoe';
import { MobxGame } from './pages/mobxgame';

const root = createRoot(document.querySelector('#root') as Element);

root.render(
  <RouterProvider
    router={createBrowserRouter([
      {
        path: '/',
        element: <Menu />,
      },
      {
        path: '/tictac',
        element: <Tictac />,
      },
      {
        path: '/mobxgame',
        element: <MobxGame />,
      },
    ])}
  />,
);

import React from 'react';
import { createRoot } from 'react-dom/client';

import { Tictac } from './pages/Tictac';

import './index.scss';

const root = createRoot(document.querySelector('#root') as Element);

root.render(<Tictac />);

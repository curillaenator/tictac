import React from 'react';
import { createRoot } from 'react-dom/client';

import { Tictac } from './pages/Tictac';

const root = createRoot(document.querySelector('#root') as Element);

root.render(<Tictac />);

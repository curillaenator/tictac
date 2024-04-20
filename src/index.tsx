import React from 'react';
import { createRoot } from 'react-dom/client';

import './index.css';

const root = createRoot(document.querySelector('#root') as Element);

root.render(<div>hi</div>);

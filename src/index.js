import React from 'react';
import { createRoot } from 'react-dom/client';

import { App } from "./App";


import registerServiceWorker from './registerServiceWorker';

const container = document.getElementById('root');

// Create a root using React 18+ API (still current in React 19)
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
//ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
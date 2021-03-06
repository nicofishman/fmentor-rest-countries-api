import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import ThemeProvider from './Context/ThemeContext';
import App from './App';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <ThemeProvider>
        <App />
    </ThemeProvider>
);

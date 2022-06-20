import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import App from './Pages/App';
import Country from './Pages/Country';
import './index.css';
import ThemeProvider from './Context/ThemeContext';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <ThemeProvider>
        <BrowserRouter>
            <Routes>
                <Route element={<App />} path="/"/>
                <Route element={<Country />} path="/:id" />
            </Routes>
        </BrowserRouter>
    </ThemeProvider>
);

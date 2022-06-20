import React, { FC } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './Components/Navbar';
import { useThemeContext } from './Context/ThemeContext';
import Country from './Pages/Country';
import Index from './Pages/Index';

interface AppProps {

};

const App: FC<AppProps> = () => {
    const { isDark } = useThemeContext();

    return (
        <div className={`${isDark ? 'dark' : ''}`}>
            <Navbar />
            <BrowserRouter>
                <Routes>
                    <Route element={<Index />} path="/"/>
                    <Route element={<Country />} path="/:id" />
                </Routes>
            </BrowserRouter>
        </div>
    );
};

export default App;

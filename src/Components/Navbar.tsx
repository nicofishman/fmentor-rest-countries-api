import React, { FC } from 'react';
import { Moon } from 'react-feather';

import { useThemeContext } from '../Context/ThemeContext';

const Navbar: FC = () => {
    const { isDark, setIsDark } = useThemeContext();

    return (
        <div className='flex flex-row justify-between items-center px-2 w-full h-16 dark:bg-dark-blue sm:px-40'>
            <span className='font-sans text-xl font-extrabold  text-dark-blue-text dark:text-white'>Where in the world?</span>
            <div className='flex flex-row gap-2 items-center'>
                {
                    isDark
                        ? <>
                            <Moon className='text-very-light-gray cursor-pointer' fill='hsl(0, 0%, 98%)' onClick={() => setIsDark(false)} />
                            <span className='text-xs font-normal text-very-light-gray select-none'>Dark Mode</span>
                        </>
                        : <>
                            <Moon className='text-dark-blue-text cursor-pointer' onClick={() => setIsDark(true)} />
                            <span className='text-xs font-normal text-dark-blue-text select-none'>Light Mode</span>
                        </>
                }

            </div>
        </div>
    );
};

export default Navbar;

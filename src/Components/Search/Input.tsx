import React, { FC } from 'react';
import { Search } from 'react-feather';

import { useThemeContext } from '../../Context/ThemeContext';
const Input: FC = () => {
    const { inputValue, setInputValue } = useThemeContext();

    const handleInput = (ev: React.ChangeEvent<HTMLInputElement>) => {
        if (ev) setInputValue(ev?.currentTarget.value);
    };

    return (
        <div className="relative px-4 mt-1 -ml-3 w-96 rounded-md ">
            <div className="flex absolute inset-y-0 left-8 z-10 items-center pointer-events-none">
                <Search className="text-dark-blue-text dark:text-white sm:text-sm" height={16} width={16} />
            </div>
            <input className="block py-3 px-12 w-full h-12 text-sm  text-dark-blue-text dark:text-white dark:bg-dark-blue rounded-md border-gray-300 focus:outline-none shadow-lg drop-shadow-sm sm:text-sm" placeholder='Search for a country...' value={inputValue} onChange={handleInput}/>
        </div>
    );
};

export default Input;

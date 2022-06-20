import React, { FC, useState } from 'react';
import { ChevronDown, ChevronUp } from 'react-feather';

import { useThemeContext } from '../../Context/ThemeContext';

const Dropdown: FC = () => {
    const [isOpen, setIsOpen] = useState<Boolean>(false);
    const { dropdownValue, setDropdownValue } = useThemeContext();

    const handleSetRegion = (ev: React.MouseEvent<HTMLLIElement>) => {
        setDropdownValue(ev.currentTarget.innerText);
        setIsOpen(false);
    };

    const liClasses = 'select-none py-1 dark:text-white dark:bg-dark-blue px-4 cursor-pointer hover:bg-gray-200';

    return (
        <div className='flex relative flex-col'>
            <button className='flex flex-row justify-between items-center py-2 px-4 w-52 h-12 text-xs dark:text-white dark:bg-dark-blue rounded-md focus:outline-none shadow-lg drop-shadow-sm' onClick={() => setIsOpen(!isOpen)}>
                {dropdownValue || 'Select a region'}
                {
                    isOpen
                        ? <ChevronUp className='w-4 h-4'/>
                        : <ChevronDown className='w-4 h-4'/>
                }
            </button>
            { isOpen &&
            <ul className='absolute top-10 z-10 mt-3 w-52 text-xs bg-white rounded-lg shadow-lg drop-shadow-sm'>
                <li className={liClasses} onClick={(ev) => handleSetRegion(ev)}>Africa</li>
                <li className={liClasses} onClick={(ev) => handleSetRegion(ev)}>America</li>
                <li className={liClasses} onClick={(ev) => handleSetRegion(ev)}>Asia</li>
                <li className={liClasses} onClick={(ev) => handleSetRegion(ev)}>Europe</li>
                <li className={liClasses} onClick={(ev) => handleSetRegion(ev)}>Oceania</li>
            </ul>
            }
        </div>
    );
};

export default Dropdown;

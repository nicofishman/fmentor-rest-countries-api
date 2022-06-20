import React, { FC } from 'react';

import Dropdown from './Search/Dropdown';
import Input from './Search/Input';
const Search: FC = () => {
    return (
        <div className='flex flex-col flex-wrap gap-10 justify-center  items-start px-2 pt-5 w-full dark:bg-dark-blue-back sm:flex-row sm:justify-between sm:px-40'>
            <Input />
            <Dropdown />
        </div>
    );
};

export default Search;

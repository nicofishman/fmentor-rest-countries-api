import React, { FC } from 'react';

import { Root2 } from '../Helpers/countries';

import CountryItem from './CountryItem';

interface CountryListProps {
    countries: Root2[];
};

const CountryList: FC<CountryListProps> = ({ countries }) => {
    return (
        <div className="grid grid-cols-1 justify-items-center py-10 px-2 w-full dark:bg-dark-blue-back sm:grid-cols-4 sm:px-40">
            {countries.map((country, index) => (
                <CountryItem key={index} country={country} />
            ))}
        </div>
    );
};

export default CountryList;

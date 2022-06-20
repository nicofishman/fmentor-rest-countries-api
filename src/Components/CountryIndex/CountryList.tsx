import React, { FC } from 'react';
import { Link } from 'react-router-dom';

import { Root2 } from '../../Helpers/countries';

import CountryItem from './CountryItem';

interface CountryListProps {
    countries: Root2[];
};

const CountryList: FC<CountryListProps> = ({ countries }) => {
    return (
        <div className="grid grid-cols-1 justify-items-center py-10 px-2 dark:bg-dark-blue-back sm:grid-cols-4 sm:px-40">
            {countries.map((country, index) => (
                <Link key={index} to={`/${country.cca3}`} >
                    <CountryItem country={country} />
                </Link>
            ))}
        </div>
    );
};

export default CountryList;

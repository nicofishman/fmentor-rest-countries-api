import React, { FC } from 'react';

import { Root2 } from '../../Helpers/countries';

interface CountryItemProps {
    country: Root2;
};

const CountryItem: FC<CountryItemProps> = ({ country }) => {
    return (
        <div className='flex flex-col mt-5 w-full h-auto rounded-xl shadow-lg drop-shadow-2xl sm:w-64'>
            <div className="flex-1">
                <img className='aspect-video w-full rounded-t-md' src={country.flags.png} />
            </div>
            <div className="flex-1 p-4 dark:text-white dark:bg-dark-blue">
                <div>
                    <span className='font-bold'>{country.name.common}</span>
                </div>
                <div>
                    <div>
                        <span className='text-xxs font-bold'>Population: </span>
                        <span className='text-xxs'>{country.population.toLocaleString()}</span>
                    </div>
                    <div>
                        <span className='text-xxs font-bold'>Region: </span>
                        <span className='text-xxs'>{country.region}</span>
                    </div>
                    <div>
                        <span className='text-xxs font-bold'>Capital: </span>
                        <span className='text-xxs'>{country.capital}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CountryItem;

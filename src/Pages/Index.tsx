import React, { FC, useEffect } from 'react';

import CountryList from '../Components/CountryIndex/CountryList';
import Search from '../Components/Search';
import { useThemeContext } from '../Context/ThemeContext';
import { getCountries } from '../Helpers/CountriesFetch';
import { Root2 } from '../Helpers/countries';

const Index: FC = () => {
    const { countries, setCountries } = useThemeContext();

    useEffect(() => {
        (async () => {
            const countries: Root2[] = await getCountries();

            setCountries(countries);
        })();
    }, []);

    return (
        <div className={'w-full h-screen bg-white dark:bg-dark-blue-back'}>
            <Search />
            { countries.length &&
            <CountryList countries={countries} />
            }
        </div>
    );
};

export default Index;

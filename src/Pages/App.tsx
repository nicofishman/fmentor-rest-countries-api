import React, { FC, useEffect } from 'react';

import CountryList from '../Components/CountryList';
import Navbar from '../Components/Navbar';
import Search from '../Components/Search';
import { useThemeContext } from '../Context/ThemeContext';
import { getCountries } from '../Helpers/CountriesFetch';

import { Root2 } from './../Helpers/countries';

const App: FC = () => {
    const { isDark, countries, setCountries } = useThemeContext();

    useEffect(() => {
        (async () => {
            const countries: Root2[] = await getCountries();

            setCountries(countries);
        })();
    }, []);

    return (
        <div className={`w-full h-screen bg-white  ${isDark ? 'dark bg-dark-blue-back' : ''}`}>
            <Navbar />
            <Search />
            { countries.length &&
            <CountryList countries={countries} />
            }
        </div>
    );
};

export default App;

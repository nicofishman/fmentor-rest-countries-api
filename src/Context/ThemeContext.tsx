import React, { createContext, FC, useState, Dispatch, SetStateAction, PropsWithChildren, useEffect, useContext } from 'react';

import { Root2 } from '../Helpers/countries';
import { getCountries, getCountriesByName, getCountriesByRegion } from '../Helpers/CountriesFetch';

export interface ThemeContextType {
    isDark: Boolean,
    countries: Root2[],
    inputValue: string,
    dropdownValue: string,
    setIsDark: Dispatch<SetStateAction<Boolean>>,
    setCountries: Dispatch<SetStateAction<Root2[]>>,
    setInputValue: Dispatch<SetStateAction<string>>,
    setDropdownValue: Dispatch<SetStateAction<string>>,
}

export const ThemeContext = createContext<ThemeContextType | null >(null);

const ThemeProvider: FC<PropsWithChildren> = ({ children }) => {
    const [isDark, setIsDark] = useState<Boolean>(false);
    const [countries, setCountries] = useState<Root2[]>([]);
    const [inputValue, setInputValue] = useState<string>('');
    const [dropdownValue, setDropdownValue] = useState<string>('');

    useEffect(() => {
        const localStorageTheme = localStorage.getItem('isDark');

        if (localStorageTheme) {
            setIsDark(localStorageTheme === 'true');
        } else {
            setIsDark(false);
        }
    }, []);

    useEffect(() => {
        (async () => {
            if (inputValue !== '') {
                const filteredCountries = await getCountriesByName(inputValue);

                setCountries(filteredCountries);
                setDropdownValue('');
            } else if (dropdownValue !== '') {
                const filteredCountries = await getCountriesByRegion(dropdownValue);

                setCountries(filteredCountries);
            } else {
                const countries: Root2[] = await getCountries();

                setCountries(countries);
            }
            // if (dropdownValue !== '') {
            //     const countries: Root2[] = await getCountries();

            //     setCountries(countries);
            // } else {
            //     if (inputValue === '') {
            //         const countries: Root2[] = await getCountries();

            //         setCountries(countries);
            //     } else {
            //         const countries: Root2[] = await getCountriesByName(inputValue);

            //         setCountries(countries);
            //     }
            // }
        })();
    }, [inputValue, dropdownValue]);

    const value: ThemeContextType = {
        isDark,
        countries,
        inputValue,
        dropdownValue,
        setIsDark,
        setCountries,
        setInputValue,
        setDropdownValue
    };

    return (
        <ThemeContext.Provider value={value}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;

export function useThemeContext () {
    const context = useContext<ThemeContextType>(ThemeContext as any);

    if (!context) {
        throw new Error('useAlertsContext must be used within a AlertsProvider');
    }

    return context;
}

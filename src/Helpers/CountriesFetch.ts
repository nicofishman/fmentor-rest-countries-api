import axios from 'axios';

import { Root2 } from './countries.d';

export const getCountries = async (): Promise<Root2[]> => {
    const response = await axios.get('https://restcountries.com/v3.1/all');

    return response.data;
};

export const getCountriesByName = async (name: string): Promise<Root2[]> => {
    const response = await axios.get(`https://restcountries.com/v3.1/name/${name}`);

    return response.data;
};

export const getCountriesByRegion = async (region: string): Promise<Root2[]> => {
    const response = await axios.get(`https://restcountries.com/v3.1/region/${region}`);

    return response.data;
};

export const getCountryById = async (id: string): Promise<Root2[]> => {
    const response = await axios.get(`https://restcountries.com/v3.1/alpha/${id}`);

    return response.data;
};

import { FC, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import Back from '../Components/SingleCountry/Back';
import { Root2 } from '../Helpers/countries';
import { getCountryById } from '../Helpers/CountriesFetch';

const Country: FC = () => {
    const { id } = useParams();
    const [country, setCountry] = useState<Root2 | undefined>(undefined);
    const [nativeNames, setNativeNames] = useState<{language: string, name: {official: string, common: string}}[]>([]);
    const [currencies, setCurrencies] = useState<string>('');
    const [languages, setLanguages] = useState<string[]>([]);

    useEffect(() => {
        (async () => {
            if (!id) return;
            const country: Root2[] = await getCountryById(id);

            setCountry(country[0]);
        })();
    }, []);

    useEffect(() => {
        if (!country) return;
        document.title = `${country.name.common}`;
        // @ts-ignore
        setLanguages(Object.entries(country.languages as any).map(([_key, value]) => value));
        // @ts-ignore
        setCurrencies(Object.entries(country.currencies as any).map(([_key, value]) => value.name).join(', '));
        if (!country.name.nativeName) return;
        setNativeNames(Object.entries(country.name.nativeName).map(([key, value]) => ({ language: key, name: value })));
    }, [country]);

    if (!country) return null;

    return (
        <div className='px-2 pt-5 w-full h-screen dark:text-white bg-white dark:bg-dark-blue-back sm:px-40'>
            { country &&
            <>

                <Back />
                <div className='flex flex-col justify-center pt-5 w-full sm:flex-row'>
                    <div className='flex flex-1 px-10 sm:pl-10 sm:w-1/2'>
                        <img alt={country.name.common} className='aspect-video my-5 w-full h-auto shadow-lg drop-shadow-xl' src={country.flags.svg} />
                    </div>
                    <div className='flex flex-col flex-1 justify-center pl-10'>
                        <h1 className='mb-5 text-2xl font-bold'>{country.name.official}</h1>
                        <div className='grid grid-cols-1 sm:grid-cols-2'>
                            <div>
                                {nativeNames &&
                                <>
                                    <span className='text-xs font-bold'>Native Name:</span>
                                    <span className='text-xxs'>{nativeNames.map((nativeName, index) => {
                                        return (
                                            <ul key={index}>{languages[index]} - {nativeName.name.official}</ul>
                                        );
                                    })}</span>
                                </>
                                }
                            </div>
                            <div>
                                <span className='text-xs font-bold'>Population: </span>
                                <span className='text-xxs'>{country.population.toLocaleString()}</span>
                            </div>
                            <div>
                                <span className='text-xs font-bold'>Region: </span>
                                <span className='text-xxs'>{country.region}</span>
                            </div>
                            <div>
                                <span className='text-xs font-bold'>Sub Region: </span>
                                <span className='text-xxs'>{country.subregion}</span>
                            </div>
                            <div>
                                <span className='text-xs font-bold'>Capital: </span>
                                <span className='text-xxs'>{country.capital}</span>
                            </div>
                            <div>
                                <span className='text-xs font-bold'>Top Level Domain: </span>
                                <span className='text-xxs'>{country.tld}</span>
                            </div>
                            <div>
                                <span className='text-xs font-bold'>Currencies: </span>
                                <span className='text-xxs'>{currencies}</span>
                            </div>
                            <div>
                                <span className='text-xs font-bold'>Languages: </span>
                                <span className='text-xxs'>{languages.join(', ')}</span>
                            </div>
                        </div>
                        {
                            country.borders &&
                        <div className='flex flex-col justify-start pt-10 sm:flex-row sm:items-center'>
                            <span className='mr-5 text-xs font-bold whitespace-nowrap'>Border Countries: </span>
                            <div className='flex flex-wrap justify-start items-center pt-5'>
                                {country.borders.map((border, index) => {
                                    return <span key={index} className='flex flex-row justify-center items-center mt-2 mr-5 w-16 h-8 text-xxs bg-white dark:bg-dark-blue rounded-md shadow-very-light-gray drop-shadow-custom sm:w-32'>{border}</span>;
                                })}
                            </div>
                        </div>
                        }
                    </div>
                </div>

            </>
            }
        </div>
    );
};

export default Country;

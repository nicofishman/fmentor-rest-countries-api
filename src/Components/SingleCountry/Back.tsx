import React, { FC } from 'react';
import { ArrowLeft } from 'react-feather';
import { Link } from 'react-router-dom';

interface BackProps {

};

const Back: FC<BackProps> = () => {
    return (
        <div className="px-10 sm:py-10">
            <Link to='/'>
                <div className='flex flex-row justify-center items-center w-32 h-8 bg-white dark:bg-dark-blue rounded-md shadow-very-light-gray drop-shadow-custom'>
                    <ArrowLeft className='mr-2' height={18} width={18}/>
                    <span className='text-sm'>Back</span>
                </div>
            </Link>
        </div>
    );
};

export default Back;

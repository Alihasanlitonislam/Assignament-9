import React from 'react';
import { MapPinIcon, CurrencyDollarIcon } from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom';
const Featured = ({compani}) => {
    const { name, job, logoLink, location, salary,remote, time,id } = compani;
    return (
        <div className='border p-10 rounded-xl'>
        <img src={logoLink} alt="" className='w-[200px] h-[150px]' />
        <h1 className='py-1 text-3xl font-medium'>{job}</h1>
        <p className='text-2xl font-medium pb-1'>{name}</p>
        <div className='flex gap-3 items-center py-2'>
            <h1 className='py-2 px-4 rounded-md border border-blue-400'>{remote}</h1>
            <h1 className='py-2 px-4 rounded-md border border-blue-400'>{time}</h1>
        </div>
        <div className='flex gap-10 py-2'>
            <div className='flex gap-2'>
                <MapPinIcon className='w-6 h-6 text-blue-500' />
                <h1>{location}</h1>
            </div>
            <div className='flex gap-2'>
                <CurrencyDollarIcon className='w-6 h-6 text-blue-500' />
                <h1>Salary: {salary}</h1>
            </div>
        </div>
        <Link to={`../jobdetels/${id}`}>
            <button className='btn mt-7'>View Details</button>
        </Link>
    </div>
    );
};

export default Featured;
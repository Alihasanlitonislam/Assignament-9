import React from 'react';
import { Link } from 'react-router-dom';
import { MapPinIcon, CurrencyDollarIcon } from '@heroicons/react/24/solid'

const JobCart = ({ data }) => {
    const { logoLink, title, name, remote, time, salary, location, id } = data;
    return (
        <div className='container-css '>
            
            <div className='flex items-center justify-between p-4 border rounded-md shadow-md hover:bg-slate-200'>
                <div className='flex items-center  gap-6'>
                    <div>
                        <img src={logoLink} alt=""  className='w-[150px] rounded-md'/>
                    </div>
                    <div>
                        <h1 className='text-2xl font-medium'>{title}</h1>
                        <h1 className='text-xl'>{name}</h1>
                        <div className='flex items-center gap-3 py-2'>
                            <h1 className='border-2 py-2 px-6 text-xl border-blue-500 rounded-md'>{remote}</h1>
                            <h1 className='border-2 py-2 px-6 text-xl border-blue-500 rounded-md'>{time}</h1>
                        </div>
                        <div className='flex items-center gap-3 pt-2'>
                            <div className='flex gap-2'>
                                <MapPinIcon className='w-6 h-6 text-slate-500' />
                                <h1>{location}</h1>
                            </div>
                            <div className='flex gap-2'>
                                <CurrencyDollarIcon className='w-6 h-6 text-slate-500' />
                                <h1>{salary}</h1>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <Link to={`../jobdetels/${id}`} className='btn'>View Details</Link>
                </div>
            </div>
        </div>
    );
};

export default JobCart;
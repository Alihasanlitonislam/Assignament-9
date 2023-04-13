import React from 'react';

const Catagori = ({catagoris}) => {
    const {name, job, available, logo} = catagoris;
    return (
        <div className='border rounded-lg transition duration-200 transform hover:translate-y-3 w-[100%] p-5 bg-[#FAF8FF]'>
            <div className='border md:w-[45%] p-5 rounded-md shadow-xl bg-[#EFECFF]'>
                <img src={logo} alt="" className='w-[65px] h-65px md:w-[50px] md:h-[50px]'/>
            </div>
            <h1 className='my-4 text-2xl font-medium'>{name}</h1>
            <p className='text-xl font-semibold'>{job}</p>
            <p className='text-xl pt-2'>{available}</p>
        </div>
    );
};

export default Catagori;
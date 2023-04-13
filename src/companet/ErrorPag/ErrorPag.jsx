import React from 'react';
import { Link, useRouteError } from 'react-router-dom';

const ErrorPag = () => {
  const { error, status } = useRouteError()
  return (
    <section className='flex items-center h-screen p-16 bg-gray-100 text-gray-900'>
      <div className='container flex flex-col items-center justify-center px-5 mx-auto my-8'>
        <img src="https://miro.medium.com/v2/resize:fit:1050/0*gBlxAl3vWqjjuoqj" alt="" className='w-[300px] rounded-xl shadow-2xl' />
        <div className='max-w-md text-center'>
          <h2 className='mb-8 font-extrabold text-9xl text-blue-500'>
            <span className='sr-only'>Error</span>
            {status || 404}
          </h2>
          <p className='text-2xl font-semibold md:text-3xl text-transparent bg-gradient-to-r from-[#7F8FFE] to-[#9774FF] bg-clip-text mb-8'>
            {error?.message}
          </p>
          <Link to='/' className='btn'>
            Back to home page
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ErrorPag;
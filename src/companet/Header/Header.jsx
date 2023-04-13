import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div className=' bg-slate-200'>
            <div className='container-css py-4 md:flex justify-between items-center'>
                <div>
                    <h1 className='text-3xl font-medium'>ApplicationCv</h1>
                </div>
                <div>
                    <nav className='flex gap-4 text-xl text-black'>
                        <NavLink to='../' className={({ isActive }) => isActive ? 'text-blue-600' : ''}>Home</NavLink>
                        <NavLink to='statistics' className={({ isActive }) => isActive ? 'text-blue-600' : ''}>Statistics</NavLink>
                        <NavLink to='apply' className={({ isActive }) => isActive ? 'text-blue-600' : ''}>Applied Jobs</NavLink>
                        <NavLink to='blog' className={({ isActive }) => isActive ? 'text-blue-600' : ''}>Blog</NavLink>
                    </nav>
                </div>
                <div>
                    <Link to='/'>
                        <button className='btn'>Star Applying</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Header;
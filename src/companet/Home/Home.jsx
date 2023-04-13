import React, { useEffect, useState } from 'react';
import Catagori from '../Catagori/Catagori';
import { Link, useLoaderData } from 'react-router-dom';
import Featured from '../Featured/Featured';
const Home = () => {
    const [catagori, setCatagori] = useState([])
    const [open, setOpen] = useState(false)
    // console.log(open)
    useEffect(() => {
        fetch('Category.json')
            .then(rep => rep.json())
            .then(data => setCatagori(data))
    }, [])
    const companis = useLoaderData()
    return (
        <>
            <div className='bg-slate-200'>
                <div className='md:flex justify-between ite container-css py-10'>
                    <div className='md:w-[50%]'>
                        <h1 className='text-5xl font-bold py-4'>One Step <br /> Closer To Your <br /> <span className='text-transparent bg-gradient-to-r from-[#7F8FFE] to-[#9774FF] bg-clip-text'>Dream Job</span> </h1>
                        <p className='mb-5'>Explore thousands of job opportunities with all the <br />information you need. Its your future. Come find it. Manage all <br /> your job application from start to finish.</p>
                        <Link to='apply'>
                            <button className='btn'>Get Started</button>
                        </Link>
                    </div>
                    <div className='pt-3 md:pt-0 md:w-[50%]'>
                        <img src="https://static.dw.com/image/61916091_605.jpg" alt="" className='rounded-md' />
                    </div>
                </div>
            </div>
            <div className='container-css my-7'>
                <div className='text-center py-7'>
                    <h1 className='text-[48px] font-medium text-[#1A1919]'>Job List</h1>
                    <p className='font-medium text-[16px]'>Explore thousands of job opportunities with all the information you need. Its your future</p>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-4 gap-6'>
                    {

                        catagori.map(catagoris => <Catagori
                            key={catagori.id}
                            catagoris={catagoris}
                        />)
                    }
                </div>
                <div className='mt-7'>
                    <div className='py-10 text-center'>
                        <h1 className='text-[48px] font-medium text-[#1A1919]'>Featured Jobs</h1>
                        <p className='font-medium text-[16px]'>Explore thousands of job opportunities with all the information you need. Its your future</p>
                    </div>
                    <div className='grid md:grid-cols-2 gap-4'>
                        {
                            companis &&
                            companis?.slice(0, open ? 6 : 4).map(compani => <Featured
                                key={compani.id}
                                compani={compani}
                            />)

                        }
                    </div>
                    <div onClick={() => setOpen(!open)} className='text-center mt-5 py-4'>
                        <button className='btn'>See All Jobs</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { addToDb } from '../../utilities/fakedb';
import { MapPinIcon, CurrencyDollarIcon, CalendarDaysIcon, PhoneIcon, EnvelopeIcon } from '@heroicons/react/24/solid'
const JobDetels = () => {
    const [singlesData, setSinglesData] = useState([])
    const daymanickID = useParams()
    useEffect(() => {
        fetch('/JobDaels.json')
            .then(rep => rep.json())
            .then(data => setSinglesData(data))
    }, [])

    const newSingleData = singlesData.find(single => single.id === daymanickID.id)
    const { id, jobDescription, education_requirements, jobResponsibilities, experience, salary, job, phone, email, location } = newSingleData || {};
    // console.log(newSingleData)
    const applyHandel = (newSingleData) => {
        addToDb(newSingleData)
    }
    return (
        <>
            <div className='bg-slate-200 text-center pt-5 pb-10'>
                <h1 className='text-3xl font-medium text-transparent bg-gradient-to-r from-[#495ff1] to-[#7a5bd8] bg-clip-text'>Application Job Description</h1>
            </div>
            <div className='container-css grid grid-cols-6 gap-4  py-10'>
                <div className='col-span-4 p-10'>

                    <h1 className='text-xl py-3'><span className='job-Details'>Job Description: </span>{jobDescription}</h1>
                    <h1 className='text-xl py-3'><span className='job-Details'>Job Responsibility: </span>{jobResponsibilities}</h1>
                    <h1 className='text-xl py-3'><span className='job-Details'>Educational Requirements: </span>{education_requirements}</h1>
                    <h1 className='text-xl pb-3'><span className='job-Details pb-3'>Experiences:</span><br />{experience}</h1>
                </div>
                <div className='col-span-2'>
                    <div className=' bg-[#F3F2FF] p-10 rounded-md shadow-md '>
                        <div className='pt-5 pb-14'>
                            <h1 className='text-3xl font-medium pb-4'>Job Details</h1>
                            <div className='flex items-center gap-3 border-t-2 border-blue-300 py-4'>
                                <MapPinIcon className='w-6 h-6 text-slate-500' />
                                <h1 className='text-xl font-medium pb-3'>Salary : {salary}</h1>
                            </div>
                            <div className='flex items-center gap-3'>
                                <CalendarDaysIcon className='w-6 h-6 text-slate-500' />
                                <h1 className='text-xl font-medium pb-3'>Job Title :{job}</h1>
                            </div>
                        </div>
                        <div className=' border-t-2 border-blue-300'>
                            <div className='flex items-center gap-3 pt-10 mb-3'>
                                <PhoneIcon className='w-6 h-6 text-slate-500' />
                                <h1 className='text-[18px] font-medium text-slate-400 '>Phone :{phone}</h1>
                            </div>
                            <div className='flex items-center gap-3 mb-3'>
                                <EnvelopeIcon className='w-6 h-6 text-slate-500' />
                                <h1 className='text-[18px] font-medium text-slate-400'>Email :{email}</h1>
                            </div>
                            <div className='flex items-center gap-3'>
                                <CurrencyDollarIcon className='w-6 h-6 text-slate-500' />
                                <h1 className='text-[18px] font-medium text-slate-400'>Address : {location}</h1>
                            </div>

                        </div>
                    </div>
                    <div onClick={() => applyHandel(id)} className=" pt-5">
                        <Link to='../apply'><button className='w-full btn'>Apply Now</button></Link>
                    </div>
                </div>
            </div>
        </>
    );
};
export default JobDetels;


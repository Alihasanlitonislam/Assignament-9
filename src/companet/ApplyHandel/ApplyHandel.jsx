import React, { useEffect, useState } from 'react';
import { getShoppingCart } from '../../utilities/fakedb';
import JobCart from '../JobCart/JobCart';

const ApplyHandel = () => {
    // use the local storage data and display 
    const [cart, setCart] = useState([])
    // localStorage to compaiend to jobdaels json file 
    const [localDB, setLocalDB] = useState([])
    // show remout and outsite button status
    const [remout, setRemout] = useState([])
    const [outsite, setOutsite] = useState([])
    useEffect(() => {
        // fetch('../../../public/JobDaels.json')
        fetch('JobDaels.json')
            .then(rep => rep.json())
            .then(data => setLocalDB(data))
    }, [])
    useEffect(() => {
        const getLocalDB = getShoppingCart()
        let saveData = [];
        for (const id in getLocalDB) {
            const newLocalData = localDB.find(data => data.id === id)
            if (newLocalData) {
                saveData.push(newLocalData)
            }
        }
        setCart(saveData)
    }, [localDB])
    // create in remout hendala
    const remoutHendala = (cart) => {
    }
    console.log(remout)
    const outsitetHendala = (cart) => {
        setOutsite(cart)
    }
    console.log(outsite)
    return (
        <div>
            <div className='bg-slate-200 text-center pt-5 pb-10'>
                <h1 className='text-3xl font-medium text-transparent bg-gradient-to-r from-[#495ff1] to-[#7a5bd8] bg-clip-text'>Application Job </h1>
            </div>
            <div className='container-css '>
                <div className='text-right flex justify-end gap-4 py-5'>
                    <button onClick={()=>remoutHendala(cart)} className='btn'>Show Remote Job</button>
                    <button onClick={()=>outsitetHendala(cart)} className='btn'>Show Outsite Job</button>
                </div>
            </div>
            {
                cart.map(data => <JobCart
                    key={data.id}
                    data={data}
                ></JobCart>)

            }
        </div>
    );
};

export default ApplyHandel;
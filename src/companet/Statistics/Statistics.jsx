import React from 'react';
import { RadialBarChart, RadialBar, Legend, Tooltip } from 'recharts'
const Statistics = () => {
    const data = [
        {
            "name": "40-60",
            "uv": 58.63,
            "pv": 55,
            "fill": "#8884d8"
        },
        {
            "name": "30-60",
            "uv": 55.0,
            "pv": 55,
            "fill": "#83a6ed"
        },
        {
            "name": "30-60",
            "uv": 58.00,
            "pv": 58,
            "fill": "#8dd1e1"
        },
        {
            "name": "35-60",
            "uv": 40.55,
            "pv": 60,
            "fill": "#82ca9d"
        },
        {
            "name": "40-60",
            "uv": 55.55,
            "pv": 60,
            "fill": "#a4de6c"
        },
        {
            "name": "60+",
            "uv": +60,
            "pv": 60,
            "fill": "#d0ed57"
        },
        {
            "name": "60+",
            "uv": 50,
            "pv": 60,
            "fill": "red"
        },
    ]
    return (
        <div>
            <div className='bg-slate-200 text-center pt-5 pb-10'>
                <h1 className='text-3xl font-medium text-transparent bg-gradient-to-r from-[#495ff1] to-[#7a5bd8] bg-clip-text'>All my exam numbers</h1>
            </div>
            <div className='py-10 container-css px-4 bg-gradient-to-r from-[#7F8FFE] to-[#9774FF] rounded-xl'>
                <div className='flex items-center justify-between py-4 px-6 bg-white rounded-xl text-xl font-medium text-blue-600'>
                    <img src="https://w7.pngwing.com/pngs/914/758/png-transparent-github-social-media-computer-icons-logo-android-github-logo-computer-wallpaper-banner-thumbnail.png" alt="" className='w-[50px] border' />
                    <h1>Assignament</h1>
                    <div>
                        <h1>Average Mark</h1>
                        <h1 className='text-right text-slate-400'>58.60</h1>
                    </div>
                </div>
                <div>
                    <div className='assignament'>
                        <h1>Assignament 1</h1>
                        <h1>55</h1>
                        <h1>60</h1>
                    </div>
                    <div className='assignament'>
                        <h1>Assignament 2</h1>
                        <h1>60</h1>
                        <h1>60</h1>
                    </div>
                    <div className='assignament'>
                        <h1>Assignament 3</h1>
                        <h1>60</h1>
                        <h1>60</h1>
                    </div>
                    <div className='assignament'>
                        <h1>Assignament 4</h1>
                        <h1>58</h1>
                        <h1>60</h1>
                    </div>
                    <div className='assignament'>
                        <h1>Assignament 5</h1>
                        <h1>58</h1>
                        <h1>60</h1>
                    </div>
                    <div className='assignament'>
                        <h1>Assignament 6</h1>
                        <h1>60</h1>
                        <h1>60</h1>
                    </div>
                    <div className='assignament'>
                        <h1>Assignament 7</h1>
                        <h1>60</h1>
                        <h1>60</h1>
                    </div>
                </div>
            </div>
            <RadialBarChart
                width={730}
                height={250}
                margin= "auto"
                innerRadius="10%"
                outerRadius="80%"
                data={data}
                startAngle={180}
                endAngle={0}
            >
                <RadialBar minAngle={15} label={{ fill: '#666', position: 'insideStart' }} background clockWise={true} dataKey='uv' />
                <Legend iconSize={10} width={120} height={140} layout='vertical' verticalAlign='middle' align="right" />
                <Tooltip />
            </RadialBarChart>
        </div>
    );
};

export default Statistics;
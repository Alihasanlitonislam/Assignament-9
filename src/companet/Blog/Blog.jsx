import React from 'react';

const Blog = () => {
    return (
        <div>
            <div className='bg-slate-200 text-center pt-5 pb-10'>
                <h1 className='text-3xl font-medium text-transparent bg-gradient-to-r from-[#495ff1] to-[#7a5bd8] bg-clip-text'>Four questions and answers</h1>
            </div>
            <div className='btn container-css'>
                <div className='p-4 bg-slate-200 text-black rounded-xl my-2'>
                    <h1 className='border-b-2 border-blue-300 py-1 text-3xl font-medium '>What is context api and usecontext?</h1>
                    <h1 className='text-xl pt-3'>Context API can solve many problems that modern applications face, related to state management, for example, props drilling. Many solutions can solve state management issues and props drilling, but they may increase your build size and compromise your app performance. Context API is a React built-in feature, so we don’t have to worry about performance overhead and library installing issues. </h1>
                </div>
                <div className='p-4 bg-slate-200 text-black rounded-xl my-2'>
                    <h1 className='border-b-2 border-blue-300 py-1 text-3xl font-medium'>What is conustom hooks ?</h1>
                    <h1 className='text-xl pt-3'>React Context is a great, builtin API for passing data from a parent component to any of its children. It’s designed to let you avoid having to use prop drilling and leaking implementation details through intermediary components. </h1>
                </div>
                <div className='p-4 bg-slate-200 text-black rounded-xl my-2'>
                    <h1 className='border-b-2 border-blue-300 py-1 text-3xl font-medium'>what is usememo and use in react?</h1>
                    <h1 className='text-xl pt-3'>useMemo in React is essential react hook for improving the performance and speed of your application by caching the output in the computer memory and returning it when the same input is given again.</h1>
                </div>
                <div className='p-4 bg-slate-200 text-black rounded-xl my-2'>
                    <h1 className='border-b-2 border-blue-300 py-1 text-3xl font-medium'>What is useRef and use in react?</h1>
                    <h1 className='text-xl pt-3'>One of the various hooks included in React is the useRef hook; it is used to reference an object inside a functional component and preserves the referenced object's state between re-renders. useRef has a property called "current" used to retrieve the value of the referenced object </h1>
                </div>
            </div>
        </div>
    );
};

export default Blog;




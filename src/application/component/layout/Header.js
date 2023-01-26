import React from 'react';

const header = () => {
    return (
        <>
            <div className='w-full bg-black text-white'>
                <div className='w-[1024px] flex justify-between items-center mx-auto h-[50px]'>
                    <div className=''>
                        <h1>Pro-Tags</h1>
                    </div>
                    <div className='flex gap-x-5'>
                        <span>header</span>
                        <span>header</span>
                        <span>header</span>
                    </div>
                </div>
            </div>

            <div
                id='subHeader'
                className='w-full bg-white border border-b-2'
            >
                <div className='w-[1024px] flex justify-between items-center mx-auto h-[50px]'>
                    <div className=''>
                        <h1>Pro-Tags</h1>
                    </div>
                    <div className='flex gap-x-5'>
                        <span>header</span>
                        <span>header</span>
                        <span>header</span>
                    </div>
                </div>
            </div>
        </>
    );
};

export default header;
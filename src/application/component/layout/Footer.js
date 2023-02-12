import React from 'react';

const Footer = () => {
    return (
        <div className="relative h-32 w-full bg-gradient-to-r from-slate-100 via-slate-50 to-slate-100 mt-20">
            <div className="absolute inset-x-0 bottom-0 h-16">
                <div className='flex flex-wrap justify-center w-full'>
                    Copyright © 2023 HighTool.
                </div>
            </div>
        </div>
    );
};

export default Footer;
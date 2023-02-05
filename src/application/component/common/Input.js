import React, { useEffect, useState } from 'react';
import { AiOutlineClear } from 'react-icons/ai';
import { RiSearch2Line } from 'react-icons/ri';
import { BiPaste } from 'react-icons/bi';

const Input = ({ value: customValue, placeholder: customPlaceholder, onChange, onClick, isRequesting }) => {
    const placeholder = customPlaceholder || '';
    const [value, setValue] = useState(customValue || '');
    const [loading, setLoading] = useState(isRequesting || false);

    useEffect(() => onChange && onChange(value), [value]);
    useEffect(() => setLoading(isRequesting), [isRequesting]);

    const handleSearch = () => onClick && onClick();

    const handlePaste = () => {
        navigator.clipboard.readText().then(
            cliptext => (setValue(cliptext)),
            err => console.log(err)
        );
    };

    const handleClear = () => setValue('');

    return (
        <div className='w-full lg:w-8/12 mx-auto m-5'>
            <div className='w-100 flex mx-5 lg:mx-0'>
                <button className='relative left-[30px]'>
                    {loading && <span className="flex items-center justify-center">
                        <span className="animate-ping absolute h-3 w-full rounded-full bg-sky-400 opacity-75"></span>
                        <span className="rounded-full h-3 w-3 bg-sky-500"></span>
                    </span>}

                    {!loading && <span>
                        <span className="h-3 w-3 flex items-center">
                            <RiSearch2Line />
                        </span>
                    </span>}
                </button>
                <input
                    type={'text'}
                    value={value}
                    onChange={(e) => {
                        setValue(e.target.value);
                    }}
                    onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
                    placeholder={placeholder}
                    className='rounded transition-all border w-full p-2 pl-[40px] outline-none bg-slate-100 focus:bg-white hover:bg-slate-50 focus:border-slate-800'
                />
            </div>

            <div className='w-100 flex mx-5 lg:mx-0 my-3 justify-center lg:justify-end gap-2'>
                <button onClick={() => handleSearch()} className='w-3/12 lg:w-2/12 transition-colors rounded border border-black bg-black text-white hover:bg-white hover:text-black p-1'>
                    <div className='flex justify-center items-center gap-1'>
                        <RiSearch2Line fontSize={13} /> search
                    </div>
                </button>

                <button onClick={() => handlePaste()} className='w-3/12 lg:w-2/12 transition-colors rounded border border-black bg-black text-white hover:bg-white hover:text-black p-1'>
                    <div className='flex justify-center items-center gap-1'>
                        <BiPaste fontSize={13} /> paste
                    </div>
                </button>

                <button onClick={() => handleClear()} className='w-3/12 lg:w-2/12 transition-colors rounded border border-black bg-black text-white hover:bg-white hover:text-black p-1'>
                    <div className='flex justify-center items-center gap-1'>
                        <AiOutlineClear fontSize={13} /> clear
                    </div>
                </button>
            </div>
        </div >
    );
};

export default Input;
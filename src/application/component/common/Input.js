import { useEffect, useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { RiSearch2Line } from 'react-icons/ri';
import { MdContentPaste } from 'react-icons/md';

const Input = ({ value: customValue, placeholder: customPlaceholder, onChange, onClick, isRequesting }) => {
    const placeholder = customPlaceholder || 'Search here';
    const [value, setValue] = useState(customValue || '');
    const [loading, setLoading] = useState(isRequesting || false);

    useEffect(() => onChange && onChange(value), [value]);
    useEffect(() => setLoading(isRequesting), [isRequesting]);

    const handleSearch = () => onClick && onClick();
    const handleClear = () => setValue('');
    const handlePaste = () => {
        navigator.clipboard.readText().then(
            clipText => (setValue(clipText)),
            err => console.log(err)
        );
    };

    return (
        <div className="relative rounded-md shadow-sm">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center p-5">
                <span className="text-gray-500 sm:text-sm">
                    {loading ? <span className="flex items-center justify-center">
                        <span className="animate-ping absolute h-4 w-4 rounded-full bg-sky-400 opacity-75"></span>
                        <span className="rounded-full h-3 w-3 bg-sky-500"></span>
                    </span> : <RiSearch2Line />}
                </span>
            </div>

            <input
                type="text"
                name="search"
                id="search"
                value={value}
                placeholder={placeholder}
                onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
                onChange={e => setValue(e.target.value)}
                className="block w-full rounded-md 
                            pr-20 pl-12 p-3
                           shadow-md
                           border
                           border-t 
                            sm:text-sm  
                            outline-none 
                            hover:bg-slate-50 
                            focus:bg-white 
                            focus:border-black 
                            transition-all"
            />

            <div className="absolute inset-y-0 right-0 flex items-center p-5 gap-3">
                <span className='cursor-pointer text-gray-500 hover:text-black' onClick={handlePaste}><MdContentPaste fontSize={13} /></span>
                <span className='cursor-pointer text-gray-500 hover:text-black' onClick={handleClear}><AiOutlineClose fontSize={13} /></span>
            </div>
        </div >
    );
};

export default Input;
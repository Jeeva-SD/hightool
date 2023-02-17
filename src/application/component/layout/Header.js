import { useMemo, useState } from 'react';
import { useRouter } from "next/router";
import { AiOutlineBars } from 'react-icons/ai';
import SideOver from '../layout/SideOver';
import { home, proTags, heads } from '../common/Navigation';

const header = () => {
    const { route, push } = useRouter();
    const [open, setOpen] = useState(false);

    const routes = useMemo(() => {
        if (route.includes('protags')) return proTags;
        else return home;
    }, [route]);

    const { mainHeadings, mainRoute = '/' } = useMemo(() => {
        const activeHeads = heads.filter(e => route.includes(e.name.toLowerCase().replace('/', ' ')));
        const { name, path } = activeHeads?.length > 0 ? activeHeads[0] : [];

        if (activeHeads?.length > 0 && activeHeads?.length === 1) return { mainHeadings: name, mainRoute: path };
        else return { mainHeadings: heads[0].name, mainRoute: heads[0].path };
    }, [route]);

    return (
        <>
            <div className='w-full bg-black text-white z-10 relative'>
                <div className='w-full lg:w-[1024px] flex justify-between items-center mx-auto h-[50px] lg:px-0 px-5'>
                    <div className='text-2xl font-bold cursor-pointer' onClick={() => push('/')}>
                        <h1>HighTool</h1>
                    </div>
                    <div className='flex gap-x-5 text-[12px]'>
                        <span>Welcome to ProTags!</span>
                    </div>
                </div>
            </div>

            <div
                id='subHeader'
                className='w-full bg-[#ffffffec] border-b transition-all sticky top-0 z-10'
            >
                <div className='w-[1024px] hidden lg:flex justify-between items-center mx-auto h-[50px]'>
                    <div className='text-[18px] font-semibold cursor-pointer' onClick={() => push(mainRoute)}>
                        <h1>{mainHeadings}</h1>
                    </div>
                    <div className='flex gap-x-5'>
                        {routes.map((nav, index) =>
                            <span key={index}
                                onClick={() => push({ pathname: nav.path })}
                                // className={`cursor-pointer font-semibold p-2 hover:bg-slate-100 rounded ${route === nav.path && 'text-blue-700'}`}
                                className={`cursor-pointer font-semibold py-3 px-2 hover:bg-slate-100 ${route === nav.path && 'border-b-2 border-b-slate-400 border-sky-600 rounded-none'}`}
                            >
                                {nav.name}
                            </span>)
                        }
                    </div>
                </div>

                <div className='w-full flex lg:hidden justify-between items-center mx-auto h-[50px] px-5'>
                    <div className='text-[18px] font-semibold cursor-pointer' onClick={() => push(mainRoute)}>
                        <h1>{mainHeadings}</h1>
                    </div>
                    <div className='flex gap-x-5 cursor-pointer' onClick={() => setOpen(!open)}>
                        <AiOutlineBars fontSize={20} />
                    </div>
                </div>
            </div>

            <SideOver isOpen={open} setIsOpen={(e) => setOpen(e)} />
        </>
    );
};

export default header;
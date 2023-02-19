import { useRouter } from "next/router";

const Footer = () => {
    const { push } = useRouter();

    return (
        <div className="relative h-40 w-full bg-gradient-to-r from-slate-100 via-slate-50 to-slate-100 mt-20 border-t flex items-center">
            <div className="absolute inset-x-0  h-full flex flex-wrap justify-center items-center mt-2">
                <div className='text-center lg:w-6/12 w-full flex justify-center items-center flex-wrap'>
                    <div className='font-semibold w-full'>HighTool</div>
                    <div className='text-gray-600 w-full text-[15px] my-2'>© 2023 Hightool.net. All rights reserved.</div>

                    <div className="flex justify-center items-center gap-5 lg:w-auto md:w-full w-full flex-wrap">
                        <div
                            className='cursor-pointer text-[15px] text-gray-600 hover:text-violet-500'
                            onClick={() => push({ pathname: '/legal/privacy' })}
                        >
                            Privacy-policy
                        </div>

                        <div className='font-thin opacity-50'> | </div>

                        <div
                            className=' cursor-pointer text-[15px] text-gray-600'
                            onClick={() => push({ pathname: '/legal/terms' })}
                        >
                            Terms and Conditions
                        </div>

                        <div className='font-thin opacity-50'> | </div>


                        <div
                            className=' cursor-pointer text-[15px] text-gray-600'
                            onClick={() => push({ pathname: '/legal/cookies' })}
                        >
                            Cookies
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Footer;
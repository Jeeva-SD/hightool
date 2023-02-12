import Image from 'next/image';
import React from 'react';
import { AiOutlineYoutube } from 'react-icons/ai';
import beams from '../../assets/img/beams.jpg';
import IC from '../../assets/img/settings.gif';

const TopBow = () => {
    return (
        <div className='overflow-hidden'>
            <div className={`absolute top-[-300px] left-[-500px] -z-10 transform-gpu overflow-hidden blur-2xl`}>
                <Image src={beams} width={1500} height={1000} />
            </div>

            <div className={`absolute top-[400px] right-[0px] -z-10 transform-gpu overflow-hidden blur-2xl`}>
                <Image src={beams} width={800} height={1000} />
            </div>

            {/* <div className={`absolute top-[-100px] left-[-500px] -z-10 transform-gpu overflow-hidden blur-lg`}>
                <Image src={beams} width={1500} height={1000} />
            </div>

            <div className={`absolute top-[-100px] right-[-500px] -z-10 transform-gpu overflow-hidden blur-lg`}>
                <Image src={beams} width={1500} height={1000} />
            </div> */}
        </div>
    );
};

export default TopBow;
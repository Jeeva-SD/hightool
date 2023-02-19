import Image from 'next/image';
import beams from '../../assets/img/beams.jpg';

const TopBow = () => {
    return (
        <div className='overflow-hidden'>
            <div className={`absolute top-[-300px] left-[-500px] -z-10 transform-gpu overflow-hidden blur-2xl`}>
                <Image src={beams} width={1500} height={1000} alt="HighTool.net" priority={true} loading='eager' />
            </div>

            <div className={`absolute top-[400px] right-[0px] -z-10 transform-gpu overflow-hidden blur-2xl`}>
                <Image src={beams} width={800} height={1000} alt="HighTool.net" priority={true} loading='eager' />
            </div>
        </div>
    );
};

export default TopBow;
import Image from 'next/image';
import beams from '../../../../public/img/beams.jpg';

const Rainbow = () => {
    return (
        <>
            <div className="absolute top-[-10rem] left-[20rem] -z-10 transform-gpu overflow-hidden blur-3xl">
                <Image src={beams} alt='beams' width={5000} height={500} loading='lazy'
                    className={`relative right-[calc(50%-11rem)] -z-10`}
                />
            </div>

            <div className="lg:hidden md:hidden absolute top-[5rem] left-[0rem] -z-10 transform-gpu overflow-hidden blur-3xl">
                <Image src={beams} alt='beams' width={5000} height={500} loading='lazy'
                    className={`relative right-[calc(50%-11rem)] -z-10`}
                />
            </div>

            <div className="absolute top-[30rem] left-[70rem] -z-10 transform-gpu overflow-hidden blur-3xl">
                <Image src={beams} alt='beams' width={5000} height={500} loading='lazy'
                    className={`relative right-[calc(50%-11rem)] -z-10`}
                />
            </div>
        </>
    );
};

export default Rainbow;
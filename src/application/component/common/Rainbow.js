import Image from 'next/image';
import beams from '../../../../public/img/beams.jpg';

const Rainbow = () => {
    return (
        <div className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl">
            <Image src={beams} alt='beams' width={3000} height={500} priority={true}
                className={`relative right-[calc(50%-11rem)] -z-10`}
            />
        </div>
    );
};

export default Rainbow;
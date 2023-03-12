import Head from 'next/head';
import { useRouter } from 'next/router';
import { Inter } from '@next/font/google';
import Image from 'next/image';
import Rainbow from '../../application/component/common/Rainbow';
import { youtubeFeatures } from '@/application/assets/content/youtube';
import ytPreview from '../../../public/img/youtube_preview.png';

const inter = Inter({ subsets: ['latin'] });

export default function ProTagsIndex() {
    const { push } = useRouter();

    return (
        <>
            <Head>
                <title>Pro Tags</title>
                <meta name="description"
                    content="ProTags is a tool that helps you to create relevant and effective tags for their videos or posts. And helps users to react wider audience. 
                    youtube tag generator, how to tag youtube videos, youtube tag generator free, how to properly tag your youtube videos, best tag generator for youtube, youtube tags, tag generator, youtube tag generator app, youtube video tag generator, how to find viral tag for youtube video, youtube seo, hightool, hightool.net" />
                <meta name="keywords"
                    content="youtube tag generator, how to tag youtube videos, youtube tag generator free, how to properly tag your youtube videos, best tag generator for youtube, youtube tags, tag generator, youtube tag generator app, youtube video tag generator, how to find viral tag for youtube video, youtube seo, hightool, hightool.net" />
            </Head>

            <Rainbow right='calc(50%-11rem)' />

            <main className={inter.className}>
                <div className='w-full flex justify-center'>
                    <div className='lg:w-6/12 w-full flex flex-wrap items-center lg:py-24 py-16'>
                        <div className='mb-10'>
                            <h1 className='text-center lg:text-4xl text-[18px] font-extrabold px-2 lg:px-0'>
                                Streamline Your SEO Strategy with ProTags
                            </h1>

                            <p className='text-center text-neutral-700 my-5 px-8'>
                                The powerful keyword generator that delivers relevant and effective keyword suggestions to
                                elevate your content and drive traffic. Unlock the full potential of your SEO and content strategy with ProTags
                            </p>
                        </div>

                        <span className='w-full flex flex-wrap justify-center gap-5'>
                            <h2 className='w-full text-center font-semibold leading-7 text-black'>
                                ProTags / Youtube Tag Generator
                            </h2>
                            <Image src={ytPreview} width={500} height={500} className='shadow-2xl rounded-lg lg:w-auto w-5/6 border-t-[15px] border-slate-900' alt="HighTool.net" />

                            <span className='w-full flex justify-center mt-8'>
                                <button onClick={() => push('/protags/youtube')}
                                    className='text-center rounded-md bg-black px-3.5 py-1.5 text-base font-semibold leading-7 text-white shadow-sm hover:bg-gray-800'>
                                    Get Started
                                </button>
                            </span>
                        </span>
                    </div>
                </div>

                <div className='lg:w-10/12 md:w-10/12 w-11/12 mx-auto'>
                    <div className='grid my-[30px] grid-cols-1'>
                        <h3 className='text-[18px] lg:text-4xl mb-3 font-bold mx-auto lg:my-3 text-center'>Unleash the Power of YouTube tags</h3>
                        <h4 className='mx-auto mb-5 text-center lg:text-[15px] text-[12px]'>Unlock Your Video's True Potential with ProTag</h4>
                    </div>
                    <div className='grid lg:grid-cols-3 grid-cols-1 gap-5'>
                        {youtubeFeatures.map((features, index) => (
                            <div className='border p-6 rounded bg-white hover:shadow-2xl transition-shadow' style={{ boxShadow: '.2s ease' }} key={index}>
                                <div className='mb-2'>
                                    <h1 className="text-[1.125em] font-bold text-center lg:text-start">
                                        {features.sortTitle}
                                    </h1>
                                </div>
                                <div className='text-[14px] text-justify lg:text-start'>
                                    {features.sortDescription}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </main>
        </>
    );
}

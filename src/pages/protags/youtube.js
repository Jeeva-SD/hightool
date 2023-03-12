import Head from 'next/head';
import { useEffect, useState } from 'react';
import { Inter } from '@next/font/google';
import axios from 'axios';
import Input from '@/application/component/common/Input';
import YtBow from '../../application/component/common/YtBow';
import Features from '../../application/component/protags/youtube/Features';
import Script from 'next/script';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
    const [title, setTitle] = useState([]);
    const [isSearchDone, setIsSearchDone] = useState(false);
    const [tags, setTags] = useState([]);
    const [loading, setLoading] = useState(false);
    const [selectedIndex, setSelectedIndex] = useState([]);

    useEffect(() => {
        (!loading && tags?.length > 0) && handleSelectAll();
    }, [loading]);

    const handleClick = index => {
        const tagIndex = selectedIndex.indexOf(index);
        if (tagIndex === -1) setSelectedIndex([...selectedIndex, index]);
        else {
            const arr = selectedIndex.filter(i => i !== index);
            setSelectedIndex(arr);
        }
    };

    const handleSelectAll = () => setSelectedIndex(tags.map((tag, index) => index));

    const handleCopy = () => {
        const selectedTags = tags.filter((tags, index) => selectedIndex.includes(index));
        navigator.clipboard.writeText(selectedTags);
    };

    const handleSearch = async () => {
        if (title.trim().length === 0) return;
        setLoading(true);

        const { data } = await axios.get(`https://tags.jee6.in/youtube/tags?q=${title}`);
        if (data?.data) {
            setTags(data.data);
            setLoading(false);
            setSelectedIndex([]);
            setIsSearchDone(false);
        }
        else {
            setTags([]);
            setLoading(false);
            setSelectedIndex([]);
            setIsSearchDone(false);
        }
    };

    return (
        <>
            <Head>
                <title>Youtube Tag Generator | HigtTool</title>
                <meta
                    name="description"
                    content="ProTags is a powerful YouTube tag generator that helps content creators to 
                optimize their videos on YouTube. YouTube tag generator,youtube keyword generator, how to tag YouTube videos, rapidtag generator, tag generator for YouTube, best tag generator for youtube."
                />
                <meta
                    name="keywords"
                    content="youtube tag generator, how to tag youtube videos, rapidtag generator, tag generator for youtube, youtube tag generator free, youtube tags, best tag generator for youtube, tag generator, how to tag youtube videos to get more views, how to find viral tag for youtube video, youtube seo, hightool, hightool.net"
                />
            </Head>

            <YtBow />
            <main className={`${inter.className}`}>
                <div className='flex flex-wrap lg:min-h-[90vh] h-auto justify-center items-center gap-0 pt-20 lg:pb-20 pb-12'>
                    <div className='flex w-full flex-wrap justify-center gap-3'>
                        <div className='w-full flex justify-center'>
                            <h1 className='lg:text-4xl text-2xl font-bold text-center'>Maximize Your YouTube Reach</h1>
                        </div>
                        <div className='lg:w-7/12 w-11/12'>
                            <Input onChange={(e) => setTitle(e)} onClick={() => handleSearch()} isRequesting={loading} />
                        </div>

                        <div className='lg:w-7/12 w-11/12 flex justify-center'>
                            <ins className="adsbygoogle"
                                style={{ display: 'block' }}
                                data-ad-client="ca-pub-6663847551285629"
                                data-ad-slot="4890803756"
                                data-ad-format="auto"
                                data-full-width-responsive="true"></ins>
                            <Script>
                                {`(adsbygoogle = window?.adsbygoogle || []).push({})`}
                            </Script>
                        </div>

                        <div className='lg:hidden md:hidden w-full flex justify-center'>
                            <button onClick={() => handleSearch()}
                                className='w-11/12 transition-colors rounded border border-black bg-black text-white hover:bg-transparent hover:text-black p-1'>
                                <div className='flex justify-center items-center gap-1'>
                                    <sapn>Search</sapn>
                                </div>
                            </button>
                        </div>
                    </div>

                    <div className='w-full lg:h-4/6 md:h-4/6 h-auto flex flex-wrap justify-center gap-5 my-5'>
                        <div className='lg:w-7/12 w-11/12 lg:h-auto lg:min-h-[300px] min-h-[500px] flex justify-center items-center rounded-md shadow-md border border-t bg-white'>
                            <div className='w-full h-full flex justify-center items-center flex-wrap gap-3 p-10'>
                                {tags?.map((tag, index) => {
                                    return (
                                        <div
                                            onClick={() => handleClick(index)} key={index} className='flex gap-2 p-2 w-auto bg-white rounded-md shadow-md border-t cursor-pointer'>
                                            <span>
                                                <input type={'checkbox'} checked={selectedIndex.indexOf(index) > -1} readOnly className='bg-black' />
                                            </span>
                                            <span>{tag}</span>
                                        </div>
                                    );
                                })}

                                {isSearchDone && tags?.length === 0 && <span className='font-mono'>No Tags Found 🙄</span>}
                            </div>
                        </div>

                        <div className='lg:w-7/12 w-full flex lg:justify-end justify-center'>
                            <button onClick={() => handleCopy()}
                                disabled={tags?.length === 0}
                                className='w-11/12 lg:w-2/12 transition-colors rounded border border-black bg-black text-white hover:bg-transparent hover:text-black p-1'>
                                <div className='flex justify-center items-center gap-1 cursor-pointer'>
                                    <span>Copy</span>
                                </div>
                            </button>
                        </div>
                    </div>
                </div>

                <div>
                    <Features />
                </div>
            </main>
        </>
    );
}
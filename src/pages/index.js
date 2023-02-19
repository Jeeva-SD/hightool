import Head from 'next/head';
import { useRouter } from 'next/router';
import TopBow from '@/application/component/common/TopBow';
import BotBow from '@/application/component/common/BotBow';
import { AiFillFire } from 'react-icons/ai';
import { FaHashtag } from 'react-icons/fa';

export default function Example() {
  const { push } = useRouter();

  return (
    <>
      <Head>
        <title>HighTool</title>
        <meta name="description" content="HighTool provides you the variety of useful tools for content creators and marketers. One of its
        main features is a YouTube tag generator, which allows you to generate relevant tags for your YouTube videos to help you to get discovered 
        by a wider audience" />
        <meta name="keywords" content="keyword research, SEO tools, youtube tag generator, instagram tag generator, tiktok tag generator, hightool, analytics, keyword generator, hightools, hightool.net" />
      </Head>

      <div className="isolate bg-white">
        <TopBow />
        <main>
          <div className="flex h-[90vh] lg:items-center items-start">

            <div className="mx-auto max-w-2xl py-28 lg:py-44 md:py-16">
              <div className="flex justify-center">
                <div className="relative rounded-full py-1 px-3 text-sm leading-6 text-gray-600">
                  Designed by {' '}
                  <a href="https://www.instagram.com/jeeva_b06" target={'_blank'} className="font-semibold text-indigo-600">
                    <span className="absolute inset-0" aria-hidden="true" />
                    Jee6
                  </a>
                </div>
              </div>

              <div className="text-center">
                <h1 className="lg:text-4xl text-2xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                  We optimize your online presence and increase your brand awareness
                </h1>
                <p className="mt-6 lg:text-lg text-inherit leading-8 text-gray-600 lg:px-0 px-8">
                  Say goodbye to manual efforts and hello to smart, data-driven growth with our AI tool.
                  Reach your target audience and boost your content's impact  using advanced algorithms
                </p>

                <div className="mt-10 flex items-center justify-center gap-x-6">
                  <div className='w-full flex flex-wrap justify-center'>
                    <h2 className='text-center font-mono font-semibold leading-7 text-black'>
                      Explore HighTool
                    </h2>
                    <div className='w-full h-20 flex justify-center items-center gap-8'>
                      <span onClick={() => push('/protags')} className='cursor-pointer'><FaHashtag fontSize={35} /></span>
                      <span className='cursor-not-allowed'><AiFillFire fontSize={35} /></span>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </main>
        <BotBow />
      </div>
    </>
  );
}

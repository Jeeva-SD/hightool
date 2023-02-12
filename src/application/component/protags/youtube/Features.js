import { homeContent } from '@/application/assets/content/HomepageContent';
import { MdPublishedWithChanges } from 'react-icons/md';

const features = [
    {
        name: 'Push to deploy',
        description:
            'Morbi viverra dui mi arcu sed. Tellus semper adipiscing suspendisse semper morbi. Odio urna massa nunc massa.',
        icon: <MdPublishedWithChanges />,
    },
    {
        name: 'SSL certificates',
        description:
            'Sit quis amet rutrum tellus ullamcorper ultricies libero dolor eget. Sem sodales gravida quam turpis enim lacus amet.',
        icon: 'LockClosedIcon',
    },
    {
        name: 'Simple queues',
        description:
            'Quisque est vel vulputate cursus. Risus proin diam nunc commodo. Lobortis auctor congue commodo diam neque.',
        icon: 'ArrowPathIcon',
    },
    {
        name: 'Advanced security',
        description:
            'Arcu egestas dolor vel iaculis in ipsum mauris. Tincidunt mattis aliquet hac quis. Id hac maecenas ac donec pharetra eget.',
        icon: 'FingerPrintIcon',
    },
];

export default function Example() {
    return (
        <div className="bg-white lg:py-8 py-0">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:text-center">
                    {/* <h2 className="text-lg font-semibold leading-8 tracking-tight text-indigo-600">Grow more with less</h2> */}
                    <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl text-center">
                        Employ the Protags
                    </p>
                    {/* <p className="mt-6 text-lg leading-8 text-gray-600">
                        Increase visibility and engagement on your channel to reach a wider audience on YouTube
                    </p> */}
                </div>
                <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
                    <dl className="grid max-w-xl grid-cols-1 gap-y-10 gap-x-8 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
                        {homeContent.map((feature) => (
                            <div key={feature.title} className="relative shadow-md  border border-t-2 rounded-md p-5">
                                <dt className="text-base font-semibold leading-7 text-gray-900">
                                    <div className="absolute top-[-20px] left-[-20px] flex h-10 w-10 items-center justify-center rounded-lg bg-black shadow-lg">
                                        {feature.icon}
                                    </div>
                                    <span className='flex justify-center mx-auto text-center'>{feature.title}</span>
                                </dt>
                                <dd className="mt-2 leading-7 text-gray-600 text-[14px]">{feature.description}</dd>
                            </div>
                        ))}
                    </dl>
                </div>
            </div>
        </div>
    );
}

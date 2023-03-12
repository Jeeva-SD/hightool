import { homeContent } from '@/application/assets/content/HomepageContent';

export default function Example() {
    return (
        <div className="bg-white lg:py-8 py-0">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:text-center">
                    <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl text-center">
                        Employ the Protags.
                    </p>
                </div>
                <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
                    <dl className="grid max-w-xl grid-cols-1 gap-y-10 gap-x-8 lg:max-w-none lg:grid-cols-2 lg:gap-y-16 mx-auto">
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

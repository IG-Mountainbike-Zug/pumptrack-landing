import Image from "next/image";
import {env} from "~/env.mjs";

export default function Home() {

    return (
        <>
            <div className="bg-white">
                <header className="absolute inset-x-0 top-0 z-50">
                    <div className="mx-auto max-w-7xl">
                        <div className="px-6 pt-6 lg:max-w-2xl lg:pl-8 lg:pr-0">
                            <nav className="flex items-center justify-between lg:justify-start" aria-label="Global">
                                <a href="#" className="-m-1.5 p-1.5">
                                    <span className="sr-only">IG Mountainbike Zug</span>
                                    <Image
                                        alt="IG Mountainbike Zug Logo"
                                        className="h-40 w-auto"
                                        width={256}
                                        height={256}
                                        src="/logo.jpeg"
                                    />
                                </a>
                            </nav>
                        </div>
                    </div>
                </header>

                <div className="relative">
                    <div className="mx-auto max-w-7xl">
                        <div className="relative z-10 pt-14 lg:w-full lg:max-w-2xl">
                            <svg
                                className="absolute inset-y-0 right-8 hidden h-full w-80 translate-x-1/2 transform fill-white lg:block"
                                viewBox="0 0 100 100"
                                preserveAspectRatio="none"
                                aria-hidden="true"
                            >
                                <polygon points="0,0 90,0 50,100 0,100"/>
                            </svg>

                            <div className="relative px-6 py-32 sm:py-40 lg:px-8 lg:py-56 lg:pr-0">
                                <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl">

                                    <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                                        Du möchtest einen Pumptrack in {env.SITE_CITY}? Wir auch!
                                    </h1>
                                    <p className="mt-6 text-lg leading-8 text-gray-600">
                                        Unterstütze unser Anliegen und werde Mitglied.
                                    </p>
                                    <div className="mt-10 flex items-center gap-x-6">
                                        <a
                                            href="https://mountainbikezug.ch/Account/Register"
                                            className="rounded-md bg-sky-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-sky-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600"
                                        >
                                            Mitglied werden!
                                        </a>
                                        <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
                                            Mehr erfahren <span aria-hidden="true">→</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bg-gray-50 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
                        <Image
                            className="aspect-[3/2] object-cover lg:aspect-auto lg:h-full lg:w-full"
                            width={1587}
                            height={1058}
                            src="/DJI_0541.JPG"
                            alt=""
                        />
                    </div>
                </div>
            </div>
        </>
    );
}

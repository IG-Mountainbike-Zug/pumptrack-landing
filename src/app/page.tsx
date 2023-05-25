import Image from "next/image";
import {env} from "~/env.mjs";

const CallToAction = () => {
    return (
        <div className="bg-sky-700">
            <div className="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
                <div className="mx-auto max-w-2xl">
                    <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                        Gib deiner Begeisterung fürs Mountainbiken eine Stimme.
                        <br/>
                        Werde Mitglied bei der IG Mountainbike Zug!
                    </h2>
                    <p className=" mt-6 max-w-xl text-lg leading-8 text-sky-200">
                        Indem du dich bei uns im Verein engagierst, kannst du aktiv zur Verwirklichung dieses Projekts
                        beitragen.
                        Aber auch wenn du kein aktives Mitglied werden möchtest, kannst du uns trotzdem unterstützen!
                        Werde Freimitglied und zeige damit deine Unterstützung für unsere Ziele. Als Freimitglied hast
                        du keine weiteren Verpflichtungen, aber deine Stimme trägt dazu bei, dass unsere Anliegen Gehör
                        finden und wir gemeinsam eine starke Community aufbauen können.
                    </p>
                    <div className="mt-10 flex items-center justify-center gap-x-6">
                        <a
                            href="https://mountainbikezug.ch/Account/Register"
                            className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-sky-600 shadow-sm hover:bg-sky-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                        >
                            Mitglied werden!
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

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
                                        Gib deiner Begeisterung fürs Mountainbiken eine Stimme und werde Mitglied bei
                                        der IG Mountainbike Zug!
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

                <div className="bg-white py-24 sm:py-32">
                    <div className="mx-auto max-w-7xl px-6 lg:px-8">
                        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
                            <p className="text-base font-semibold leading-7 text-indigo-600">Deploy faster</p>
                            <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">A better
                                workflow</h1>
                            <div
                                className="mt-10 grid max-w-xl grid-cols-1 gap-8 text-base leading-7 text-gray-700 lg:max-w-none lg:grid-cols-2">
                                <div>
                                    <p>
                                        Pumptracks - das sind speziell gestaltete Strecken, die das Herz eines jeden
                                        Rollsport-Enthusiasten höher schlagen lassen. Sie bieten eine Mischung aus
                                        Geschwindigkeit, Geschicklichkeit und Spass für Biker, Trottinets, Inline
                                        Skates,
                                        Skateboards, Velos und vieles mehr. Aber was genau ist ein Pumptrack und warum
                                        setzen wir uns dafür ein?
                                    </p>

                                    <p className="mt-6">
                                        Ein Pumptrack ist eine asphaltierte oder aus Erde und Kies gebaute Strecke mit
                                        einer
                                        Reihe von Wellen und Kurven. Durch geschicktes Einsetzen von Körperbewegungen,
                                        dem
                                        sogenannten "Pumpen", können Fahrer ohne Pedaleinsatz Geschwindigkeit aufbauen
                                        und
                                        so ein einzigartiges Fahrerlebnis geniessen. Pumptracks sind nicht nur für
                                        Mountainbiker geeignet, sondern bieten auch anderen Rollsportarten eine ideale
                                        Umgebung, um ihre Fähigkeiten zu verbessern und sich auszutoben.
                                    </p>

                                    <p className="mt-6">
                                        Wir sind stolz darauf, bereits einen erfolgreichen Pumptrack in Cham realisiert
                                        zu haben. Der Pumptrack Cham erfreut sich bei Jung und Alt grosser Beliebtheit
                                        und ist ein lebendiges Beispiel dafür, wie ein solches Projekt eine Gemeinschaft
                                        zusammenbringen und begeistern kann. Wenn du dir ein Bild davon machen möchtest,
                                        besuche gerne die Webseite des Pumptrack Cham unter <a
                                        href="https://pumptrackcham.ch" target="_blank">pumptrackcham.ch</a>, wo du
                                        weitere Informationen und Impressionen findest. </p>
                                </div>
                                <div>
                                    <p>
                                        Die IG Mountainbike Zug setzt sich leidenschaftlich dafür ein, auch
                                        in {env.SITE_CITY}
                                        einen solchen Pumptrack zu errichten. Wir glauben daran,
                                        dass {env.SITE_CITY} das Potenzial
                                        hat,
                                        zu einem herausragenden Ort für alle Rollsportarten zu werden, und wir möchten
                                        diesen Traum verwirklichen.
                                    </p>

                                    <p className="mt-6">
                                        Indem du dich bei uns im Verein engagierst, kannst du aktiv zur Verwirklichung
                                        dieses Projekts beitragen. Als Mitglied der IG Mountainbike Zug hast du die
                                        Möglichkeit, bei der Planung und Umsetzung des Pumptracks mitzuwirken. Du kannst
                                        Ideen einbringen, an Veranstaltungen teilnehmen und dich mit anderen
                                        begeisterten
                                        Rollsportlern vernetzen. Zusammen können wir einen Ort schaffen, der die
                                        Rollsport-Community in {env.SITE_CITY} stärkt und wachsen lässt.
                                    </p>

                                    <p className="mt-6">
                                        Aber auch wenn du kein aktives Mitglied werden möchtest, kannst du uns trotzdem
                                        unterstützen! Werde Freimitglied und zeige damit deine Unterstützung für unsere
                                        Ziele. Als Freimitglied hast du keine weiteren Verpflichtungen, aber deine
                                        Stimme
                                        trägt dazu bei, dass unsere Anliegen Gehör finden und wir gemeinsam eine starke
                                        Community aufbauen können.
                                    </p>

                                    <p className="mt-6">
                                        Bist du bereit, die Zukunft des Rollsports in {env.SITE_CITY} mitzugestalten?
                                        Melde dich jetzt bei der IG Mountainbike Zug an und sei Teil einer dynamischen
                                        und engagierten Gemeinschaft!
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/*<CallToAction/>*/}
            </div>
        </>
    );
}

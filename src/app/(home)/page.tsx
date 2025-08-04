import TopNavBar from "@/components/NavBar";
import Button from "@/components/Button";
import {cn} from "@/Utilities";

export default function Home() {
    return (
        <div className="xl:max-w-[1920px] xl:mx-auto">
            <TopNavBar/>
            <Hero/>
            <Featured/>
            <Feature1/>
            <Feature2/>
            <Feature3/>
            <Container/>
            <About1/>
            <CTA2/>
            <Integrations/>
        </div>
    );
}


function Hero() {
    return (
        <div className="pt-10 px-5 grid md:grid-cols-2 max-md:gap-4">
            <div className="flex flex-col justify-center gap-7">
                <div className="grid grid-cols-2 gap-4 lg:flex">
                    <img src="/img/hero/p-of-week.svg" alt=""/>
                    <img src="/img/hero/b-of-product.svg" alt=""/>
                </div>

                <div>
                    <p className="font-bold text-neutral-500 text-4xl">Save Time and Get Real Results.</p>
                    <p className="text-neutral-200 text-sm">You can totally up your social media game with Stepby!</p>
                </div>

                <div className="flex flex-col gap-2 sm:flex-row sm:gap-5 text-sm">
                    <FeatureItem text='Switch Plans Anytime'/>
                    <FeatureItem text='No Credit Card Needed'/>
                </div>

                <div className="flex gap-4">
                    <Button style="fill" text="Get a demo" className="w-fit"/>
                    <Button style="outline" text="Get started free" className="w-fit"/>
                </div>
            </div>

            <picture>
                <source media="(min-width: 1024px)" srcSet="/img/hero/hero-xl.png"/>
                {/*<source media="(min-width: 768px)" srcSet="/img/hero/hero-lg.png"/>*/}
                <img src="/img/hero/hero-lg.png" alt="hero img"/>
            </picture>

        </div>
    );
}


function FeatureItem({text = "sample"}) {
    return (
        <div className="flex gap-2">
            <img src="/img/hero/feature-icon.svg" alt=""/>
            <p className="text-sm">{text}</p>
        </div>
    );
}


const logos = [
    "/img/netflix.svg",
    "/img/attentive.svg",
    "/img/canva.svg",
    "/img/gusto.svg",
    "/img/loom.svg",
    "/img/slack.svg",
];

function Featured() {
    return (
        <div
            className="bg-white overflow-hidden h-24 flex relative before:absolute before:w-6 before:h-full before:bg-feature-gradient before:z-[5] after:absolute after:right-0 after:w-6 after:h-full after:bg-feature-gradient-reverse after:z-[5]">
            {[0, 1, 2].map((i) => (
                <div
                    key={i}
                    className="flex animate-marquee"
                    aria-hidden={i !== 0 ? "true" : undefined}
                >
                    {logos.map((l) => (
                        <img className="mx-10 block min-w-[150px]" src={l} alt="logo" key={l}/>
                    ))}
                </div>
            ))}
        </div>
    )
}


function Feature1() {
    return (
        /* I changed md:flex-row-reverse to sm:flex-row-reverse. watch out for other md: */
        <div className="py-10 px-5 md:pr-0 flex flex-col sm:flex-row-reverse">
            <div className="md:flex md:flex-col md:justify-center md:basis-1/2">
                <p className="font-semibold text-3xl">Collaboration Made <span
                    className="text-blue-500">Effortless</span></p>

                <div className="my-6">
                    <div className="flex items-center gap-4 mb-3">
                        <p className="text-5xl font-semibold text-cyan-500">88%</p>
                        <p className="text-sm">Regular user every month</p>
                    </div>
                    <p className="text-sm">Social schedule permission levels and approval flows empower your team to
                        work independently,
                        eliminating the need for micro-management.</p>
                </div>
            </div>

            {/* Picture*/}
            <div className="md:flex md:justify-center md:basis-1/2">
                <picture className="inline-block lg:max-w-xl">
                    <source media="(min-width: 1024px)" srcSet="/img/social-media-stats-d.png"/>
                    <img src="/img/social-media-stats-m.png" alt=""/>
                </picture>
            </div>
        </div>
    );
}


const feature2BtnTexts = [
    'Teamwork',
    'Engagement',
    'Data Analysis',
    'Publish and Schedule',
]

function Feature2() {
    return (
        <div className="py-10 lg:px-10 px-5">
            <p className="text-3xl font-semibold text-center">Tackling Social Media Challenges <span
                className="text-blue-500">Daily Across</span> Industries</p>
            <div className="flex flex-wrap gap-4 justify-center mt-8">
                {feature2BtnTexts.map((t, i) => (
                    <Button key={t} text={t} style={i == 0 ? "fill" : "outline"}/>
                ))}
            </div>

            <div className="mt-8 md:flex md:justify-center md:items-center">
                <div>
                    <p className="text-sm md:text-[1rem]">Utilize the social media scheduler to share posts across
                        various accounts and
                        platforms.</p>

                    <div className="mt-8 space-y-4">
                        <Feature2ListItem
                            icon="calendar"
                            title="Content Schedule"
                            desc="Strategize, arrange, and timetable posts for regular publishing."
                        />
                        <Feature2ListItem
                            icon="star"
                            title="Intelligent Assistant"
                            desc="Overcome creative obstacles and spark inspiration with fresh ideas."
                        />
                        <Feature2ListItem
                            icon="layer"
                            title="Mass Scheduling"
                            desc="Handle the social schedule with 300+ posts planned simultaneously."
                        />
                    </div>
                </div>

                <img className="mt-8 block mx-auto sm:max-w-[50%] lg:max-w-[30%]" src="/img/social-media-icons-group.svg" alt=""/>
            </div>
        </div>
    );
}

function Feature2ListItem({icon, title, desc}: { icon: string; title: string; desc: string }) {
    return (
        <div className="flex h-[3.75rem] gap-4 items-center">
            <div className="p-2 bg-blue-25 rounded-[6px] flex items-center justify-center">
                <picture>
                    <source media="(min-width: 768px)" srcSet={`/img/${icon}.svg`}/>
                    <img src={`/img/${icon}-thin.svg`} alt=""/>
                </picture>
            </div>

            <div className="flex flex-col">
                <p className="text-blue-500 font-semibold">{title}</p>
                <p className="text-sm text-neutral-300">{desc}</p>
            </div>
        </div>
    );
}


function Feature3() {
    return (
        <div className="bg-neutral-500 py-10 px-6 flex flex-col text-white items-center">
            {/* texts */}
            <div className="text-center">
                <p className="text-3xl font-semibold leading-9">Achieving Business Impact Should be Simpler</p>
                <p className="text-[#CDD0D5] mt-2.5">Stepby’s integrated social media management platform allows your
                    team to unlock real business value, enhance your market standing, and boost revenue—swiftly.</p>
            </div>

            {/*Picture*/}
            <div className="mt-8 md:mt-[50px]">
                <picture>
                    <source media="(min-width: 768px)" srcSet="/img/feature-container-d.svg"/>
                    <img src="/img/feature-container-m.svg" alt=""/>
                </picture>
            </div>
        </div>
    );
}


function Container() {
    return (
        <div className="py-20 px-6 flex flex-col items-center">
            <div className="text-center">
                <p className="text-3xl font-semibold leading-9 text-neutral-500">Agencies and Brands Worldwide <span
                    className="text-blue-500">Trust us</span></p>
                <p className="text-neutral-200 mt-2.5">Stepby is an essential tool for thousands of social media
                    marketers and is highly recommended for its powerful features.</p>
            </div>

            <div className="mt-20 space-y-20 md:w-96">
                <ContainerCard img="container-people.svg" title="20k+" desc="Clients from various industries"/>
                <ContainerCard img="container-love.svg" title="5M+" desc="Posts released every month"
                               className="border-indigo-50"/>
                <ContainerCard img="container-star.svg" title="4.8" desc="Highly rated on user-friendliness"
                               className="border-cyan-500"/>
            </div>
        </div>
    );
}


function ContainerCard({img, title, desc, className}: {
    img: string;
    title: string;
    desc: string;
    className?: string;
}) {
    return (
        <div
            className={cn("flex flex-col items-center p-5 gap-2 border-2 border-blue-50 rounded-lg text-center", className)}>
            <img src={`/img/${img}`} alt="" className="-mt-16"/>
            <p className="text-3xl font-semibold leading-9 text-neutral-500 uppercase -mt-3">{title}</p>
            <p className="text-neutral-200 mt-2.5">{desc}</p>
        </div>
    );
}


function About1() {
    return (
        <div className="py-20 px-6 bg-white">
            <div className="flex flex-col md:flex-row md:items-center lg:px-10 space-y-5">
                <p className="text-3xl font-semibold leading-9 text-neutral-500"><span className="text-blue-500">What is Stepby</span> and
                    How Connect With Others?</p>

                <div className="flex flex-col space-y-4">
                    <p className="text-neutral-200">Stepby is an AI-powered platform offering tools, integrations,
                        and resources for marketing, sales, and customer service.</p>

                    <div className="space-x-4">
                        <Button text="Learn More" style="fill"/>
                        <Button text="Get started for free" style="outline"/>
                    </div>
                </div>
            </div>

            <picture className="inline-block !mt-10">
                <source media="(min-width: 768px)" srcSet="/img/about-1-d.png"/>
                <img src="/img/about-1-m.png" alt=""/>
            </picture>
        </div>
    );
}


function CTA2() {
    return (
        <div className="py-10 md:px-10 text-center space-y-8 bg-white">
            <p className="text-3xl font-semibold leading-9 text-neutral-500">You Can Count on us for <span className="text-blue-500">Assistance</span></p>
            <img src="/img/cta2-img.svg" alt="" className="block mx-auto"/>
            <p className="text-neutral-200 max-md:text-sm">Our customer advocates are available 24/7 to support you via email and social media. For those who prefer self-service, we offer a comprehensive, regularly updated help center.</p>
        </div>
    );
}


function Integrations() {
    return (
        <div className="py-10 px-4 md:px-10 text-center space-y-10">
            <p className="text-3xl font-semibold leading-9 text-neutral-500">Integrations</p>
            <img src="/img/integrations-container.svg" alt="" className="block mx-auto"/>
            <Button text="Se all integrations" style="outline" />
        </div>
    );
}

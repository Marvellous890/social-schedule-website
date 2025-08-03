import TopNavBar from "@/components/NavBar";
import Button from "@/components/Button";

export default function Home() {
    return (
        <div className="xl:max-w-[1920px] xl:mx-auto">
            <TopNavBar/>
            <Hero/>
            <Featured/>
            <Feature1/>
            <Feature2/>
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
        <div className="py-10 px-5">
            <p className="text-3xl font-semibold text-center">Tackling Social Media Challenges <span
                className="text-blue-500">Daily Across</span> Industries</p>
            <div className="flex flex-wrap gap-4 justify-center mt-8">
                {feature2BtnTexts.map((t, i) => (
                    <Button key={t} text={t} style={i == 0 ? "fill" : "outline"}/>
                ))}
            </div>

            <div className="mt-8 md:flex md:justify-center md:items-center">
                <div>
                    <p className="text-sm md:text-[1rem]">Utilize the social media scheduler to share posts across various accounts and
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

                <img className="inline-block mt-8" src="/img/social-media-icons-group.svg" alt=""/>
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



import TopNavBar from "@/components/NavBar";
import Button from "@/components/Button";

export default function Home() {
    return (
        <div className="xl:max-w-[1920px] xl:mx-auto">
            <TopNavBar/>
            <Hero/>
        </div>
    );
}


function Hero() {
    return (
        <div className="py-10 px-5 grid md:grid-cols-2 max-md:gap-4">
            <div className="flex flex-col justify-center gap-7">
                <div className="grid grid-cols-2 gap-4 lg:flex">
                    <img src="/img/hero/p-of-week.svg" alt=""/>
                    <img src="/img/hero/b-of-product.svg" alt=""/>
                </div>

                <div>
                    <p className="font-bold text-neutral-500 text-4xl">Save Time and Get Real Results.</p>
                    <p className="text-neutral-200">You can totally up your social media game with Stepby!</p>
                </div>

                <div className="flex gap-5 text-sm">
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
            <p>{text}</p>
        </div>
    );
}


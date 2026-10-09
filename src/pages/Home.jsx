import { About, Hero, Marquee, Work } from "../components"

const Home = () => {

    return (
        <main className="min-h-screen w-full">
            <Hero/>
            <Work />
            <Marquee/>
            <About/>
        </main>
    )
}

export default Home
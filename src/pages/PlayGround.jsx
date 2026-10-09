import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { useRef } from "react"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const PlayGround = () => {
    const videos = ['/videos/movie.mp4', '/videos/perfume.mp4', '/videos/madza.mp4', '/videos/liam.mp4', '/videos/horizon.mp4', '/videos/finance.mp4', '/videos/donut.mp4', '/videos/book-app.mp4']
    const containerRef = useRef(null)
    const sliderRef = useRef(null)

    useGSAP(() => {
        const slider = sliderRef.current
        const container = containerRef.current

        const getDistance = () => slider.scrollWidth - container.offsetWidth

        gsap.to(slider, {
            x: () => -getDistance(),
            ease: "none",
            scrollTrigger: {
                trigger: container,
                start: "top top",
                end: () => `+=${getDistance()}`,
                pin: true,
                scrub: 1,
                invalidateOnRefresh: true,
            },
        })
    }, [])

    return (
        <section>
            <div className="h-[80vh] w-full flex items-center justify-between px-6">
                <h1 className="text-[clamp(3rem,9vw,10rem)]">
                    PLAYGROUND
                </h1>

                <p>Brain Dump</p>
            </div>

            <div
                ref={containerRef}
                className="md:h-screen h-max w-full overflow-hidden"
            >
                <div
                    ref={sliderRef}
                    className="flex md:flex-row flex-col items-center justify-center md:gap-32 gap-6 md:h-full md:w-max h-max w-full dark:bg-[#2e2e2e] bg-gray-300 p-6"
                >
                    {videos.map((item, i) => (
                        <div className="md:h-135 md:w-135 h-[60vh] w-full rounded-xl overflow-hidden">
                            <video className="h-full w-full object-cover object-center" autoPlay muted loop src={item}/>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default PlayGround
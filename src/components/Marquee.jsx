import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { useRef } from "react"

const Marquee = () => {
    const logos = [
        "/svg/AVIS.svg",
        "/svg/Baron.svg",
        "/svg/Clover.svg",
        "/svg/Comcast.svg",
        "/svg/ETS.svg",
        "/svg/Expedia.svg",
        "/svg/Identity.svg",
        "/svg/Lucid.svg",
        "/svg/Microsoft.svg",
        "/svg/NEOM.svg",
        "/svg/NFL.svg",
        "/svg/Toefl.svg",
        "/svg/Under_armour.svg",
        "/svg/Zappos.svg",
    ]

    const marquee = useRef(null)

    useGSAP(() => {
        const ctx = gsap.context(() => {
            gsap.to(marquee.current, {
                xPercent: -33.3333,
                duration: 15,
                ease: "none",
                repeat: -1,
                force3D: true,
            })
        }, marquee)

        return () => ctx.revert()
    })

    return (
        <section className="h-screen w-full flex items-center justify-center">
            <div className="h-[40vh] w-full border-y border-border flex items-center overflow-hidden">
                <div ref={marquee} className="flex w-max items-center will-change-transform">
                    {['', '', ''].map((_, i) => (
                        <div key={i} className="flex shrink-0 items-center">
                            {logos.map((item, index) => (
                                <div key={`set1-${index}`} className="mx-8 flex h-32 w-40 items-center justify-center">
                                    <img src={item} alt={`logo-${index + 1}`} className="max-h-20 max-w-32 object-contain" />
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Marquee
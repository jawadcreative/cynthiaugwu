import { useGSAP } from '@gsap/react'
import { RiArrowDownLine, RiArrowRightUpLine } from '@remixicon/react'
import gsap from 'gsap'
import { Link } from 'react-router'

const Hero = () => {
    useGSAP(() => {
        let tl = gsap.timeline()
        tl.from('.title h1', {
            y: '100%',
            stagger: .2
        })
        tl.from('.hero p', {
            y: '-100%'
        })
        tl.from('.bottom-link', {
            y: '100%',
            opacity: 0,
            stagger: .3

        })

    })
    return (
        <section className="h-screen w-full flex items-end px-[2em]">
            <div className="h-[80vh] w-full flex flex-col justify-between">
                <div className="hero flex flex-col w-fit items-end">
                    <div className="title">
                        {['Product', 'Designer'].map((item, index) => (
                            <div key={index} className="overflow-hidden">
                                <h1 className={`uppercase text-[clamp(3.5rem,10vw,8rem)] leading-none ${index === 1 && 'ml-[11vw]'}`}>
                                    {item}
                                </h1>
                            </div>
                        ))}
                    </div>
                    <div className="overflow-hidden">
                        <p className="font-extrabold">Based in Pakistan.</p>
                    </div>
                </div>
                <div className="flex flex-wrap-reverse items-end justify-end md:justify-between max-md:gap-[20px_81px]">
                    <Link to={'https://codeandtheory.com/'} className='link uppercase inline-block max-md:text-xs'><span className='flex items-center '>Previously worked at <RiArrowRightUpLine /></span>Code and Theory</Link>
                    <Link to={'https://community.protopie.io/c/our-ambassadors/'} className='link inline-block max-md:text-xs'>
                        <span className='flex items-center uppercase'>Protopie ambassador <RiArrowRightUpLine /></span>
                    </Link>
                    <div className='flex flex-col items-end justify-end text-right'>
                        <p className='text-right uppercase max-md:text-xs'>Available for Full Time & Freelance <br /> work from Sep ‘24</p>
                        <div className="flex gap-3 mt-6">
                            {[<RiArrowDownLine size={18} />, <RiArrowDownLine size={18} />].map((item, index) => (
                                <span key={index} className="bottom-link bg-[#AAAAAA] rounded-full p-1 text-black">{item}</span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero
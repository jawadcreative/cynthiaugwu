import { RiArrowRightLine } from '@remixicon/react'
import React from 'react'
import { Link } from 'react-router'

const About = () => {
    return (
        <section className='px-6 flex flex-col gap-6'>
            <div className='grid grid-cols-1 h-full md:grid-cols-2 gap-24'>
                <div className="col-span-1 flex items-center md:justify-end justify-center">
                    <img className='h-72' src="/img/cynthia.webp" alt="cynthia" />
                </div>
                <div className="col-span-1 flex flex-col justify-center items-start gap-4">
                    <p>(About Me)</p>
                    <p className='font-regular md:w-[85%] w-full text-xl'>I'm a product and motion designer who loves creating things that are not just eye candy but also fix life's little hiccups. When I'm not glued to my computer like a robot or scribbling on my iPad, you might catch me leveling up in video games, snapping photos like a wanna be pro, or watching football because football is life. My design philosophy? Keep it snazzy, make it work, and sprinkle in a bit of fun. I'm the designer you want on your team if you want people to exclaim, "I need that in my life!".</p>
                    <Link to="/contact" className='px-6 text-white py-2 border border-border rounded-full'>
                        Let's talk
                    </Link>
                </div>
            </div>
            <div className="">
                <p>Oops, almost forgot…</p>
                <Link to="https://youtube.com/@cynthiaugwudesigns" className='link flex w-fit gap-2 group'>
                    SUBSCRIBE TO MY YOUTUBE CHANNEL <span><RiArrowRightLine className='group-hover:-rotate-45' /></span>
                </Link>
            </div>
        </section>
    )
}

export default About
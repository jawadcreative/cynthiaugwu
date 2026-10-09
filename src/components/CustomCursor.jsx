// @ts-nocheck
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { useRef } from 'react'

const CustomCursor = () => {
    const cursor = useRef(null);
    let xPrev = 0;
    let yPrev = 0;
    let moveTimeout;
    useGSAP(() => {
        const move = (e) => {
            const xDiff = e.clientX - xPrev;
            const yDiff = e.clientY - yPrev;

            xPrev = e.clientX;
            yPrev = e.clientY;

            // Convert movement into a scale value
            const xScale = gsap.utils.clamp(0.7, 1.3, xDiff);
            const yScale = gsap.utils.clamp(0.7, 1.3, yDiff);

            const { width, height } =
                cursor.current.getBoundingClientRect();

            gsap.to(cursor.current, {
                x: e.clientX - width / 2,
                y: e.clientY - height / 2,
                scaleX: xScale,
                scaleY: yScale,
                duration: 0.,
            });

            clearTimeout(moveTimeout);

            moveTimeout = setTimeout(() => {
                gsap.to(cursor.current, {
                    scaleX: 1,
                    scaleY: 1,
                    duration: 0.,
                });
            }, 100);
        };
        const over = (e) => {
            if (e.target.closest('.box')) {
                gsap.to(cursor.current, {
                    textContent: 'View',
                    height: 70,
                    width: 70,
                    duration: 0.,
                    mixBlendMode: 'normal'
                })
            }
        }
        const out = (e) => {
            if (e.target.closest('.box') && !e.relatedTarget?.closest('.box')) {
                gsap.to(cursor.current, {
                    textContent: '',
                    height: 16,
                    width: 16,
                    duration: 0.,
                    mixBlendMode: 'difference'
                })
            }
        }
        window.addEventListener('mousemove', move)
        window.addEventListener('mouseover', over)
        window.addEventListener('mouseout', out)
        return () => {
            window.removeEventListener('mousemove', move)
            window.removeEventListener('mouseover', over)
            window.removeEventListener('mouseout', out)
        }
    }, [])
    return (
        <div ref={cursor} className="custom-cursor fixed top-0 left-0 bg-white rounded-[100%] z-50 mix-blend-difference pointer-events-none text-black h-4 w-4 flex items-center justify-center"></div>
    )
}

export default CustomCursor
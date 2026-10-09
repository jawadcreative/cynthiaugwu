import { RiAddLine } from "@remixicon/react"
import gsap from "gsap"
import { useRef } from "react"
import { Link } from "react-router"

const Navbar = () => {
  const menuRef = useRef(null)
  const linksRef = useRef(null)
  const handleClick = () => {
    gsap.to(menuRef.current, {
      top: '100%',
    })
    gsap.to(linksRef.current, {
      top: 0,
      stagger: 0.3
    })
  }
  window.addEventListener('wheel', (e) => {
    gsap.to(menuRef.current, {
      top: 0,
    })
    gsap.to(linksRef.current, {
      top: '-100%',
      stagger: 0.3
    })
  })
  return (
    <div className="z-40 h-[10vh] w-full fixed top-0 left-0 p-6 flex items-center justify-between">
      <h1><Link to={'https://www.cynthiaugwu.com'}>Cynthia Ugwu</Link></h1>
      <nav className="flex flex-col items-end relative w-[48vw] md:w-[18vw] h-[4vh] overflow-hidden">
        <div ref={linksRef} className="absolute -top-full left-0 flex items-center justify-center gap-6">
          {['Work', 'Play Ground', 'Contact'].map((item, i) => (
            <Link className="link" key={i} to={`/${item.toLocaleLowerCase().replace(' ', '-')}`}>{item}</Link>
          ))}
        </div>
        <button ref={menuRef} onClick={handleClick} className="flex items-center justify-center absolute top-0 right-0 cursor-pointer">Menu <span><RiAddLine size={16} /></span></button>
      </nav>
    </div>
  )
}

export default Navbar
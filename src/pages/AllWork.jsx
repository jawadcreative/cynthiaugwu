import { useState } from "react";
import { GridWork, Work } from "../components"

const AllWork = () => {
  const [work, setWork] = useState('List');
  console.log(work)
  const handleClick = (e) => {
    setWork(e.target.innerText)
  }
  return (
    <section className="">
      <div className="px-6 h-[70vh] flex items-center justify-center">
        <div className="flex items-center justify-between w-full">
          <h1 className="text-[clamp(3rem,9vw,10rem)]">WORK<sup>8</sup></h1>
          <div className="flex items-center border border-border rounded-full p-1">
            {['List', 'Grid'].map((item, i) => (
              <button key={i} onClick={(e) => { handleClick(e) }} className={`px-6 py-2 rounded-full cursor-pointer ${work === item ? 'bg-white text-black transition-all duration-700' : ''}`}>{item}</button>
            ))}
          </div>
        </div>
      </div>
      {work === 'List' ? <Work /> : <GridWork />}
    </section>
  )
}

export default AllWork
import React from 'react'
import { RiComputerFill } from "react-icons/ri"
import { useState } from 'react'
import { categories } from '../utils/data'

const MenuContainer = () => {
  const [filter, setfilter] = useState("graphic card")

  return (

   <section className="w-full my-6" id="menu">
    <div className="w-full flex flex-col items-center justify-center">
      <p className="text-2xl font-semibold capitalize text-slate-100 relative
            before:absolute before:rounded-lg before:content before:w-16 before:h-1 before:-bottom-2
            before:left-0 before:bg-gradient-to-tr from-cyan-500 to-cyan-900 transition-all ease-in-out duration-100 mr-auto">
        Our Computer Components
      </p>
      <div className="w-full flex items-center justify-start lg:justify-center gap-8 py-6 overflow-x-scroll scrollbar-none">
        {categories && categories.map(categories => (
          <div key={categories.d} className="group bg-slate-800 w-30 min-w-[200px] h-28 cursor-pointer rounded-lg drop-shadow-lg flex flex-col gap-3 items-center 
          justify-center hover:bg-orange-600 duration-150 transition-all ease-in-out">
            <div className="w-10 h-10 rounded-full bg:orange-600 group-hover:bg-card flex items-center justify-center">
              <RiComputerFill className="text-orange-600 group-hover:text-orange-600 text-lg" />
            </div>
            <p className="text-sm text-white">
              {categories.name}
            </p>
          </div>
        ))}
      </div>
    </div>
   </section>
    
  )
}

export default MenuContainer
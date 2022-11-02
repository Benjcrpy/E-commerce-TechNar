import React, { useState, useEffect} from 'react'
import { RiComputerFill } from "react-icons/ri"
import { categories } from '../utils/data'
import { motion } from 'framer-motion'
import RowContainer from './RowContainer'
import { useStateValue } from '../context/StateProvide';
const MenuContainer = () => {
  const [filter, setFilter] = useState("graphic card");

  const [{ computerItems }, dispatch] = useStateValue();


  useEffect(() => {}, [filter])
  return (

   <section className="w-full my-6" id="menu">
    <div className="w-full flex flex-col items-center justify-center">
      <p className="text-2xl font-semibold capitalize text-slate-100 relative before:absolute before:rounded-lg before:content before:w-16 before:h-1 before:-bottom-2 before:left-0 before:bg-gradient-to-tr from-cyan-500 to-cyan-900 transition-all ease-in-out duration-100 mr-auto">
        Our Computer Components
      </p>

      <div 
        className="w-full flex items-center justify-start lg:justify-center gap-8 mt-6 overflow-x-scroll scrollbar-none">
        {categories && categories.map(category => (
          <motion.div 
          whileTap={{ scale: 0.75 }}
          key={category.id} 
          className={`group ${filter === category.urlParamName 
            ? "bg-orange-500" 
            : "bg-slate-500" 
          } w-30 min-w-[200px] h-28 cursor-pointer rounded-lg drop-shadow-lg flex flex-col gap-3 items-center justify-center
           hover:bg-orange-500`}
           onClick={() => setFilter(category.urlParamName)}
          >

          <div 
          className={`w-10 h-10 rounded-full ${filter === category.urlParamName 
          ? "bg-slate-500" 
          : "bg-orange-500"} 
          group-hover:bg-card flex items-center justify-center`}>
            <RiComputerFill
             className={`${filter === category.urlParamName ? "text-textColor" : "text-white"} group-hover:text-textColor text-lg`} />
          </div>
          <p className={`text-lg ${filter === category.urlParamName ? "text-white" : "text-white"} group-hover:text-black`}>
          {category.name}
          </p>
        </motion.div>
        ))}
      </div>     
      <div className="w-full">
            <RowContainer 
            flag={false}
            data={computerItems?.filter((n) => n.category === filter)} />
      </div>
    </div>
   </section>
    
  )
}

export default MenuContainer
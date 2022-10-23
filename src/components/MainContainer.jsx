import React from 'react'
import HomeContainer from './HomeContainer'
import { motion } from "framer-motion";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
const MainContainer = () => {
  return (
    <div className="w-full h-auto flex flex-col items-center justify-center">
      <HomeContainer />

      <section className="w-full my-6">
        <div className="w-full flex items-center just-between">
            <p className="text-2xl font-semibold capitalize text-slate-100 relative
            before:absolute before:rounded-lg before:content before:w-32 before:h-1 before:-bottom-2
            before:left-0 before:bg-gradient-to-tr from-cyan-500 to-cyan-900 transition-all ease-in-out duration-100">
              Our CPU & PSU
            </p>

            <div className="hidden md:flex gap-3 items-center">

              <motion.div whileTap={{ scale: 0.75}} className="w-8 h-8  rounded-lg bg-cyan-300 hover:bg-cyan-700 cursor-pointer
                flex items-center justify-center">
                 <MdChevronLeft className="text-lg text-black" />
              </motion.div>

              <motion.div whileTap={{ scale: 0.75}} className="w-8 h-8 rounded-lg bg-cyan-300 hover:bg-cyan-700 cursor-pointer
              transition=all duration-100 ease-in-out hover:shadow-lg flex items-center justify-center">
                <MdChevronRight className="text-lg text-black" />
              </motion.div>


            </div>
        </div>
      </section>
    </div>
  )
}

export default MainContainer
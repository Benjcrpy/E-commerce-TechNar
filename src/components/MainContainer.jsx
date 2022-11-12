import React from 'react'
import HomeContainer from './HomeContainer'
import { motion } from "framer-motion";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import RowContainer from './RowContainer';
import { useStateValue } from '../context/StateProvide';
import { useRef } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import MenuContainer from './MenuContainer';
import CartContainer from './CartContainer';
import Footer from './Footer';
import About from './About'
import Support from './Support'
const MainContainer = () => {
  const [{computerItems, cartShow}, dispatch] = useStateValue();
  const [scrollValue, setScrollValue] = useState(0);
  
useEffect(() => {}, [scrollValue, cartShow])
  return (
    
    <div className="w-full h-auto flex flex-col items-center justify-center ">
      <HomeContainer />

      <section className="w-full my-6">
        <div className="w-full flex items-center justify-between">
            <p className="text-3xl font-semibold capitalize text-slate-100 relative
            before:absolute before:rounded-lg before:content before:w-32 before:h-1 before:-bottom-2
            before:left-0 before:bg-gradient-to-tr from-cyan-500 to-cyan-900 transition-all ease-in-out duration-100">
              CPU & PSU
            </p>

          <div className="hidden md:flex gap-3 items-center">
              <motion.div whileTap={{ scale: 0.75 }} className="w-8 h-8 rounded-lg bg-cyan-500 hover:bg-cyan-900  cursor-pointer transition-all duration-100 
              ease-in-out hover:shadow-lg flex items-center justify-center"
              onClick={() => setScrollValue(200)}
              > 
              <MdChevronLeft className="text-lg text-black"/>
              </motion.div>

              <motion.div whileTap={{ scale: 0.75 }} className="w-8 h-8 rounded-lg bg-cyan-500 hover:bg-cyan-900  cursor-pointer transition-all duration-100 
              ease-in-out hover:shadow-lg flex items-center justify-center"
              onClick={() => setScrollValue(200)}
              >
              <MdChevronRight className="text-lg text-black"/>
              </motion.div>
          </div>  
        </div>

        <RowContainer 
        scrollValue={scrollValue} 
        flag={true} 
        data={computerItems?.filter((n) => 
        n.category === "graphic card")}
        />
      </section>

      <MenuContainer />

      {cartShow && <CartContainer />}

      <About />

      <Support />

      <Footer />

    </div>
  )
}

export default MainContainer
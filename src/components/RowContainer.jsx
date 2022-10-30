import React, { useEffect, useRef, useState } from 'react'
import { MdShoppingBasket } from 'react-icons/md'
import { motion } from "framer-motion"




const RowContainer = ({ flag, data, scrollValue}) => {
  console.log(data);
  const rowContainer = useRef()
  useEffect(() => {
    rowContainer.current.scrollLeft += scrollValue;
    
  }, [scrollValue])
  return (
    <div
     ref={rowContainer}
      className={`w-full flex item-center gap-4 my-12 scroll-smooth ${
        flag 
        ? "overflow-x-scroll scrollbar-none" 
        : "overflow-x-hidden flex-wrap"
      }`}
    >
      {data && data.map(item => (
        <div key={item?.id} className="w-275 h-[200px] min-w-[275px] md:w-300 md:min-w-[300px]  bg-slate-600 hover:bg-slate-800 rounded-lg py-2 px-4  my-12 backdrop-blur-lg hover:drop-shadow-lg flex flex-col items-center justify-evenly relative">
        <div className="w-full flex items-center justify-between">
            <motion.img
            whileHover={{ scale: 1.2 }} 
            src={item?.imageURL} 
            alt=""
            className="w-40 -mt-8 drop-shadow-2xl"
            />
          <motion.div 
          whileTap={{ scale: 0.75 }}
          className="w-8 h-8 rounded-full bg-red-600 flex items-center justify-center cursor-pointer hover:shadow-md">
                <MdShoppingBasket className="text-white" />
          </motion.div>
        </div>
        <div className="w-full flex flex-col gap-1 items-end justify-end">
            <p className="text-slate-100 font-semibold text-lg">
                RTX 3090
            </p>
         <div className="flex items-center gap-2">
            <p className="text-lg text-slate-100 font-semibold">
                <span className="text-sm text-red-600"> ₱ </span> {item?.price}
            </p>
         </div>
        </div>
      </div>
      ))}
    </div>
  )
}

export default RowContainer

import React from 'react'
import Delivery from '../images/del.png'
import Bg from '../images/heroBg.png'
import { heroData } from '../utils/data'


const HomeContainer = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-2 w-full bg-slate-900" id="home">
    <div className="p-4 flex-1 flex flex-col items-start justify-center text-slate-100 gap-6">
      <div className="flex items-center gap-2 justify-center bg-orange-500 p-2 py-1 rounded-full">

        <p className="text-base text-slate-100 font-semibold">
          Delivery
           </p>
        <div className="w-5 h-5 bg-white rounded-full overflow-hidden drop-shadow-xl">
          <img
            src={Delivery}
            className="w-full h-full object-contain"
            alt="del"
          />
          </div>
        </div>

      <p className="text-[3.0rem] lg:text-[4.5rem] font-bold tracking-wide text-slate-200">
         A Shop You <span className="underline after:inline-block text-orange-500 text-[3rem] lg:text-[5rem]"> Can 
         </span> <span className="underline after:inline-block text-red-500  text-[3rem] lg:text-[5rem]"> Talk. </span>
      </p>

      <p className="text-2xl text-slate-100 text-center md:text-left">
      Enter the universe of technology with our online shopping platform with prices that can make you look. Tune in as we show offers that
      can be comparable to bigshot platforms like shopee and lazada. In addition to this Technar is a platform that you can talk regarding technological problems for free!
      Special prizes and Perks   will be given to our users who uses and orders from the account multiple times. So what are you waiting for? Click the b
    </p>

      <button type="button" className="bg-gradient-to-br from-orange-400 to-orange-500 w-full md:w-auto px-4 py-2  
      rounded-lg hover:shadow-lg transition-all ease-in-out duration-100"> 
      Order now!
      </button>

      </div>

     <div className="py-2 flex-1 flex items-center relative">

          <img 
          src={Bg} 
          className="ml-auto h-420 w-full lg:w-auto lg:h-650" 
          alt="hero-bg"/>  

          <div className="w-full h-full absolute top-0 left-0 flex items-center justify-center lg:px-40  py-20 gap-4 flex-wrap">     
          {heroData && 
          heroData.map(n => (

               <div 
                key={n.id} 
                className="lg:w-200  p-2 bg-cardOverlay backdrop-blur-md rounded-3xl flex flex-col items-center justify-center drop-shadow-lg">

               <img 
                src={n.imageSrc} 
                className="w-20 lg:w-40 -mt-10 lg:-mt-20 " 
                alt="GeForce RTX 3090 Ti" 
                />   

               <p className="text-base lg:text-xl font-semibold text-slate-50 mt-2 lg:mt-4"> {n.name} </p>

               <p className="text-[12px] lg:text-sm text-yellow-100 font-semibold my-1 lg:my-3"> {n.decp} </p>

               <p className="text-xs text-red-700"> ₱ <span className="text-sm font-semibold text-slate-100"> {n.price} </span> </p>

             </div> 
           ))}

           
        </div>
    </div>
    
   
  </section>
  )
}

export default HomeContainer

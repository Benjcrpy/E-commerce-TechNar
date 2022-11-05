import React from 'react'
import  ItemsContainer  from './ItemsContainer'
import  SocialIcons  from './SocialIcons'
import {Icons} from './Menu'
const Footer = () => {
  return (
    <section className="w-full h-full ">
        <div className="md:flex md:justify-between md:items-center sm:px-12 px-4 py-12">

          <h1 className="lg:text-4xl text-3xl md:mb-0 mb-20 lg:leading-normal text-slate-50 font-semibold md:w-2/5"> <span className="text-teal-400 "> 
          Free </span> Until you're ready to launch </h1>

          <div>
            <input 
            type="text"
            placeholder="Enter Your No."
            className="text-black sm:w-72 w-full sm:mr-5 mr-1 lg:mb-0 mb:4 py-2.5 rounded px-2 focus:outline-none">
            </input>

            <button className="bg-teal-400 hover:bg-teal-500 duration-300 px-5 py-2.5 font-Poppins rounded-md font-semibold text-black">
              Request Text
            </button>
          </div>
        </div>
        <ItemsContainer />
        <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-10 text-center pt-2 text-gray-400 text-sm pb-8">
          <span>© 2022 Tech Nar. All Right Reversed</span>
          <span>Terms . Privacy Policy</span>
          <SocialIcons Icons={Icons} />
        </div>
    </section>
  )
}

export default Footer

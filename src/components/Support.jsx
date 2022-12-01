import React from 'react'
import support from '../images/21.png'

const Support = () => {
  return (
    <section className="w-full py-16 text-white">
        <p className="text-3xl font-semibold capitalize text-slate-100 relative before:absolute before:rounded-lg before:content before:w-16 before:h-1 before:-bottom-2 before:left-0 before:bg-gradient-to-tr from-cyan-500 to-cyan-900 transition-all ease-in-out duration-100 mr-auto">
        Support
        </p>  

        <div className="w-full py-16 px-4">
        <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
            <img className="w-[500px] mx-auto my-4" src={support} alt="/"/>
        <div className="flex flex-col justify-center">
            <h1 className="text-green-400 font-bold font-family text-3xl mb-5"> SUPPORT MANAGEMENT </h1>
            <p className="mb-10 text-lg md:text-justify">TechNar is the only buy and sell website wherein people can use the customer service function 
            to assist them about their concern or problems technologically. To use our service function kindly click the chatbox function 
            in the right corner of this page to start our very own Customer service assistant it's connected to the admin and to have a 
            fastest transactions.</p>
        </div>
        </div>
        </div>
    </section>
  )
}
export default Support
import React from 'react'

const about = () => {
  return (
    <section className="w-full h-full my-6 text-slate-50" id="menu" >
      <p className="text-3xl font-semibold capitalize text-slate-100 relative before:absolute before:rounded-lg before:content before:w-16 before:h-1 before:-bottom-2 before:left-0 before:bg-gradient-to-tr from-cyan-500 to-cyan-900 transition-all ease-in-out duration-100 mr-auto">
        About Us
      </p>

        <div className="max-w-[1240px] mx-auto">

          <div className="text-center">
            <h2 className="text-5xl font-bold ">Trusted by the customer across the world</h2>
            <p className="text-xl py-5 text-gray-50"> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
          </div>

          <div className="grid md:grid-cols-3 gap-5 px-2 text-center">

            <div className="border py-8 rounded-xl shadow-xl">
              <p className="text-6xl font-bold text-orange-400">100%</p>
              <p className="text-gray-400 mt-2">Completion</p>
            </div>

            <div className="border py-8 rounded-xl shadow-xl">
              <p className="text-6xl font-bold text-orange-400">24/7</p>
              <p className="text-gray-400 mt-2">Delivery</p>
            </div>

            <div className="border py-8 rounded-xl shadow-xl">
              <p className="text-6xl font-bold text-orange-400">100k</p>  
              <p className="text-gray-400 mt-2">Transaction</p>
            </div>

          </div>
        </div> 
    </section>
  )
}

export default about
import React from 'react'
import delivery from '../images/del.png'
const MainContainer = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
      <div className="p-4 flex-1 flex flex-col items-start justify-center text-slate-100 gap-6">
        <div className="flex items-center gap-2 justify-center bg-orange-500 p-2 py-1 rounded-full">

          <p className="text-base text-slate-100 font-semibold">
            Delivery
             </p>
          <div className="w-5 h-5 bg-white rounded-full overflow-hidden drop-shadow-xl">
            <img
              src={delivery}
              className="w-full h-full object-contain"
              alt="del"
            />
            </div>
          </div>

        <p className="text-[3.0rem] font-bold tracking-wide text-slate-200">
           A Shop You <span className="underline after:inline-block text-orange-500 text-[3rem]"> Can </span> <span className="underline after:inline-block text-red-500  text-[3rem]"> Talk </span>
        </p>

        <p className="text-base text-slate-100 text-center md:text-left">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
      ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
      laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit 
      in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat 
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>

        
        <button type="button" className="bg-gradient-to-br from-orange-400 to-orange-500 w-full px-4 py-2 rounded-lg hover:shadow-lg transition-all ease-in-out duration-100"> Order now!</button>


        </div>
      <div className="py-2 bg-blue-400 flex-1">
      </div>
    </div>
  )
}

export default MainContainer
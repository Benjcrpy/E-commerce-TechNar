import React from "react";
import { motion } from "framer-motion";
import { MdShoppingBasket, MdAdd, MdLogout } from "react-icons/md";

import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { app } from "../firebase.config";

import Logo from '../images/tech.png'
import Avatar from '../images/avatar.png'
import { Link } from 'react-router-dom'
import { useStateValue } from "../context/StateProvide";
import { actionType } from "../context/reducer";
import { useState } from "react";


const Header = () => {
      const firebaseAuth = getAuth(app);
      const provider = new GoogleAuthProvider();

      const [{user}, dispatch] = useStateValue();

      const [isMenu, setIsMenu] = useState(false);

  const login = async () => {
     if(!user){
      const  {
        user : {refreshToken, providerData},
      } = await signInWithPopup(firebaseAuth, provider);
       dispatch({
          type: actionType.SET_USER,
          user: providerData[0],
       });
       localStorage.setItem('user', JSON.stringify(providerData[0]));
      }else{
        setIsMenu(!isMenu);
      }       
   };

   const logout = () => {
      setIsMenu(false)
      localStorage.clear()

      dispatch({
        type : actionType.SET_USER,
        user : null
      });
   }

  return (
    <header className="fixed z-50 w-screen p-3 px-4 md:p-6 md:px-16 bg-slate-800">
        {/* destop and tablets */}
        <div className="hidden md:flex w-full h-full items-center justify-between">
              <Link to={"/"} className="flex items-center gap-2">
                <img src={Logo} className="w-20 object-cover" alt="logo" />
              </Link>

          <div className="flex items-center gap-8">
          <ul
            initial={{ opacity: 0, x: 200 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 200 }}
            className="flex items-center gap-10"
          >
           <Link to={"/"} className="text-lg text-white hover:text-orange-600 duration-100 transition-all ease-in-out cursor-pointer"

            >
              Home
            </Link>
            <Link to={"/Menu"}className="text-lg text-white hover:text-orange-600 duration-100 transition-all ease-in-out cursor-pointer"

            >
              Menu
            </Link>
            <li className="text-lg text-white hover:text-orange-600 duration-100 transition-all ease-in-out cursor-pointer"

            >
              About Us
            </li>
            <li className="text-lg text-white hover:text-orange-600 duration-100 transition-all ease-in-out cursor-pointer"

            >
              Service
            </li>
            </ul>

        <div className="relative flex items-center justify-center">
          <MdShoppingBasket className="text-white hover:text-orange-600 text-2xl ml-8 cursor-pointer"/>
          <div className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-cartNumBg flex items-center justify-center">
            <p className="text-sm text-white font-semibold">2</p>
          </div>
        </div>

          <div className="relative">
            <motion.img
             whileTap={{ scale: 0.6 }}
             src={user ? user.photoURL : Avatar} 
             className="w-8 min-w-[40px] h-10 mig-h-[40px] cursor-pointer rounded-full"
             alt="userprofile"
             onClick={login}
            />
            {
              isMenu && (
                <div className="w-40 bg-gray-100 shadow-xl rounded-lg flex flex-col absolute top-13 right-0">
            {user && user.email === "anthonyagapay709@gmail.com" &&  (
              <Link to={"/createItem"}>
                <p className="px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-100 transition-all duration-100 ease-in-out text-textColor text-base"
                onClick={() => setIsMenu(false)}
                >
                New Item <MdAdd /> 
                </p>
              </Link>
              )}
              
              <p className="px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-200
              transition-all duration-100 ease-in-out text-textColor text-base"
              onClick={logout}
              >Log out <MdLogout/> </p>
            </div>
              )
            }
          </div>
        </div>
      </div>

        {/* mobile phone */}
        <div className="flex items-center justify-between md:hidden w-full h-full">
              <Link to={"/"} className="flex items-center gap-2">
                <img src={Logo} className="w-20 object-cover" alt="logo" />
              </Link>

          <div className="relative flex flex-items -right-20 justify-center cursor-pointer">
          <MdShoppingBasket className="text-white hover:text-orange-600 duration-100 transition-all text-2xl ml-8 cursor-pointer"/>
          <div className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-cartNumBg flex items-center justify-center">
            <p className="text-sm text-white font-semibold">2</p>
          </div>
        </div>


            <div className="relative">
            <motion.img
             whileTap={{ scale: 0.6 }}
             src={user ? user.photoURL : Avatar} 
             className="w-8 min-w-[40px] h-10 mig-h-[40px] cursor-pointer rounded-full"
             alt="userprofile"
             onClick={login}
            />
            {
              isMenu && (
                <div className="w-40 bg-gray-100 shadow-xl rounded-lg flex flex-col absolute top-13 right-0">
            {user && user.email === "anthonyagapay709@gmail.com" && (
              <Link to={"createItem"}>
                <p className="px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-100
                transition-all duration-100 ease-in-out text-textColor text-base">
                New Item <MdAdd /> 
                </p>
              </Link>
              )}
              
           <ul className="flex flex-col">
           <li className="text-base text-textColor hover:text-headingColor  duration-100 transition-all ease-in-out cursor-pointer hover:bg-slate-100 px-4 py-2">
              Home
            </li>
            <li className="text-base text-textColor hover:text-headingColor  duration-100 transition-all ease-in-out cursor-pointer hover:bg-slate-100 px-4 py-2">
              Menu
            </li>
            <li className="text-base text-textColor hover:text-headingColor  duration-100 transition-all ease-in-out cursor-pointer hover:bg-slate-100 px-4 py-2">
              About Us
            </li>
            <li className="text-base text-textColor hover:text-headingColor  duration-100 transition-all ease-in-out cursor-pointer hover:bg-slate-100 px-4 py-2">
              Service
            </li>
            </ul>


              <p className="m-2 p-2 rounded-md shadow-md flex items-center justify-center bg-gray-200 gap-3 
              cursor-pointer hover:bg-gray-300 transition-all duration-100 ease-in-out
             text-textColor text-base"
             onClick={logout}
             >Log out <MdLogout/> </p>
            </div>
              )
            }
          </div>
        </div>
    </header>
  );
};

export default Header;
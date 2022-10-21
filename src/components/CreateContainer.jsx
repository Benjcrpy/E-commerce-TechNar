import React, { useState } from "react"
import { motion } from "framer-motion";

import { RiComputerFill } from "react-icons/ri"
import { MdCloudUpload, MdDelete,   MdMoney } from "react-icons/md";
import { categories } from "../utils/data";
import Loader from "./Loader";
import { getDownloadURL, deleteObject, ref, StringFormat, uploadBytesResumable } from "firebase/storage"
import { storage } from "../firebase.config";
import { saveItem } from "../utils/firebaseFunctions";



const CreateContainer = () => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState(null);
  const [imageAsset, setImageAsset] = useState(null);
  const [fields, setFields] = useState(false);
  const [alertStatus, setAlertStatus] = useState("danger");
  const [msg, setMsg] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  
  const uploadImage = (e) => {
    setIsLoading(true);
    const imageFile = e.target.files[0];
    const storageRef = ref(storage, `Images/${Date.now()}-${imageFile.name}`);
    const uploadTask = uploadBytesResumable(storageRef, imageFile);

    uploadTask.on("state_changed", (snapshot) => {
      const uploadProgpress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      }, 
      (error) => {
        console.log(error);
        setFields(true);
        setMsg("Error uploading : Please try again");
        setAlertStatus("danger");
        setTimeout(() => {
          setFields(false);
          setIsLoading(false);
        }, 3000);
      }, 
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setImageAsset(downloadURL);
          setIsLoading(false);
          setFields(true);
          setMsg("Your Image Uploaded Successfully");
          setAlertStatus("success");
          setTimeout(() => {
            setFields(false);
          }, 3000);
        });
      }
    );
  };

  const deleteImage = () => {
    setIsLoading(true);
    const deleteRef = ref(storage, imageAsset);
    deleteObject(deleteRef).then(() => {
      setImageAsset(null);
      setIsLoading(false);
      setFields(true);
      setMsg("Your Image Deleted Successfully");
      setAlertStatus("sucess");
      setTimeout(() => {
        setFields(false)
      }, 3000);
    });
  };
  
  const saveDetails = () => {
    setIsLoading(true);
    try {
      if (!title || !imageAsset || !price || !category) {
        setFields(true);
        setMsg("Required fields can't be empty");
        setAlertStatus("danger");
        setTimeout(() => {
          setFields(false);
          setIsLoading(false);
        }, 4000);
      }else{
        const data = {
          id: `${Date.now()}`,
          title: title,
          imageURL: imageAsset,
          category: category,
          qty: 1,
          price: price
        };
      saveItem(data);
      setIsLoading(false);
      setFields(true);
      setMsg("Data uploaded Successfully");
      setAlertStatus("success");
      setTimeout(() => {
        setFields(false);
      }, 4000);
        clearData();
      }
    } catch (error) {
      console.log(error);
        setFields(true);
        setMsg("Error uploading : Please try again");
        setAlertStatus("danger");
        setTimeout(() => {
          setFields(false);
          setIsLoading(false);
        }, 3000);
    }
  };  

  const clearData = () => {
    setTitle("");
    setImageAsset(null);
    setPrice("");
    setCategory("Select Category");
  };
  
  return (
    <div className="w-full min-h-screen flex items-center justify-center">
      <div className="w-[90%] md:w-[50%] border border-gray-300 rounded-lg p-4 flex flex-col items-center justify-center gap-4">
      {fields && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className={`w-full p-2 rounded-lg text-center text-lg font-semibold ${
              alertStatus === "danger"
                ? "bg-red-400 text-red-800"
                : "bg-emerald-400 text-emerald-800"
            }`}
           >
            {msg}
          </motion.p>
        )}

        <div className="w-full py-2 border-b border-gray-500 flex items-center gap-2">
            <RiComputerFill className="text-xl text-slate-200" />
            <input
              type="text"
              required
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Title"
              className="w-full h-full text-lg bg-transparent font-semibold outline-none border-none placeholder:text-gray-300 text-slate-100"
              />
        </div>

        <div className="w-full">
            <select onChange={(e) => setCategory(e.target.value)} className="outline-none w-full text-base border-b-2 border-gray-200 p-2 rounded-md cursor-pointer">
              <option value="other" className="bg-white">
                Select Category
              </option> 
               {categories && 
                categories.map((item) => ( 
                <option 
                  key={item.id} 
                  className="text-base border-0 outline-none capitalize bg-white text-headingColor" 
                  value={item.urlParaName}
                >
                  {item.name}
                </option>
                  ))} 
          </select>
        </div>
          <div className="group flex justify-center items-center flex-col border-2 
          border-dotted border-gray-300 w-full h-225 md:h-340 cursor-pointer rounded-lg">
            {isLoading ? (
              <Loader /> 
              ) : ( 
               <>
                {!imageAsset ? (
                  <>
                      <label className="w-full h-full flex flex-col items-center justify-center cursor-pointer">
                      <div className="w-full h-full flex flex-col items-center justify-center gap-2">
                      <MdCloudUpload className="text-gray-500 text-3xl hover:text-gray-700" />
                       <p className="text-gray-500 hover:text-gray-700"> 
                        Click here to upload 
                       </p>
                    </div>
                    <input type="file" name="uploadimage" accept="image/*"
                    onChange={uploadImage} className="w-0 h-0"/>
                  </label>
                </> 
               ) : ( 
               <>
                  <div className="relative h-full">
                    <img src={imageAsset} alt="uploaded images" className="w-full h-full object-cover"/>
                    <button type="button" className="absolute bottom-3 right-3 p-3 rounded-full bg-red-500 text-xl cursor-pointer outline-none hover:shadow-md duration-500 
                    transition-all ease-in-out" onClick={deleteImage}> <MdDelete className="text-white" /> </button>
                    
                  </div>               
               </>
              )}     
            </>
          )}
        </div>

        <div className="w-full flex flex-col md:flex-row items-center gap-3">
          <div className="w-full py-2 border-b border-gray-300 flex
          items-center gap-2">
            <MdMoney className="text-slate-100 text-2xl"/>
            <input className="w-full h-full text-lg bg-transparent outline-none border-none placeholder:text-slate-100 text-slate-100" 
            type="text"
            required
            value={price} 
            onChange={(e) => setPrice(e.target.value)} 
            placeholder="Price"/>
          </div>         
        </div>

        <div className="flex items-center w-full">
          <button type="button" className="w-full h-full items-center justify-center border-none outline-none bg-emerald-600 px-12 py-2 rounded-lg text-lg text-white font-semibold"
          onClick={saveDetails}> Save </button>
        </div>
      </div>
    </div>
  );
};

export default CreateContainer
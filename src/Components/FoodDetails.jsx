
import {  Link, useParams } from "react-router-dom"
import { IoMdAdd }  from 'react-icons/io'
import { AiOutlineMinus }  from 'react-icons/ai'
import { BsCart2, BsFacebook, BsLinkedin, BsTwitter }  from 'react-icons/bs'
import { GiSelfLove }  from 'react-icons/gi'
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import '../Custom CSS/imageGallery.css'
import useAuth from "../Hooks/useAuth";
import { LineWave } from "react-loader-spinner"


export default function FoodDetails() {

    const params = useParams();

    const { currentUser } = useAuth()
    const email = currentUser.email;

    const { data: food, isLoading } = useQuery({
        queryKey: ['foodDetail'],
        queryFn : async () => {
           const data = await axios.get(`http://localhost:5000/single-food/${params.id}`)
           return data.data;
        }
    })

    if( isLoading ){return  <LineWave
        height="100"
        width="100"
        color="#4fa94d"
        ariaLabel="line-wave"
        wrapperStyle={{}}
        wrapperClass="w-20 md:w-24 relative left-2/4"
        visible={true}
        firstLineColor=""
        middleLineColor=""
        lastLineColor=""
      />}

    const { _id, foodName, category, price, images, country, quantity, description, addedUserEmail, madeBy, ordered} = food;

   

  return (
    <section className="max-w-[1300px] mx-auto px-4 my-2 md:my-14 lg:my-20 mb-10">
       
       <div className="flex flex-col md:flex-row justify-around gap-4 md:gap-12 lg:gap-20">

       <div className=" bg-gray-100 p-6 custom-image-gallery flex-1">
       <ImageGallery items={images} showNav={false} showPlayButton={false} showFullscreenButton={false} />
        </div>

        <div className="flex flex-col gap-5 flex-1">
            <p className="text-lime-600 py-1 text-sm px-3 border w-32 border-lime-600"> {quantity} In Stock </p>
            <h2 className="text-[28px] lg:text-4xl font-semibold font-play"> {foodName} </h2>
            <h4 className=""> {description } </h4>
            <h3 className="text-[25px] font-semibold"> {`$${price}`} </h3>

            <div className="flex items-center justify-around text-lg lg:text-2xl py-1 lg:py-2 px-2 border w-32 lg:w-44">
                <AiOutlineMinus className=""/>
                <p className="border-l border-r py-0 px-3"> 1</p>
                <IoMdAdd/>
            </div>
           <div className="flex gap-3 items-center uppercase font-semibold"> <p className="capitalize">  Food Category :</p>
           <b className="text-orange-500 border py-1 px-3 text-sm  rounded border-orange-500 uppercase font-medium"> {category} </b>
           </div>
            <div className="flex gap-2">
                <Link to={`/purchase-page/${_id}`}>
                <button  className="bg-lime-600 py-2 px-14 text-white rounded font-semibold transition-all flex items-center gap-2 hover:bg-lime-700 text-sm md:text-base"> <BsCart2 className="text-xl" /> Order </button></Link>
                <p className="flex items-center justify-center p-4 border rounded "> <GiSelfLove/> </p>
            </div>

            <div className="border-t py-5 mt-5 space-y-2 w-[100%]">
                <h4> <b> Food Origin :</b> <p className="capitalize inline">{country}</p> </h4>
                <h4> <b> Made By :</b> {madeBy} </h4>
                <h4 className="flex items-center gap-3 text-xl"> <b className="text-gray-600"> Share :</b> <BsFacebook className="text-blue-600"/> <BsTwitter className="text-sky-500"/> <BsLinkedin className="text-lime-600"/> </h4>
               
            </div>
        </div>
       </div>

    </section>
  )
}

import { useLoaderData, useParams } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import { BsCalendar2Date} from 'react-icons/bs'
import moment from 'moment';
import { useEffect, useState } from "react";
import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";
import Swal from 'sweetalert2'
import toast from "react-hot-toast";
import { LineWave } from "react-loader-spinner";
import { Helmet } from "react-helmet";

const PurchasePage = () => {

    const [currentDate, setCurrentDate] = useState();
    const [ buyerQuantity, setBuyerQuantity ] = useState(1);
    const { currentUser } = useAuth();
    const params = useParams();

    useEffect(()=>{
        const formattedDate = moment().format('dddd D MMMM  YYYY');
        setCurrentDate(formattedDate)
    },[])

    
    const { data: selectedFood, isLoading, refetch } = useQuery({
        queryKey: ['foodDetailOrderPage'],
        queryFn : async () => {
           const data = await axios.get(`http://localhost:5000/single-food/${params.id}`, {withCredentials: true})
           return data.data;
        }
    })

    
 
    const { _id,  foodName, category, price, images, quantity: previousQuantity , madeBy , addedUserEmail, ordered: previousOrdered} = selectedFood || {};

    const { mutateAsync: addOrder } = useMutation({
        mutationKey: ['add-order'],
        mutationFn: async (food) => {
          return axios.put(`http://localhost:5000/order-food/${_id}`, food)
        }
      })

      const { mutateAsync: updateQuantity } = useMutation({
        mutationKey: ['update-quantity'],
        mutationFn: async (food) => {
          return axios.patch(`http://localhost:5000/update-quantity/${_id}`, food)
        }
      })

    const handlePurchase = () => {

        if(currentUser.email === addedUserEmail){
            return  toast.error(`You Can't Buy Your Own Food`)
        }
      
        if( parseInt(previousQuantity) >= parseInt(buyerQuantity)){
            const quantity = parseInt(previousQuantity) - parseInt(buyerQuantity);
            const ordered = parseInt(previousOrdered) + parseInt(buyerQuantity);
            const mainFoodId = _id;
            const buyingDate = currentDate;
            const orderedEmail = currentUser.email;
            const userQuantity = parseInt(buyerQuantity);
            
            updateQuantity({quantity, ordered})
            .then(data => {
                  if(data.data.modifiedCount > 0){

                    addOrder({ mainFoodId,  foodName, category, price, images, madeBy , addedUserEmail, orderedEmail, ordered, buyingDate, userQuantity })
                    .then(data => {
                        if(data.data.modifiedCount > 0 || data.data.upsertedCount > 0){
                            Swal.fire('Order Placed Successfully',
                             'Thank You With About Us',
                             'success'  );
                             refetch();
                        }
                    }).catch(error => toast.error('Something Went Wrong!') )
                  }
                }).catch(error => {
                    toast.error('Something Went Wrong!')
            })

        }else{
            toast.error('Food Quantity Not Available !')
        }
    }

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




    return (
        <div className="py-14 px-4 md:px-6 2xl:px-20 2xl:container 2xl:mx-auto">


        <Helmet>
        <title>  SavorSport Cafe / Checkout / {foodName} </title>
      </Helmet>

            <div className="flex justify-start item-start space-y-2 flex-col ">
                <h1 className="text-3xl lg:text-4xl font-semibold leading-7 lg:leading-9  text-gray-800"> <span className="text-lime-600">Order </span>#13432</h1>
                <p className="text-base font-medium leading-6 text-gray-600"> {currentDate} </p>
            </div>
            <div className="mt-10 flex flex-col xl:flex-row jusitfy-center items-stretch  w-full xl:space-x-8 space-y-4 md:space-y-6 xl:space-y-0">
                <div className="flex flex-col justify-start items-start w-full space-y-4 md:space-y-6 xl:space-y-8">
                    <div className="flex flex-col justify-start items-start bg-gray-50 px-4 py-4 md:py-6 md:p-6 xl:p-8 w-full">
                        <p className="text-lg md:text-xl font-semibold leading-6 xl:leading-5 text-gray-800">Customer’s Item</p>
                        <div className="mt-4 md:mt-6 flex  flex-col md:flex-row justify-start items-start md:items-center md:space-x-6 xl:space-x-8 w-full ">
                            <div className="pb-4 md:pb-8 w-full md:w-40">
                                <img className="w-full hidden md:block" src={images[0].original} alt="dress" />
                                <img className="w-full md:hidden" src={images[0].original} alt="dress" />
                            </div>
                            <div className="border-b border-gray-200 md:flex-row flex-col flex justify-between items-start w-full  pb-8 space-y-4 md:space-y-0">
                                <div className="w-full flex flex-col justify-start items-start space-y-8">
                                    <h3 className="text-xl xl:text-2xl font-semibold leading-6 text-gray-800"> {foodName} </h3>
                                    <div className="flex justify-start items-start flex-col space-y-2">

                                    <div>
                                         <span> Your Quantity : </span>
                                    <input type="number" className="outline-none border border-lime-600 rounded-sm w-12 px-2" defaultValue={1} min={1} onChange={(e)=> setBuyerQuantity(e.target.value) } />
                                    </div>
                                        <p className="text-sm md:text-[16px] leading-none font-semibold text-lime-600">
                                            <span className="text-gray-500"> Available Quantity: </span> {previousQuantity}
                                        </p>
                                        <p className="text-sm md:text-[16px] leading-none font-semibold text-lime-600">
                                            <span className="text-gray-500 capitalize"> Category: </span> {category}
                                        </p>
                                        <p className="text-sm md:text-[16px] leading-none font-semibold text-lime-600">
                                            <span className="text-gray-500 capitalize"> Added By: </span> {madeBy}
                                        </p>
                                       
                                    </div>
                                </div>
                                <div className="flex justify-end space-x-8 items-end w-full">

                                    
                                    <p className="text-base xl:text-lg font-semibold leading-6 text-gray-800">${price}</p>
                                </div>
                            </div>
                        </div>
                       
                    </div>
                    <div className="flex justify-center md:flex-row flex-col items-stretch w-full space-y-4 md:space-y-0 md:space-x-6 xl:space-x-8">
                        <div className="flex flex-col px-4 py-6 md:p-6 xl:p-8 w-full bg-gray-50 space-y-6   ">
                            <h3 className="text-xl font-semibold leading-5 text-gray-800">Summary</h3>
                            <div className="flex justify-center items-center w-full space-y-4 flex-col border-gray-200 border-b pb-4">
                                <div className="flex justify-between  w-full">
                                    <p className="text-base leading-4 text-gray-800">Subtotal</p>
                                    <p className="text-base leading-4 text-gray-600">${price}</p>
                                </div>
                                <div className="flex justify-between items-center w-full">
                                    <p className="text-base leading-4 text-gray-800">
                                        Discount <span className="bg-gray-200 p-1 text-xs font-medium leading-3  text-gray-800">STUDENT</span>
                                    </p>
                                    <p className="text-base leading-4 text-gray-600">-${(price * 0.2).toFixed(2)} (20%)</p>
                                </div>
                                <div className="flex justify-between items-center w-full">
                                    <p className="text-base leading-4 text-gray-800">Shipping</p>
                                    <p className="text-base leading-4 text-gray-600">$4.00</p>
                                </div>
                            </div>
                            <div className="flex justify-between items-center w-full">
                                <p className="text-base font-semibold leading-4 text-gray-800">Total</p>
                                <p className="text-base font-semibold leading-4 text-gray-600">${ price - (price * 0.2)} </p>
                            </div>
                        </div>
                        <div className="flex flex-col justify-center px-4 py-6 md:p-6 xl:p-8 w-full bg-gray-50 space-y-6   ">
                            <h3 className="text-xl font-semibold leading-5 text-gray-800">Shipping</h3>
                            <div className="flex justify-between items-start w-full">
                                <div className="flex justify-center items-center space-x-4">
                                    <div className="w-8 h-8">
                                        <img className="w-full h-full" alt="logo" src="https://i.ibb.co/L8KSdNQ/image-3.png" />
                                    </div>
                                    <div className="flex flex-col justify-start items-center">
                                        <p className="text-lg leading-6 font-semibold text-gray-800">
                                            DPD Delivery
                                            <br />
                                            <span className="font-normal">Delivery with 24 Hours</span>
                                        </p>
                                    </div>
                                </div>
                                <p className="text-lg font-semibold leading-6 text-gray-800">$4.00</p>
                            </div>
                            <div className="w-full flex justify-center items-center">
                                <button className="hover:bg-lime-700 py-5 w-96 md:w-full bg-lime-600 text-base font-medium leading-4 text-white" onClick={handlePurchase}> Purchase Now </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-gray-50 w-full xl:w-96 flex justify-between items-center md:items-start px-4 py-6 md:p-6 xl:p-8 flex-col ">
                    <h3 className="text-xl font-semibold leading-5 text-gray-800">Customer Info</h3>
                    <div className="flex  flex-col md:flex-row xl:flex-col justify-start items-stretch h-full w-full md:space-x-6 lg:space-x-8 xl:space-x-0 ">
                        <div className="flex flex-col justify-start items-start flex-shrink-0">
                            <div className="flex justify-center  w-full  md:justify-start items-center space-x-4 py-8 border-b border-gray-200">
                                <img src={currentUser.photoURL} alt="avatar" className="w-20 h-20 object-cover" />
                                <div className=" flex justify-start items-start flex-col space-y-2">
                                    <p className="text-base font-semibold leading-4 text-left text-gray-800"> {currentUser.displayName} </p>
                                    <p className="text-sm leading-5 text-gray-600">10 Previous Orders</p>
                                </div>
                            </div>

                            <div className="flex justify-center  md:justify-start items-center space-x-4 py-4 border-b border-gray-200 w-full">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M19 5H5C3.89543 5 3 5.89543 3 7V17C3 18.1046 3.89543 19 5 19H19C20.1046 19 21 18.1046 21 17V7C21 5.89543 20.1046 5 19 5Z" stroke="#1F2937" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M3 7L12 13L21 7" stroke="#1F2937" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                <p className="cursor-pointer text-sm leading-5 text-gray-800"> {currentUser.email} </p>
                            </div>

                            <div className="flex justify-center  md:justify-start items-center space-x-4 py-4 border-b border-gray-200 w-full">
                                <BsCalendar2Date/>
                                <p className="cursor-pointer text-sm leading-5 text-gray-800"> Buying Date : {currentDate} </p>
                            </div>
                        </div>
                        <div className="flex justify-between xl:h-full  items-stretch w-full flex-col mt-6 md:mt-0">
                            <div className="flex justify-center md:justify-start xl:flex-col flex-col md:space-x-6 lg:space-x-8 xl:space-x-0 space-y-4 xl:space-y-12 md:space-y-0 md:flex-row  items-center md:items-start ">
                                <div className="flex justify-center md:justify-start  items-center md:items-start flex-col space-y-4 xl:mt-8">
                                    <p className="text-base font-semibold leading-4 text-center md:text-left text-gray-800">Shipping Address</p>
                                    <p className="w-48 lg:w-full xl:w-48 text-center md:text-left text-sm leading-5 text-gray-600">180 North King Street, Northhampton MA 1060</p>
                                </div>
                                <div className="flex justify-center md:justify-start  items-center md:items-start flex-col space-y-4 ">
                                    <p className="text-base font-semibold leading-4 text-center md:text-left text-gray-800">Billing Address</p>
                                    <p className="w-48 lg:w-full xl:w-48 text-center md:text-left text-sm leading-5 text-gray-600">180 North King Street, Northhampton MA 1060</p>
                                </div>
                            </div>
                            <div className="flex w-full justify-center items-center md:justify-start md:items-start">
                                <button className="mt-6 md:mt-0 py-5 hover:bg-gray-200 border border-lime-700 font-medium w-96 2xl:w-full text-base leading-4 text-lime-700">Edit Details</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PurchasePage;

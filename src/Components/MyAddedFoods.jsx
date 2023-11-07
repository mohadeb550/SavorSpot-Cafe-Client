
import {  useQuery } from "@tanstack/react-query";
import useAuth from "../Hooks/useAuth";
import useAxios from "../Hooks/useAxios";
import { Link, useNavigate } from "react-router-dom";
import { LineWave } from "react-loader-spinner";
import { Helmet } from "react-helmet";



export default function MyAddedFoods() {

  const { currentUser } = useAuth();
  const axios = useAxios();
  const navigate = useNavigate();


  const { data: foods , isLoading} = useQuery({
    queryKey: ['myAddedFoods'],
    queryFn : async () => {

     try{
      const data = await axios.get(`/my-added-foods?email=${currentUser.email}`);
      return data.data;
     }catch(error){
      if(error.response.status === 401){
        navigate('/unauthorized')
      }
     }
    }
  })


  return (
   <section className="max-w-[1300px] mx-auto px-4 my-2 md:my-6 lg:my-10 mb-10"> 

   
      <Helmet>
        <title>  SavorSport Cafe / My Added Foods </title>
      </Helmet>

   <div className="flex justify-center items-center mb-6">
   <h2 className="text-2xl md:text-3xl font-extrabold text-lime-600 font-play"> Your Added Foods </h2>
   </div>


   {isLoading && <LineWave
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
      /> }

<div className="flex flex-col font-play">
  <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
    <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
      <div className="overflow-hidden">
        <table
          className="min-w-full border text-center text-sm font-light dark:border-neutral-500">
          <thead className="border-b font-medium dark:border-neutral-500">
            <tr className="bg-green-600 h-8 text-white/95 text-[12px] md:text-base">
              <th
                scope="col"
                className="border-r px-6 py-0 md:py-2 lg:py-4 dark:border-neutral-500">
                Image
              </th>
              <th
                scope="col"
                className="border-r px-6 py-0 md:py-2 lg:py-4 dark:border-neutral-500">
               Food Name
              </th>
              <th
                scope="col"
                className="border-r px-6 py-0 md:py-2 lg:py-4 dark:border-neutral-500">
            Price
              </th>
              <th scope="col" className="px-6 py-0 lg:py-4"> Update </th>
            </tr>
          </thead>
          <tbody>
          
          {foods?.map(food =>  <tr key={food._id} className="border-b dark:border-neutral-500">
              <td
                className="whitespace-nowrap border-r px-6 py-4 font-medium dark:border-neutral-500 flex items-center justify-center">
                <img src={food.images[0].original} className="w-[52px] h-[52px] md:w-24 md:h-24 object-contain" />
              </td>
              <td
                className=" border-r font-medium text-sm md:text-lg  text-gray-600 text-start md:text-center px-6 py-4 dark:border-neutral-500">
                {food.foodName}
              </td>
              <td
                className="whitespace-nowrap font-medium  text-sm md:text-lg border-r px-6 py-4 dark:border-neutral-500">
                {`${food.price}$`}
              </td>
              <td className="whitespace-nowrap px-6 py-4">

              <Link to={`/update-food/${food._id}`}>
              <button className="bg-sky-500 p-1 px-2 md:py-2 md:px-4 text-white rounded font-semibold transition-all hover:bg-sky-600 text-[12px] md:text-base"> 
             Update </button>
             </Link>
               </td>
            </tr>)}
         
          </tbody>
        </table>
        {!foods?.length && <p className="text-xl text-center mt-16 text-gray-500"> No items  </p>}
      </div>
    </div>
  </div>
</div>

   </section>
  )
}

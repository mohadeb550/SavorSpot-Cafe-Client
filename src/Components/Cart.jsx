
import { useMutation, useQuery } from "@tanstack/react-query";
import useAuth from "../Hooks/useAuth";
import useAxios from "../Hooks/useAxios";
import { LineWave } from "react-loader-spinner";
import toast from "react-hot-toast";
import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom";



export default function Cart () {

  const { currentUser } = useAuth();
  const axios = useAxios();
  const navigate = useNavigate();


  const { data: orderedFoods , isLoading , refetch } = useQuery({
    queryKey: ['myOrderedFoods'],
    queryFn : async () => {
     
      try{
        const data = await axios.get(`/ordered-foods?email=${currentUser.email}`);
        return data.data;
       }catch(error){
        if(error.response.status === 401){
          navigate('/unauthorized')
        }
       }
    }
  })

  const { mutateAsync: removeFood } = useMutation({
    mutationKey : ['removeFood'],
    mutationFn : async (id) => {
     return axios.delete(`http://localhost:5000/delete-food/${id}`);
    }
  })

  const { mutateAsync: updateQuantity } = useMutation({
    mutationKey: ['update-quantity-cart'],
    mutationFn: async ({changes, mainFoodId}) => {
      return axios.patch(`http://localhost:5000/update-quantity/${mainFoodId}`, changes)
    }
  })



    const handleRemove = ({ id, mainFoodId, userQuantity, prevOrder }) => {
      const newOrdered = parseInt(prevOrder) - parseInt(userQuantity);

      updateQuantity({ changes: { ordered : newOrdered}, mainFoodId })
      .then(data => {
            if(data.data.modifiedCount > 0){

              removeFood(id)
              .then(axData => {
               if(axData.data.deletedCount > 0){
                 toast.success('Item Removed!')
                 refetch();
               }
              }).catch(error => toast.error('Something went wrong!'))

            }})
    }

  return (
   <section className="max-w-[1300px] mx-auto px-4 my-2 md:my-6 lg:my-10 mb-10"> 

   
      <Helmet>
        <title>  SavorSport Cafe / My Ordered Foods </title>
      </Helmet>

   <div className="flex justify-center items-center mb-6">
   <h2 className="text-2xl md:text-3xl font-extrabold text-lime-600 font-play "> Your Ordered Items </h2>
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
               Quantity
              </th>
              <th
                scope="col"
                className="border-r px-6 py-0 md:py-2 lg:py-4 dark:border-neutral-500">
               Date
              </th>
              <th
                scope="col"
                className="border-r px-6 py-0 md:py-2 lg:py-4 dark:border-neutral-500">
            Price
              </th>
              <th scope="col" className="px-6 py-0 lg:py-4"> Delete </th>
            </tr>
          </thead>
          <tbody>
          
          {orderedFoods?.map(food =>  <tr key={food._id} className="border-b dark:border-neutral-500">
              <td
                className="whitespace-nowrap border-r px-6 py-4 font-medium dark:border-neutral-500 flex items-center justify-center">
                <img src={food.images[0].original} className="w-[60px] h-[60px] md:w-24 md:h-24 object-contain" />
              </td>
              <td
                className=" border-r font-medium text-sm md:text-lg  text-gray-600 text-start md:text-center px-6 py-4 dark:border-neutral-500">
                {food.foodName}
              </td>
              <td
                className=" border-r font-medium text-sm md:text-lg  text-gray-600 text-start md:text-center px-6 py-4 dark:border-neutral-500">
                {food.userQuantity}
              </td>
              <td
                className=" border-r font-medium text-sm md:text-lg  text-gray-600 text-start md:text-center px-6 py-4 dark:border-neutral-500">
                {food.buyingDate}
              </td>
              <td
                className="whitespace-nowrap font-medium  text-sm md:text-lg border-r px-6 py-4 dark:border-neutral-500">
                {`${food.price}$`}
              </td>
              <td className="whitespace-nowrap px-6 py-4">

             
              <button onClick={()=> handleRemove({ id: food._id, mainFoodId: food.mainFoodId, userQuantity: food.userQuantity, prevOrder : food.ordered}) } className="bg-red-500 p-1 px-2 md:py-2 md:px-4 text-white rounded font-semibold transition-all hover:bg-red-600 text-[12px] md:text-base"> 
             Remove </button>
         
               </td>
            </tr>)}
        
          </tbody>
        </table>

        {!orderedFoods?.length && <p className="text-xl text-center mt-16 text-gray-500"> No items  </p>}
      </div>
    </div>
  </div>
</div>

   </section>
  )
}

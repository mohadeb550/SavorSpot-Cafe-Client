
import { Link } from "react-router-dom";

export default function FoodCard({food }) {

 const {_id, foodName, price, images, country, quantity, description, addedUserEmail, category} = food;

  return (
    <div className="block rounded w-full bg-white shadow-xl dark:bg-neutral-700 font-play">
   <div className="p-6 pb-4 flex items-center justify-center">
   <img className="rounded-t-lg p-2 border-b w-72 h-72 object-cover"  src={images[0].original || images[1].original} />
   </div>
  
  <div className="p-6 pt-0">
    <h5
      className="mb-4 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
   {foodName}
    </h5>
    <b className="text-lime-600 border py-1 px-3 text-sm  rounded border-lime-600 uppercase"> {category} </b>
    <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200 my-1 inline ml-5 ">
      Quantity : <b className="text-gray-500 text-sm"> {quantity} </b>
    </p>
    <h4 className="text-xl font-semibold my-3 text-gray-500"> Price : <span className="text-orange-600"> {`${price}$`} </span> </h4>

   <div className="flex gap-3 flex-grow">

    <Link to={`/food-details/${_id}/${_id}`} className="w-full"> <button className="bg-lime-600 py-[5px] px-8 text-white rounded font-semibold transition-all hover:bg-lime-700 text-sm md:text-base w-full"> See Details </button></Link>
  
 
   </div>
  </div>
</div>
  )
}


import { Link } from "react-router-dom";

export default function TopFoodCard({food }) {

 const {_id, foodName, price, images, category, ordered} = food;

  return (
    <div className="block rounded w-full bg-white border dark:bg-neutral-700 font-play">
   <div className="p-6 pb-4 flex items-center justify-center">
   <img className="rounded-full border border p-[2px] w-64 h-64 object-cover "  src={images[0].original || images[1].original} />
   </div>
  
  <div className="p-6 pt-0">
    <h5
      className="mb-4 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50 text-center">
   {foodName}
    </h5>
    
    <div className="flex justify-center items-center">
    <b className="text-lime-600 border py-1 px-5 text-sm  rounded border-lime-600 uppercase "> {category} </b>
    <p className="text-base text-neutral-600 dark:text-neutral-200 my-1 inline ml-5 ">
      Sales : <b className="text-gray-500 text-sm"> {ordered} </b>
    </p>
    </div>
    <h4 className="text-xl my-3 text-gray-500 text-center"> Price : <span className="text-orange-600 font-semibold"> {`${price}$`} </span> </h4>

   <div className="flex gap-3 flex-grow">

    <div className="flex justify-center items-center w-full">
    <Link to={`/food-details/${_id}`} > <button className="bg-lime-600 py-[5px] px-14 text-white rounded font-semibold transition-all hover:bg-lime-700 text-sm md:text-base"> See Details </button></Link>
    </div>
  
 
   </div>
  </div>
</div>
  )
}

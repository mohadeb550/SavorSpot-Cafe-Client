import '../Custom CSS/specialCard.css'

export default function SpecialCard({food }) {

 const {_id, name, price, image, description } = food;

  return (
    <div className="block rounded-md w-full bg-white border border-lime-600/20 dark:bg-neutral-700 font-play">
   <div className="p-6 pb-4 flex items-center justify-center dz-media">
   <img className="rounded-full border-b w-48 h-48 object-cover "  src={image} />
   </div>
  
  <div className="p-6 pt-0">
    <h5
      className="mb-4 text-xl font-semibold leading-tight text-neutral-600 dark:text-neutral-50 text-center">
   {name}
    </h5>
  
    <h4 className=" my-3 text-gray-500 text-center font-thin"> {description}</h4>

    <h4 className="text-xl font-thin my-3 text-gray-500 text-center"> Price : <span className="text-lime-600"> {`${price}$`} </span> </h4>

   <div className="flex gap-3 flex-grow">

    <div className="flex justify-center items-center w-full">
     <button className="bg-lime-600 py-[5px] px-6 text-white rounded font-semibold transition-all hover:bg-lime-700 text-sm md:text-base"> Order Now </button>
    </div>
  
 
   </div>
  </div>
</div>
  )
}

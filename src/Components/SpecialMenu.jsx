import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import SpecialCard from "./SpecialCard";

export default function SpecialMenu() {

    const { data: specialMenus, isLoading } = useQuery({
        queryKey:['specialMenu'],
        queryFn: async () => {
         const data = await axios.get(`http://localhost:5000/special-menu`);
          return data.data;
        }
      })


  return (
    <section className="my-14 mt-8 lg:my-20">
     <h1 className="text-[26px] md:text-3xl lg:text-[35px] text-lime-600 font-bold text-center font-play mb-8 " > Special Menu </h1>

     <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 justify-items-center gap-7  mb-8 md:mb-12 px-8 md:px-0">
            {specialMenus?.map(food => <SpecialCard key={food._id} food={food} /> )}
        </div> 
    </section>
  )
}
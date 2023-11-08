
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import TopFoodCard from "./TopFoodCard";
import { LineWave } from "react-loader-spinner";
import { Link } from "react-router-dom";

export default function TopFoodSection() {


    const { data: topFoods, isLoading } = useQuery({
      queryKey:['topFoods'],
      queryFn: async () => {
       const data = await axios.get(`https://savorspot-cafe-server.vercel.app/top-foods/`);
        return data.data;
      }
    })


  return (
    

    <section className="my-8 md:my-16 lg:my-24 px-1 lg:px-0" >
        <h1 className="text-[26px] md:text-3xl lg:text-[40px] text-gray-500 font-bold text-center font-play " > Top Foods </h1>
        <p className="text-center text-sm md:text-lg max-w-[1040px] mx-auto text-gray-400 mt-0 md:mt-2 mb-10 md:mb-16 lg:mb-20 font-play" >Experience the extraordinary with our range of signature dishes meticulousl.  promising an unforgettable dining experience.</p>
      
        {isLoading &&  <LineWave
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

      
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-7  mb-8 md:mb-12">
            {topFoods?.map(food => <TopFoodCard key={food._id} food={food} /> )}
        </div> 

       {topFoods?.length && 

        <div className="flex justify-center mt-20">
        <Link to={`/all-foods`} > <button className="bg-orange-600 py-[8px] px-10 text-white rounded font-semibold transition-all hover:bg-orange-700 text-sm md:text-base"> See All </button></Link>
        </div>}

    </section>
  )
}

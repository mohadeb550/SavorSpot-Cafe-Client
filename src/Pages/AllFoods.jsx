
import { useQuery } from "@tanstack/react-query";
import useAxios from "../Hooks/useAxios";
import { LineWave } from "react-loader-spinner";
import FoodCard from "../Components/FoodCard";
import SearchBanner from "../Components/SearchBanner";
import { useState } from "react";


export default function AllFoods() {

    const [ searchName, setSearchName ] = useState('');
    const axios =  useAxios();


    const { data: allFoods, isLoading } = useQuery({
      queryKey:['all-foods', searchName],
      queryFn: async () => {
       const data = await axios.get(`/all-foods?name=${searchName}`)
        return data.data;
      }
    })

    const handleSearch = (e) => {
        setSearchName(e.target.value)
    }

  return (
    

    <section className="my-2 md:my-6 lg:my-8 lg:px-0 max-w-[1300px] mx-auto px-5" >
          <SearchBanner handleSearch={handleSearch} />
      
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

        <section>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center  gap-7">
            {allFoods?.map(food => <FoodCard key={food._id} food={food} /> )}
        </div> 
        
        { (!allFoods || !allFoods.length) && <p className="mt-4 text-center">No results Found</p>}
      
        </section>

    </section>
  )
}

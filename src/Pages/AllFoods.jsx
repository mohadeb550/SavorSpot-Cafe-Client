
import { useQuery } from "@tanstack/react-query";
import useAxios from "../Hooks/useAxios";
import { LineWave } from "react-loader-spinner";
import FoodCard from "../Components/FoodCard";
import SearchBanner from "../Components/SearchBanner";
import { useEffect, useState } from "react";
import Pagination from "../Components/Pagination";
import { Helmet } from "react-helmet";


export default function AllFoods() {

    const [ searchName, setSearchName ] = useState('');
    const axios =  useAxios();
    const [ totalFoods, setTotalFoods ] = useState(0);
    const [ foodPerPage , setFoodPerPage ] = useState(9);
    const [ totalPage , setTotalPage ] = useState(0);
    const [ currentPage , setCurrentPage ] = useState(0);
    const [ pageArray, setPageArray ] = useState([])
    const [ sortType, setSortType ] = useState('');
    const [ selectedCategory , setSelectedCategory ] = useState('');



    const { data: allFoods, isLoading } = useQuery({
      queryKey:['all-foods', searchName, currentPage, sortType, selectedCategory],
      queryFn: async () => {
       const data = await axios.get(`/all-foods?name=${searchName}&skip=${currentPage * foodPerPage}&size=${foodPerPage}&sort=${sortType}&category=${selectedCategory}`)
        return data.data;
      }
    })

 

    useEffect(()=>{
        
        setTotalFoods(allFoods?.totalFood)
        if(totalFoods){
            setTotalPage(Math.ceil(totalFoods / foodPerPage));

            let pgsArray = [];
  
            for(let i = 0; i < totalPage; i++){
                pgsArray.push(i)
            }
            setPageArray([...pgsArray])
        }   
    },[allFoods, totalFoods, foodPerPage, totalPage, currentPage])

    const handleSearch = (e) => {
        setSearchName(e.target.value)
    }


  return (
    

    <section className="my-2 md:my-6 lg:my-8 lg:px-0 max-w-[1300px] mx-auto px-5" >

      <Helmet>
        <title> SavorSpotCafe / All Foods </title>
      </Helmet>

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

          <div className="flex justify-end my-6 gap-3 px-5 md:px-0">
          <select onChange={(e)=> setSortType(e.target.value)} className=" w-full max-w-xs outline p-2 outline-black/20 rounded-sm outline-1 ">
              <option disabled selected> Sort by Price</option>
               <option value=''> Random </option>
               <option value='1'> Low to High</option>
               <option value='-1'> High to Low</option>
        </select>
        
        <select onChange={(e) => setSelectedCategory(e.target.value)} className=" w-full max-w-xs outline p-2 outline-black/20 rounded-sm outline-1 ">
              <option disabled selected> Filter by Category</option>
              <option value=''> None </option>
              <option value='appetizers'> Appetizers </option>
            <option value='salads'> Salads and Bowls </option>
            <option value='sandwiches'> Sandwiches </option>
            <option value='pizzas'> Pizzas</option>
            <option value='burger'> Burger </option>
            <option value='bbq'>BBQ and Grilled </option>
            <option value='desserts'> Desserts </option>
            <option value='beverages'> Beverages </option>
            <option value='seasonal'>  Seasonal </option>
            <option value='vegan'> Vegan Options </option>
            <option value='breakfast'> Breakfast Classics </option>
            <option value='street'> Street Food </option>
            <option value='cheese'> Cheese and Charcuterie  </option>
            <option value='soup'>Soup </option>
            <option value='fusion'>International Fusion </option>
            <option value='vegetarian'> Vegetarian </option>
        </select>
          </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-7  mb-8 md:mb-12">
            {allFoods?.foods?.map(food => <FoodCard key={food._id} food={food} /> )}
        </div> 

        { (!allFoods || !allFoods.foods.length) && <p className="mt-4 text-center">No results Found</p>}

        </section>
          {!searchName && <Pagination pageArray={pageArray} currentPage={currentPage} setCurrentPage={setCurrentPage} />}
    </section>
  )
}

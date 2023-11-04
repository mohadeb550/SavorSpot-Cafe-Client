import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export default function TopFoodSection() {


    // const { data: products, isLoading } = useQuery({
    //   queryKey:['products'],
    //   queryFn: async () => {
    //    const data = await axios.get(`http://localhost:5000/products/${params.brand_name}`)
    //     return data.data;
    //   }
    // })


  return (
    

    <section className="my-8 md:my-16 lg:my-24 px-1 lg:px-0" >
        <h1 className="text-[26px] md:text-3xl lg:text-[40px] text-lime-600 font-bold text-center font-play " > Top Foods </h1>
        <p className="text-center text-sm md:text-lg max-w-[1040px] mx-auto text-gray-500 mt-0 md:mt-2 mb-10 md:mb-16 lg:mb-20 font-play" >Experience the extraordinary with our range of signature dishes meticulousl.  promising an unforgettable dining experience.</p>
      
        {/* {isLoading &&  <span className="loading loading-dots text-orange-600/80 w-10 md:w-14 relative left-2/4"></span> }

      { products && <section>

      {
        products.length? 
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center  gap-7">
            {products.map(product => <Product key={product._id} product={product} />)}
        </div> 
        :
       <div className="flex items-center justify-center">
         <img className="w-72 md:w-fit" src="/coming.jpg" />
       </div>
      }
        </section>} */}

    </section>
  )
}

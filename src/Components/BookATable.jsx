

export default function BookATable() {

  return (
   <section className="bg-[url(https://i.ibb.co/5TjrdDq/flat-lay-pita-with-avocado-spread-fried-egg-plate-with-copy-space.jpg)] lg:bg-[url(https://i.ibb.co/mG1hY8P/copy-space-italian-food-ingredients.jpg)] h-[770px] lg:h-[650px] bg-cover mt-20 lg:mt-36">
    <h2 className="text-4xl text-gray-700 font-play font-bold text-right p-8 pb-0 mr-16"> Book A Table</h2>
    <p className="text-sm text-gray-500 font-play  text-right p-1 mr-16">Some Trendy And Popular Courses Offerd</p>

    <div className="bg-black/75 w-[83%] md:w-[65%] mx-auto mt-12 p-6 lg:p-10 pb-4">
        <h4 className=" text-gray-400 font-play  text-center p-1 mb-3 ">MONDAY- FRIDAY: 08AM - 12PM SATURDAY - SUNDAY: 10AM - 11PM</h4>
        <div className="grid lg:grid-cols-2 gap-2">
            <input type="text" className="p-3 outline-none" placeholder="Enter Your Name" />
            <input type="text" className="p-3 outline-none" placeholder="Email Address" />
            <input type="text" className="p-3 outline-none" placeholder="Telephone Number" />
            <select className="select w-full rounded-none text-gray-500">
             <option disabled selected>Number of Guests</option>
             <option>1</option>
             <option>2</option>
             <option>3</option>
             <option>4</option>
             <option>5</option>
             <option>6</option>
             <option>7</option>
             <option>8</option>
             <option>9</option>
             <option>More than 10</option>
         
                </select>
                <input type="date" className="p-3 outline-none text-gray-500" />

                <select className="select w-full rounded-none text-gray-500">
             <option disabled selected>Time</option>
            <option>Breakfast </option>
            <option>Lunch </option>
            <option>Dinner</option>
                </select>
                
        </div>
       <div className="flex justify-center items-center">
       <button type="submit" className="p-3 outline-none border font-play border-lime-500 text-lime-500 my-6 px-10 hover:bg-lime-600/20"> Submit </button>
       </div>
    </div>
   </section>
  )
}

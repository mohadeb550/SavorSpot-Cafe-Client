
export default function SearchBanner({handleSearch }) {

  return (
   <div className="hero h-[200px] lg:h-[300px] mb-3 md:mb-8 font-play" style={{backgroundImage: 'url(https://i.ibb.co/qJj0F4K/elevated-view-fresh-raw-tagliatelle-pasta-with-tomato-garlic-black-pepper-white-plank.jpg)'}}>
  <div className="hero-overlay bg-opacity-50"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-4xl space-y-2 lg:space-y-5">
      <h1 className=" text-3xl lg:text-5xl font-bold"> Our All Foods</h1>
      <p className="">Experience the extraordinary with our range of signature dishes meticulousl.</p>
      
<div className='max-w-md mx-auto'>
    <div className="relative flex items-center w-full h-12 rounded-lg focus-within:shadow-lg bg-white overflow-hidden">
        <div className="grid place-items-center h-full w-12 text-gray-300">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
        </div>

        <input onChange={handleSearch}
        className="peer h-full w-full outline-none text-sm text-gray-700 pr-2"
        type="text"
        id="search"
        placeholder="Search food.." /> 
    </div>
</div>
    </div>
  </div>
</div>
  )
}



export default function Banner() {

  return (
    <div className="hero h-[35vh] lg:h-[50vh]" style={{backgroundImage: 'url(https://i.ibb.co/1LkV3TN/2150637282.jpg)'}}>
        
    <div className="hero-overlay bg-black/5"></div>

    <div className="hero-content text-left lg:text-justify text-neutral-content flex justify-start">
      <div className="w-[90%] lg:w-[40%] flex flex-col items-start mr-2 md:ml-8">
        
        <h1 className="mb-5 text-[24px] md:text-4xl lg:text-5xl font-extrabold lg:font-bold p-2 lg:p-3  lg:bg-lime-600 text-lime-500  lg:text-gray-200 uppercase"> <span className='' >Every Bite </span> Tells a Delicious Story.</h1>

        <p className="mb-5 text-gray-500 text-[12px] md:text-base font-play">Welcome to <b>SavorSpot Cafe</b>Step into a world where culinary artistry meets a cozy ambience.  adventure that tantalizes the taste buds and warms the soul.</p>
        <button className="bg-orange-600 py-2 px-10 md:px-6 text-white/80 rounded font-semibold transition-all hover:bg-orange-700 text-[12px] md:text-base"> Explore More </button>
      </div>
    </div>
  </div>
  )
}

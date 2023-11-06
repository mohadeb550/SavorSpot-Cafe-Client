import { Link } from "react-router-dom";


export default function Banner() {

  return (
    <div className="hero h-[35vh] lg:h-[50vh]" style={{backgroundImage: 'url(https://i.ibb.co/1LkV3TN/2150637282.jpg)'}}>
        
    <div className="hero-overlay bg-black/5"></div>

    <div className="hero-content text-left lg:text-justify text-neutral-content flex justify-start">
      <div className="w-[80%] lg:w-[44%] flex flex-col items-start mr-2 md:ml-8">
        
        <h1 style={{background :'linear-gradient(90deg, rgb(101,163,13) 23%, rgba(101,163,13,0.5881127450980392) 80%)'}} className="mb-5 text-[24px] md:text-4xl lg:text-5xl font-extrabold lg:font-bold p-2 lg:p-3  lg:text-gray-200 uppercase"> Every Bite Tells a Delicious Story.</h1>

        <p className="mb-5 text-gray-500 text-[12px] md:text-base font-play">Welcome to <b>SavorSpot Cafe</b>Step into a world where culinary artistry meets a cozy ambience.  adventure that tantalizes the taste buds and warms the soul.</p>
        <Link to='/all-foods'>
        <button className="bg-orange-600 py-2 px-10 md:px-6 text-white/80 rounded font-semibold transition-all hover:bg-orange-700 text-[12px] md:text-base"> Explore More </button></Link>
      </div>
    </div>
  </div>
  )
}

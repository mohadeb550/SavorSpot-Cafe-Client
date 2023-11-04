import { Outlet } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Navbar from "../Components/Navbar";


export default function Root() {
  

  return (
    <section >
   <Toaster/>
   <Navbar/>
    <Outlet/>
    
    </section>
  )
}

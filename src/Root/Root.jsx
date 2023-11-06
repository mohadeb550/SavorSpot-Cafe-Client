import { Outlet } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";


export default function Root() {
  

  return (
    <section >
   <Toaster/>
   <Navbar/>
    <Outlet/>
    <Footer/>
    </section>
  )
}

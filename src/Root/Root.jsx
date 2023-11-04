import { Outlet } from "react-router-dom";
import { Toaster } from "react-hot-toast";


export default function Root() {
  

  return (
    <section >
   <Toaster/>
   
    <Outlet/>
    
    </section>
  )
}

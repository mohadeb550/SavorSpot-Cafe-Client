
import { Link, NavLink ,useNavigate, } from "react-router-dom";
import toast from "react-hot-toast"
import useAuth from "../Hooks/useAuth";




export default function Navbar() {

  
  const { currentUser , logOut } = useAuth();
  const navigate = useNavigate();


  const navLinks = <>
   <li ><NavLink className={({isActive})=> isActive? ' font-semibold bg-lime-600 text-white/95 px-3 py-[3px] rounded ': '' } to='/'> Home </NavLink></li>
   <li ><NavLink className={({isActive})=> isActive? ' font-semibold bg-lime-600 text-white/95 px-3 py-[3px] rounded ': '' } to='/all-foods'> All Food Items </NavLink></li>
   <li ><NavLink className={({isActive})=> isActive? ' font-semibold bg-lime-600 text-white/95 px-3 py-[3px] rounded ': '' } to='/my-cart'> Blog </NavLink></li>
   <li ><NavLink className={({isActive})=> isActive? ' font-semibold bg-lime-600 text-white/95 px-3 py-[3px] rounded ': '' } to='/sign-up'> Sign Up </NavLink></li>
  
  </>

    const signOut = () => {
      logOut()
      .then(result => {
        toast.success('Logged Out !')
        navigate('/');
      })
      .catch(error => {
        toast.error('Something went wrong')

      })
    }

  return (
    <div className={`navbar bg-base-100 max-w-[1300px] mx-auto flex justify-between md:mt-3`}>
  <div className="navbar-start z-50" >
    <div className="dropdown z-50">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className={`menu-sm dropdown-content mt-2 p-2 shadow bg-base-100 rounded w-52 font-play `}>
        {navLinks}
      </ul>


    </div>
    <div className="flex items-center gap-1">
    <img src='/pngwing.com (14).png' className="w-9 md:w-12 lg:w-16"/>
    <p className="text-[18px]  md:text-xl lg:text-2xl font-semibold text-lime-600 font-play"> SavorSpot<span className="text-lime-500">Cafe</span> </p>
    </div>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="flex items-center gap-10 menu-horizontal px-1 font-play ">
      {navLinks}
    </ul>
  </div>


  <div className="dropdown dropdown-end flex items-center justify-center gap-2 z-50" data-aos ="fade-left">
    
        {!currentUser && <Link to='/login'><button className={`font-semibold  text-sm md:text-[16px] p-1 px-3 rounded bg-gray-50 hover:bg-gray-100 `}> Login </button></Link>}
        
        <div className="z-30 lg:w-10 rounded-full p-[2px] mr-2">
          {currentUser && <img tabIndex={0} src={currentUser?.photoURL || 'https://i.ibb.co/Ttgtb82/pngwing-com-15.png' } className="dropdown w-9 md:w-9 cursor-pointer rounded-full border border-lime-500 p-[1px]" />}

          {currentUser && 
         <ul tabIndex={0} className={`dropdown-content p-2 shadow bg-base-100 rounded w-52 font-play `}>
          {currentUser && <li className="font-semibold border p-2 rounded text-lime-600 flex items-center gap-2"> {currentUser?.displayName || 'User'}  <img tabIndex={0} src={currentUser?.photoURL || 'https://i.ibb.co/Ttgtb82/pngwing-com-15.png' } className="w-7 md:w-8 rounded-full" /></li>}
            
         <Link to='/my-added-foods'> <li className="font-semibold border p-2 transition-all rounded bg-lime-600 hover:bg-lime-700 text-white/90 text-sm flex items-center gap-2 "> My Added Foods  </li></Link>

         <Link to='/add-food'> <li className="font-semibold border p-2 transition-all rounded bg-lime-600 hover:bg-lime-700 text-white/90 text-sm flex items-center gap-2 "> Add Food  </li></Link>

         <Link> <li className="font-semibold border p-2 transition-all rounded bg-lime-600 hover:bg-lime-700 text-white/90 text-sm flex items-center gap-2 "> My Ordered Foods  </li></Link>
         <li className="cursor-pointer transition-all p-1 rounded hover:underline" onClick={()=> signOut() }> Log out</li> 

        </ul>}
        </div>
     
    </div>

</div>
  )
}

import { createBrowserRouter} from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Pages/Home";
import ErrorPage from "../Pages/ErrorPage";
import Login from "../Pages/Login";
import SignUp from "../Pages/SignUp";





 const router = createBrowserRouter([

    {path: "/", element: <Root/>, errorElement: <ErrorPage/>,  children:[

        {path:'/', element : <Home/>},
        {path:'/sign-up', element: <SignUp/> },
        {path:'/login', element: <Login/>}
    ]}
  
  ]);
  

export default router;
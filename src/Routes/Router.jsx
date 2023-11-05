import { createBrowserRouter} from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Pages/Home";
import ErrorPage from "../Pages/ErrorPage";
import Login from "../Pages/Login";
import SignUp from "../Pages/SignUp";
import AddFood from "../Pages/AddFood";
import MyAddedFoods from "../Components/MyAddedFoods";
import UpdateFood from "../Components/UpdateFood";
import AllFoods from "../Pages/AllFoods";
import FoodDetails from "../Components/FoodDetails";
import OrderPage from "../Components/PurchasePage";
import PurchasePage from "../Components/PurchasePage";





 const router = createBrowserRouter([

    {path: "/", element: <Root/>, errorElement: <ErrorPage/>,  children:[

        {path:'/', element : <Home/>},
        {path:'/sign-up', element: <SignUp/> },
        {path:'/login', element: <Login/>},
        {path: '/add-food', element: <AddFood/>},
        {path: '/my-added-foods', element: <MyAddedFoods/>},
        {path: '/update-food/:id', loader: ({params})=> fetch(`http://localhost:5000/single-food/${params.id}`) , element: <UpdateFood/>},
        {path: '/all-foods', element: <AllFoods/>},
        {path: '/food-details/:id', element: <FoodDetails/>},
        {path: '/purchase-page/:id', loader: ({params})=> fetch(`http://localhost:5000/single-food/${params.id}`), element: <PurchasePage/>},
    ]}
  
  ]);
  

export default router;
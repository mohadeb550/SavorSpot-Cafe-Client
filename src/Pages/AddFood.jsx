import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import useAuth from "../Hooks/useAuth";
import { Helmet } from "react-helmet";



export default function AddFood() {

    const { currentUser } = useAuth()
    const [ selectedCategory , setSelectedCategory ] = useState('');

    const { mutateAsync: addRequest } = useMutation({
      mutationKey: ['add-product'],
      mutationFn: async (food) => {
        return axios.post(`http://localhost:5000/add-food`, food)
      }
    })

    const handleAddFood = (e) => {
        e.preventDefault();
        const form = e.target;

        const foodName = form.name.value;
        const price = parseInt(form.price.value);
        const image1 = form.image1.value;
        const image2 = form.image2.value;
        const image3 = form.image3.value;

  const images = [
        {
          original: image1,
          thumbnail:image1,
        },
        {
          original: image2,
          thumbnail:image2,
        },
        {
          original: image3,
          thumbnail:image3,
        },
      ];

        const quantity = form.quantity.value;
        const category = selectedCategory;
        const country = form.country.value;
        const description = form.description.value;
        const addedUserEmail = currentUser.email;
        const madeBy = currentUser.displayName;
        const ordered = 0;


        addRequest({ foodName, category, price, images, country, quantity, description, madeBy , addedUserEmail, ordered})
        .then(data => {
          if(data.data.insertedId){
            toast.success('Food Added Successfully!')
          }
        }).catch(error => {
          toast.error('Something went wrong!')
        })
    }

    
    const handleSelectCategory = (e) => {
        setSelectedCategory(e.target.value);
    }

    
  return (
    <div className="hero bg-base-200 rounded pb-20 bg-[url('https://i.ibb.co/WDFtSWx/sincerely-media-4d-SXc-NTy-Xa-I-unsplash-1.jpg')] max-w-[1300px] mx-auto px-4">


      <Helmet>
        <title>  SavorSport Cafe / Add Food </title>
      </Helmet>

    <div className="hero-content flex-col  w-full gap-0 lg:px-16">

    
        <h1 className="text-[27px] lg:text-[32px] text-white/90 font-bold text-center mb-4 font-play "> Add New Product !</h1>

      <div className="rounded-lg flex-shrink-0 w-full  bg-base-100">
        <div className="p-7 lg:p-10">


        <form onSubmit={handleAddFood} className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            
          <div className="form-control ">
            <label className="label">
              <span className="label-text">Food Name </span>
            </label>
            <input type="text" placeholder="Food name" className="input input-bordered" name="name" />
          </div>

          <div className="form-control">
            <label className="label"> Food Category </label>
          <select className="select select-success w-full max-w-xs" onChange={handleSelectCategory}>
          <option disabled selected> Select Food Category </option>
             <option value='appetizers'> Appetizers </option>
            <option value='salads'> Salads and Bowls </option>
            <option value='sandwiches'> Sandwiches </option>
            <option value='pizzas'> Pizzas</option>
            <option value='burger'> Burger </option>
            <option value='bbq'>BBQ and Grilled </option>
            <option value='desserts'> Desserts </option>
            <option value='beverages'> Beverages </option>
            <option value='seasonal'>  Seasonal </option>
            <option value='vegan'> Vegan Options </option>
            <option value='breakfast'> Breakfast Classics </option>
            <option value='street'> Street Food </option>
            <option value='cheese'> Cheese and Charcuterie  </option>
            <option value='soup'>Soup </option>
            <option value='fusion'>International Fusion </option>
            <option value='vegetarian'> Vegetarian </option>
            </select>
          </div>


          <div className="form-control">
            <label className="label">
              <span className="label-text"> Price </span>
            </label>
            <input type="text" placeholder="price" className="input input-bordered" name="price" />
            <span className="text-red-500 text-sm p-1">  </span>
            </div>
           

            <div className="form-control mb-3">
            <label className="label">
              <span className="label-text"> Foods Images URL </span>
            </label>
            <div className="flex flex-col gap-2 border border-lime-500/90 rounded-md p-4">
            <input type="text" placeholder="Image 1" className="p-2 outline-none border-b" name="image1" />
            <input type="text" placeholder="Image 2" className="p-2 outline-none border-b" name="image2" />
            <input type="text" placeholder="Image 3" className="p-2 outline-none border-b" name="image3" />
            </div>
          </div>

            <div className="form-control mb-3">
            <label className="label">
              <span className="label-text"> Quantity </span>
            </label>
            <input type="number" placeholder="quantity" className="input input-bordered" name="quantity" />
          </div>

            <div className="form-control mb-3">
            <label className="label">
              <span className="label-text"> Food Origin (Country) </span>
            </label>
            <input type="text" placeholder="country" className="input input-bordered" name="country" />
          </div>


            <div className="form-control mb-3">
            <label className="label">
              <span className="label-text"> Description </span>
            </label>
            <textarea className="border p-2 rounded outline-none" name="description" rows={4} > short description... </textarea>
          </div>

          <div className="form-control mb-3">
            <label className="label">
              <span className="label-text"> Add By </span>
            </label>
          <div className="p-2 border border-lime-600/80 rounded-md flex flex-col">
          <input type="text" defaultValue={`Username : ${currentUser.displayName}`} className="outline-none " readOnly />
            <input type="text" defaultValue={`Email : ${currentUser.email}`} className="outline-none " readOnly/>
          </div>
          </div>
           
        
          <div className="form-control mt-6 lg:col-span-2">
            <button className="bg-lime-600 py-2 px-3 text-gray-100 rounded font-semibold transition-all hover:bg-lime-700 text-sm md:text-base" type="submit"> Add </button>
          </div>
        </form>


        </div>
      </div>
    </div>
  </div>
  )
}

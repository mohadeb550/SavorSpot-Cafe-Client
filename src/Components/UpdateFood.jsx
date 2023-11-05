import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import useAuth from "../Hooks/useAuth";
import { useLoaderData, useParams } from "react-router-dom";
import useAxios from "../Hooks/useAxios";



export default function UpdateFood() {

    const axios = useAxios()
    const { id } = useParams();
    const { currentUser } = useAuth()
    const singleFood = useLoaderData();

    const { mutateAsync: updateRequest } = useMutation({
      mutationKey: ['update-product'],
      mutationFn: async (updatedFood) => {
        return axios.put(`http://localhost:5000/update-food/${id}`, updatedFood)
      }
    })

    const handleUpdateFood = (e) => {
        e.preventDefault();
        const form = e.target;

        const foodName = form.name.value;
        const price = form.price.value;
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
        const country = form.country.value;
        const description = form.description.value;
        const addedUserEmail = currentUser.email;
        


        updateRequest({ foodName, price, images, country, quantity, description, addedUserEmail})
        .then(data => {
          if(data.data.modifiedCount > 0){
            toast.success('Updated Successfully!');
          }
        }).catch(error => {
          toast.error('Something went wrong!')
        })
    }


  const  { foodName, price, images, country, quantity, description } = singleFood;
   
    
  return (
    <div className="hero bg-base-200 rounded pb-20 bg-[url('https://i.ibb.co/WDFtSWx/sincerely-media-4d-SXc-NTy-Xa-I-unsplash-1.jpg')] max-w-[1300px] mx-auto px-4">
    <div className="hero-content flex-col  w-full gap-0 lg:px-16">

    
        <h1 className="text-[27px] lg:text-[32px] text-white/90 font-bold text-center mb-4 font-play "> Update Product !</h1>

      <div className="rounded-lg flex-shrink-0 w-full  bg-base-100">
        <div className="p-7 lg:p-10">


        <form onSubmit={handleUpdateFood} className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            
          <div className="form-control ">
            <label className="label">
              <span className="label-text">Food Name </span>
            </label>
            <input type="text" placeholder="Food name" defaultValue={foodName} className="input input-bordered" name="name" />
          </div>


          <div className="form-control">
            <label className="label">
              <span className="label-text"> Price </span>
            </label>
            <input type="text" placeholder="price" className="input input-bordered" name="price" defaultValue={price} />
            <span className="text-red-500 text-sm p-1">  </span>
            </div>
           

            <div className="form-control mb-3">
            <label className="label">
              <span className="label-text"> Foods Images URL </span>
            </label>
            <div className="flex flex-col gap-2 border border-lime-500/90 rounded-md p-4">
            <input type="text" placeholder="Image 1" className="p-2 outline-none border-b" name="image1" defaultValue={images[0]?.original} />
            <input type="text" placeholder="Image 2" className="p-2 outline-none border-b" name="image2" defaultValue={images[1]?.original} />
            <input type="text" placeholder="Image 3" className="p-2 outline-none border-b" name="image3" defaultValue={images[2]?.original}/>
            </div>
          </div>

            <div className="form-control mb-3">
            <label className="label">
              <span className="label-text"> Quantity </span>
            </label>
            <input type="text" placeholder="quantity" className="input input-bordered" name="quantity" defaultValue={quantity} />
          </div>

            <div className="form-control mb-3">
            <label className="label">
              <span className="label-text"> Food Origin (Country) </span>
            </label>
            <input type="text" placeholder="country" className="input input-bordered" name="country" defaultValue={country} />
          </div>


            <div className="form-control mb-3">
            <label className="label">
              <span className="label-text"> Description </span>
            </label>


            <textarea className="border p-2 rounded outline-none" name="description" rows={4} value={description} type='text' > short description </textarea>
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
            <button className="bg-lime-600 py-2 px-3 text-gray-100 rounded font-semibold transition-all hover:bg-lime-700 text-sm md:text-base" type="submit"> Update Changes </button>
          </div>
        </form>


        </div>
      </div>
    </div>
  </div>
  )
}

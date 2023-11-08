import axios from "axios"


const axiosSecure = axios.create({
    baseURL: 'https://savorspot-cafe-server.vercel.app',
    withCredentials: true,
})

export default function useAxios() {

  return axiosSecure;
}

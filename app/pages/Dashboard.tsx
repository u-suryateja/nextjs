"use client"
import { useRouter } from "next/navigation"
export default function Dashboard(){
    const router=useRouter()
    return(
        <div className="flex justify-center items-center h-screen text-4xl">
           
            <button onClick={()=>{router.push("/pages/displayProducts")}} className=" border-2 border-black bg-black text-white p-2 rounded-xl cursor-pointer">Products</button>
        </div>
    )
}
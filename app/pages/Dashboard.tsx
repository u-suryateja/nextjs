"use client"
import { useRouter } from "next/navigation"
import { ClassComponent, FuntionalCompnent } from "../components/ClassCompnent"
export default function Dashboard(){
    const router=useRouter()
    return(
        <div className="grid grid-cols-2">
           
            {/* <button onClick={()=>{router.push("/pages/displayProducts")}} className=" border-2 border-black bg-black text-white p-2 rounded-xl cursor-pointer">Products</button> */}
            <div className="flex justify-center items-center h-screen">
                <ClassComponent />
            </div>
            <div className="flex justify-center items-center h-screen">
                <FuntionalCompnent />
            </div>
        </div>
    )
}
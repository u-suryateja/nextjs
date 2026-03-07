"use client"
import { useParams, useSearchParams } from "next/navigation"
import { useRouter } from "next/navigation"

export default function RouteDemo(){
    const {productsIds} = useParams()
    const router=useRouter()
    // const searchParam=useSearchParams()
    // const page=searchParam.get("page")
    return(
        <div> 
            <h1 onClick={()=>{router.push("a/b")}}>this {productsIds}</h1>
        </div>
        
    )
}
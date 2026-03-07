"use client"
import { useParams} from "next/navigation"

export default function RouteDemo(){
    const {comment} = useParams()
    return(
        <div><h1>nested route {comment}</h1>
        </div>
        
    )
}
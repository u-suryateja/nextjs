"use Client"
import { useCallback, useState } from "react"



export default function Callback(){
    const [count,setCount]=useState(0)

    console.log("outer function")
    const handelSubmit=useCallback(()=>{
        console.log("it in inner function")
        setCount((count)=>count+1)
    },[])
    return(
        <div>
            <p>{count}</p>
            <button onClick={handelSubmit}>click</button>
        </div>
    )
}



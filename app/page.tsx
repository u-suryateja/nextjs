"use client"
import { createContext, useState } from "react"
import Demourl from "./practice/page";
// import Dashboard from "./pages/Dashboard";

export const User =createContext("")
export default function Home() {
  const [open, setOpen] = useState(false)
   const[names,setNames]=useState(true)
  const name=`${names?"ram":"sree"}`
  const age=23
 
  const handelClick=()=>{
    setNames(!names)
  }
  return (
    <User.Provider value={{name,age}}>
    <div className="flex justify-center items-center h-screen">
      {/* <Demourl /> */}
      <button onClick={handelClick}>Click</button>
    </div>
    </User.Provider>
  );
}

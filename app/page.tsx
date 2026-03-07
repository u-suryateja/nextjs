"use client"
import { useState } from "react"
import Link from "next/link";
import Model from "./components/Model";
// import Dashboard from "./pages/Dashboard";


export default function Home() {

  const [open, setOpen] = useState(false)
  return (
    <div className="flex justify-center items-center h-screen">
      <button
        className="border p-2" onClick={() => setOpen(true)}>Open Model</button>
      {/* <Dashboard /> */}
      {open && (
        <Model title="Model Component" close={()=>setOpen(false)}>
          <div>
            <h1>Props in nextJs by using the react docs :</h1>
            <p>1.Pass props to a component</p>
             <p>2.Read props from a component</p>
              <p>3.Passing JSX as children</p>
               <p>4.How props change over time</p>
          </div>
        </Model>
      )}
    </div>
  );
}

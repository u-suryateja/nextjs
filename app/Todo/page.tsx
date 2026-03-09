"use client"
import { useState } from "react"

type Todo = {
  todo: string
  id: number
}

export default function Todo(){
    const [inputTodo,setInputTodo]=useState("")
    const[storage,setStorage]=useState<Todo[]>([])

    const handelSubmit=()=>{
        const trimSpaces=inputTodo.trim()
        if(!trimSpaces) return
        setStorage([...storage,{todo:trimSpaces,id:Date.now()}])
        setInputTodo("")
    }
    return(
        <div className="flex flex-col  justify-center items-center h-screen">
            <div className="flex w-[500px] mb-4">
                <div className="flex-1">
                <input onChange={(e)=>setInputTodo(e.target.value)} value={inputTodo} className=" border-2 border-black h-[35px] w-full" placeholder="Add todos here..." type="text" name="" id="todoName" />
                </div>
                <div>
                <button onClick={handelSubmit} className="bg-black text-white h-[35px] w-[35px] text-xl font-medium" >+</button>
                </div>
            </div>
            <div className="flex"><p className=" font-medium text-2xl">Todos</p></div>
            {storage.length===0&&<div> No Todo created yet...!</div>}
            <div className=" w-[500px]">
                {storage.map((data)=>(
                    <div key={data.id}>
                        <div className="flex justify-between border-1 border-black ">                     
                               <p className="p-2 truncate">{data.todo}</p>
                               <div className="flex">
                               <button className="border-l-1 broder-black p-2 cursor-pointer">Delete</button>
                               <button className="border-l-1 broder-black p-2 cursor-pointer">Update</button>
                               </div>
                        </div>

                    </div>
                ))}
            </div>
        </div>
    )
}
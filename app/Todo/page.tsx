"use client"
import { useState, useEffect } from "react"

type Todo = {
    todo: string
    id: number
    status: boolean
}
export default function Todo() {
    const [inputTodo, setInputTodo] = useState("")
    const [storage, setStorage] = useState<Todo[]>([])
    const [updates, setUpdates] = useState(false)
    const [updatesId, setUpdatesId] = useState<number | null>(null)
    const [steps, setSteps] = useState("undone")
    const [isLoaded, setIsLoaded] = useState(false)
    const [time,setTime] = useState("")

    useEffect(()=>{
        setTime(new Date().toString())
        const interval = setInterval(()=>{
            setTime(new Date().toString())
        },1000)

        return ()=> clearInterval(interval)
    },[])

    useEffect(() => {
        const saved = localStorage.getItem("todos")
        if (saved) setStorage(JSON.parse(saved))
        setIsLoaded(true) 
    }, [])

    
    useEffect(() => {
        if (!isLoaded) return  
        localStorage.setItem("todos", JSON.stringify(storage))
    }, [storage, isLoaded])

    const handelSubmit = () => {
        const trimSpaces = inputTodo.trim()
        if (!trimSpaces) return
        if (updates === true) {
            const editTodo = storage.map((data) => data.id === updatesId ? { ...data, todo: trimSpaces } : data)
            setStorage(editTodo)
            setInputTodo("")
            setUpdatesId(null)
            setUpdates(false)
            return
        }
        setStorage([...storage, { todo: trimSpaces, id: Date.now(), status: false }])
        setInputTodo("")
    }
    const handelEdit = (id:number) => {
        const editName = storage.find((data) => data.id === id)
        if (editName) {
            setInputTodo(editName.todo)
            setUpdates(true)
            setUpdatesId(id)
        }
    }
    const handelDelete = (id:number) => {
        const deletes = storage.filter((data) => data.id !== id)
        setStorage(deletes)
    }
    const handelCheck = (id:number) => {
        const checks = storage.map((data) => data.id === id ? { ...data, status: !data.status } : data)
        setStorage(checks)

    }

    const doneLength=storage.filter((data)=>data.status===true).length
    const unDone=storage.filter((data)=>data.status===false).length
    
    return (
        <div className="flex flex-col  justify-center items-center h-screen p-4">
            <div className="flex w-full md:w-[500px] mb-4">
                <div className="flex-1">
                    <input onChange={(e) => setInputTodo(e.target.value)} value={inputTodo} className=" border-2 border-black h-[35px] w-full p-1" placeholder="Add todos here..." type="text" name="" id="todoName" />
                </div>
                <div>
                    <button onClick={handelSubmit} className="bg-black text-white h-[35px] w-[35px] text-xl font-medium" >+</button>
                </div>
            </div>
            <div>{time}</div>
            <div className="flex"><p className=" font-medium text-2xl">Todos</p></div>
            {/* {storage.length===0&&<div> No Todo created yet...!</div>} */}
            <div className="flex justify-around w-full md:w-[500px] mb-2">
                <button className="font-medium text-xl" style={{ borderBottom: `${steps === "undone" ? "1px solid black" : ""}` }} onClick={() => setSteps("undone")}>Ongoing</button>
                <button className="font-medium text-xl" style={{ borderBottom: `${steps === "done" ? "1px solid black" : ""}` }} onClick={() => setSteps("done")}>Finished</button>
            </div>
            <div className=" w-full md:w-[500px]">
                {steps === "undone" && storage.filter((data) => data.status === false).map((data) => (
                    <div key={data.id}>
                        <div>{unDone===0 && <div>
                            <p>No Todo are created yet...!</p>
                            </div>}</div>
                        <div className="flex justify-between border-1 border-black ">
                            <p className="p-2 break-words min-w-0 flex-1">{data.todo}</p>
                            <div className="flex">
                                <button className="material-symbols-outlined border-l-1 broder-black p-2 cursor-pointer" onClick={() => handelDelete(data.id)}>Delete</button>
                                <button className="material-symbols-outlined border-l-1 broder-black p-2 cursor-pointer" onClick={() => handelEdit(data.id)}>edit</button>
                                <button className="material-symbols-outlined border-l-1 broder-black p-2 cursor-pointer" onClick={() => handelCheck(data.id)}>check</button>
                            </div>
                        </div>

                    </div>
                ))}
            </div>
            <div className="w-full md:w-[500px]">
                {steps === "done" && storage.filter((data) => data.status === true).map((data) => (
                    <div key={data.id}>
                        <div className="flex justify-between border-1 border-black ">
                            <p className="p-2 break-words min-w-0 flex-1">{data.todo}</p>
                            <div className="flex">
                                <button className="material-symbols-outlined border-l-1 broder-black p-2 cursor-pointer" onClick={() => handelDelete(data.id)}>Delete</button>
                                <button className="material-symbols-outlined border-l-1 broder-black p-2 cursor-pointer" onClick={() => handelEdit(data.id)}>edit</button>
                                <button className="material-symbols-outlined border-l-1 broder-black p-2 cursor-pointer" onClick={() => handelCheck(data.id)}>Undo</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
                                    {/* <div>{doneLength===0 && <div>
                            <p>No Todo are completed yet...!</p>
                            </div>}</div> */}

                            {steps==="done"&& doneLength===0?"No Todo are completed yet...!":""}
                            {steps==="undone"&& unDone===0?"No Todo are created yet...!":""}
        </div>
    )
}
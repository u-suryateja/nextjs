"use client"
import { time } from "console"
import { useRef, useState } from "react"



export default function Stopwatch() {
    const intervalId = useRef(null)
    const [timer, setTimer] = useState(0)
    const running=useRef("stop")
    const handelStart = () => {

      if (intervalId.current !== null) return
        intervalId.current = setInterval(() => {
            setTimer((prv) => prv + 1)
        }, 1000)

    }
    const handelStop = () => {
        clearInterval(intervalId.current)
         intervalId.current = null

    }
    const handelReset = () => {
        clearInterval(intervalId.current)
         intervalId.current = null
        setTimer(0)
    }

    return (
        <div className="grid grid-cols-3 w-[250px] sm:w-[350px] bg-white ">
            <div className="col-span-3 flex justify-center items-center h-[200px] border-1 border-black ">
                <p className="flex text-6xl  font-bold">{timer}</p>
                </div>
            <div className="col-span-3 flex justify-around h-[50px]">
            <button className="cursor-pointer border-1 border-black w-full" onClick={handelStart}>Start</button>
            <button className="cursor-pointer border-1 border-black w-full" onClick={handelStop}>Stop</button>
            <button className="cursor-pointer border-1 border-black w-full" onClick={handelReset}>Reset</button></div>
        </div>
    )
}
import { Component, useState } from "react";



export class ClassComponent extends Component<{},{count:number}>{
    constructor(props:{}){
        super(props);
        this.state = {
            count:120
        };
    }
    render(){
        return(
            <div className="flex flex-col justify-center items-center h-screen">This is Class Component
                <p className="text-xl text-600 font-semibold">{this.state.count}</p>
                <button className="cursor-pointer bg-black text-white p-4 rounded-xl"
                 onClick={()=>this.setState({count : this.state.count+1})}>Increment Count</button>
            </div>
        )
    }
}

export function FuntionalCompnent(){
    const[count,setCount]=useState(10)
    return(
        <div className="flex flex-col justify-center items-center h-screen">This is Functional Component
            <p className="text-xl text-600 font-semibold">{count}</p>
            <button className="cursor-pointer bg-black text-white p-4 rounded-xl"
             onClick={()=>setCount(count-1)}>Decrement Count</button>
        </div>
    )
}
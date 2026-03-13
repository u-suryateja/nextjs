import { useState } from "react";
import Input from "./Input";

export default function Form() {
    const [name, setName] = useState("") 
    const[count,setCount]=useState("")
    const [error, SetError] = useState("")
    const handelChange = (e) => {
        const {name,count} = e.target
        setName(names)
        if (names === "") {
            SetError("this error")
        } else if (names.length < 6) {
            SetError("required length")
        } else {
            SetError("")
        }
    }
    return (

        <div>
            <div>
                <Input value={name} onChange={handelChange} />
                {error}

            </div>
            <div>
                <select value={count} onChange={handelChange}>
                    <option>Please select one tag</option>
                    <option value="name">name</option>
                    <option value="roll">Roll</option>
                </select>
            </div>
        </div>

    )
}
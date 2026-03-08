"use client"
import Link from "next/link";
import Repo from "./[...nameId]/page";
import { useContext } from "react";
import {User} from "../page"

export default function Demourl(){
    const {name,age}=useContext(User)
    return(
        <div>
            <Link href={"/practice/name?page=1"}>
            <button>Hello World:{name}</button>
            {/* <Repo user={user}/> */}
            </Link>
        </div>
    )
}
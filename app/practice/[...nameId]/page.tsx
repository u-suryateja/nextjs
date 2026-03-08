"use client"
import { useParams, useSearchParams } from "next/navigation"


export default function Repo(){
    const {nameId}= useParams()
    const searchQuery= useSearchParams()
    const page=searchQuery.get("page")
    return(
        <div><p>NAme:{nameId?.[0]}</p><p>page:{page}</p><p>userName:{name}</p></div>
    )
}
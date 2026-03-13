"use client"
import { useEffect, useState } from "react"




export default  function Promises() {
    const[user,setUser]=useState(0)
    const[product,setProduct]=useState(0)
    const[comments,setComments]=useState(0)

    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/posts").then(res=>res.json()).then(data=>data.length).then(num=>setProduct(num))
        .catch(err=>console.log(err)).finally(()=>console.log("this final"))
    },[])
    useEffect(()=>{
        const responce=async()=>{
            try{
                 const res=await fetch("https://jsonplaceholder.typicode.com/users")
            const convert=await res.json()
            const lens=convert.length
            setUser(lens)
            }catch(err){
                console.log(err)
            }finally{
                console.log("this is final step to get data")
            }
        }
        responce()
    },[])
    // useEffect(()=>{
    //     fetch("",function(err,res){
    //         if(err){
    //             console.log(err)
    //         }else{
    //             res.json(function(err,data){
    //                 if(err){
    //                     console.log(err)
    //                 }else{
    //                     const length=data.length
    //                     if(err){
    //                         console.log(err)
    //                     }else{
    //                         setComments(function(err,num){
    //                             if(err){
    //                                 console.log(err)
    //                             }else{
    //                                 console.log("this is the final")
    //                             }
    //                         })
    //                     }
    //                 }
    //             })
    //         }
    //     })
    // },[])
    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-2 w-screen h-screen">
                <div className="flex flex-col  justify-center items-center w-full">
                    <p>uses Post Count</p>
                    <p>{user}</p>
                </div>
                <div className="flex flex-col  justify-center items-center w-full">
                    <p>uses Product Count</p>
                    <p>{product}</p>
                </div>
                <div className="flex flex-col  justify-center items-center w-full ">
                    <p>uses Product Count</p>
                    <p>product</p>
                </div>
                <div className="flex flex-col  justify-center items-center w-full">
                    <p>uses Product Count</p>
                    <p>product</p>
                </div>

            </div>
        </>
    )
}
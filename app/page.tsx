"use client"
import { createContext } from "react";
import DisplayProducts from "./displayProducts/page";
import Todo from "./Todo/page";
import Input from "./components/Input";
import Button from "./components/Button";
import Form from "./components/Form";
import Promises from "./components/Promises";
import Callback from "./components/Callback";
import Stopwatch from "./components/Stopwatch";

const User=createContext("suryateja")

export default function Home() {


  const handelSubmit=()=>{
    confirm("this suryateja")
  }
  const name="Teja"
  return (
    <User.Provider value={name}>
    <div className="flex justify-center items-center h-screen bg-white">
      {/* <DisplayProducts /> */}
      {/* <Todo /> */}
      {/* <Form /> */}
      {/* <Promises /> */}
      {/* <Callback /> */}
      <Stopwatch />
    </div>
    </User.Provider>
  );
}

"use client"
import { createContext } from "react";
import DisplayProducts from "./displayProducts/page";
import Todo from "./Todo/page";

const User=createContext("suryateja")

export default function Home() {
  const name="Teja"
  return (
    <User.Provider value={name}>
    <div>
      {/* <DisplayProducts /> */}
      <Todo />
    </div>
    </User.Provider>
  );
}

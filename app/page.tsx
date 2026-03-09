"use client"
import { createContext } from "react";
import DisplayProducts from "./displayProducts/page";

const User=createContext("suryateja")

export default function Home() {
  const name="Teja"
  return (
    <User.Provider value={name}>
    <div>
      <DisplayProducts />
    </div>
    </User.Provider>
  );
}

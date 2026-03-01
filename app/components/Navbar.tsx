"use client"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { menuItems } from "@/menuItems"

export default function Navbar() {
    const [expand, setExpand] = useState(true)
    const router = useRouter()
    return (
        <div className={`flex  flex-col transition-all duration-300  h-screen border-r`} style={{ width: expand ? "var(--sidebar-width-expanded)" : "var(--sidebar-width-collapsed)", background: "var(--sidebar-bg)", borderColor: "var(--sidebar-border)"}}>
            <div className="grid grid-cols-4 items-center justify-items-center cursor-pointer sidebar-divider">
                <div className={` ${!expand && "col-span-4"}`} >
                    <Link href="/">
                        <span className="material-symbols-outlined mt-1 " style={{ fontSize: expand ? "30px" : "30px", padding: expand ? "2px" : "0px" }}>
                            home
                        </span>
                    </Link>
                </div>
                {expand && <div className="col-span-3" onClick={() => router.push("/boom")}>Navbar</div>}
            </div>

            <span className=" border-r"></span>
            <div className=" flex-1 overflow-y-auto overflow-x-hidden no-scrollbar space-y-1 mt-1">

                {menuItems.map((data) => (
                    <div key={data.id}>
                        <div className="grid grid-cols-4 items-center justify-items-center">
                            <div className={` ${!expand && "col-span-4"}`}>
                                <span className="material-symbols-outlined" style={{
                                    fontSize: "var(--icon-size)",
                                    color: "var(--sidebar-text)",
                                }}>
                                    {data.icon}
                                </span>
                            </div>
                            {expand && <div className="col-span-3 mb-1">{data.title}</div>}

                        </div>

                    </div>
                ))}

            </div>
        
            <div className=" flex gap-2">

                <div className="grid grid-cols-4 items-center justify-items-center p-2 sidebar-divider-footer">
                    <div className={`material-symbols-outlined  cursor-pointer ml-1 ${!expand && "col-span-4"} transition-all duration-300`} style={{ fontSize: expand ? "30px" : "30px" }} onClick={() => setExpand(!expand)} >
                        left_panel_open
                    </div>
                    {expand && <div className="col-span-3 transition-all duration-300">colopase</div>}

                </div>

            </div>
        </div>
    )
}



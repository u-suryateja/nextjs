"use client"
import Footer from "@/app/components/Footer"
import { useRouter } from "next/navigation"
import { useEffect, useRef, useState } from "react"

type Product = {
  id: number
  title: string
  thumbnail: string
  tags: string[]
}

export default function DisplayProducts() {
    const [products, setProducts] = useState<Product[]>([])
    const [highlight, setHighlight] = useState("low")
    const [loading,setLoading]=useState(false)
    const [searchIn,setSearchIn]=useState("")
    const searchButton = useRef(false)

    const router=useRouter();

    useEffect(() => {
        const fetchProduts = async () => {
            try {
                setLoading(true)
                const data = await fetch("https://dummyjson.com/products")
                const res: { products: Product[] } = await data.json()
                console.log(res)
                setProducts(res.products)
            } catch (error) {
                console.log("eoor to fetch", error)
            }finally{
                setLoading(false)
            }
        }
        fetchProduts();
    }, [])

    const handelSearch=async()=>{
        if(searchButton.current) return
        searchButton.current=true
        try{
            setLoading(true)
            const getSearchData=await fetch(`https://dummyjson.com/products/search?q=${searchIn}`)
            const res=await getSearchData.json()
            setProducts(res.products)
        }catch(err){
            console.log("error while featching",err)
        }finally{
            searchButton.current=false
            setLoading(false)
        }

    }

    return (

        <div>{loading?(<div className="flex justify-center items-center h-screen">
            <h1>Loading...</h1>
        </div>):(<div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4  p-4 max-w-[1250px] mx-auto">
                <div className="col-span-4">
                    <div className="flex flex-col">
                        <div className="flex justify-between">
                        <h1 className="text-xl text-600 font-semibold">Products</h1>
                        <button className="bg-black border rounded-[5px] w-[150px] h-[35px] cursor-pointer text-white" onClick={()=>router.push("/Todo")}>Plan Purchase</button>
                        </div>
                        <div className="flex justify-center">
                            <input className="h-[35px] border-2 border-black p-1 rounded-[5px]" type="text" placeholder="Search here..." onChange={(e)=>setSearchIn(e.target.value)} value={searchIn}/>
                            <button className="bg-black border rounded-[5px] w-[100px] h-[35px] cursor-pointer text-white" onClick={handelSearch}>Search</button>
                        </div>
                        <div className="flex gap-4 mb-3.5">
                            <p>Sort By :</p>
                            <div className={`${highlight==="low" ? "border-b-2 broder-blue":"border-transparent"}`}>
                                <p className="cursor-pointer" onClick={()=>{setHighlight("low")}}>Price -- Low to High</p>
                            </div>
                            <div className={`${highlight==="high" ? "border-b-2 broder-blue":"border-transparent"}`}>
                                <p className="cursor-pointer" onClick={()=>{setHighlight("high")}}>Price -- High to Low</p>
                            </div>
                        </div>
                    </div>


                </div>
                {products.map((data) => (
                    <div className="w-full h-[350px] bg-white border border-gray-200  p-4 cursor-pointer shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300" onClick={()=>{router.push(`displayProducts/${data.id}`)}} key={data.id}>
                        <div className="w-full h-[250px]"><img src={data.thumbnail} alt={data.title} className="w-full h-full object-cover"/></div>
                        <div className="flex-1">
                            <p>{data.title}</p>
                            <div className="flex flex-wrap gap-2">
                                {data.tags.map((tag,index)=>(
                                    <div className="border-2  rounded bg-black" key={index}>
                                        <p className="text-white">{tag}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            </div>)}
            <Footer />
        </div>
    )
}
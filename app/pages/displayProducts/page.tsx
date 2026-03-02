"use client"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"

type Product = {
  id: number
  title: string
  thumbnail: string
  tags: string[]
}

export default function displayProducts() {
    const [products, setProducts] = useState<Product[]>([])
    const [highlight, setHighlight] = useState("low")
    const [loading,setLoading]=useState(false)

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

    return (

        <div>{loading?(<div className="flex justify-center items-center h-screen">
            <h1>Loading...</h1>
        </div>):(<div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4  p-4 max-w-[1250px] mx-auto">
                <div className="col-span-4">
                    <div className="flex flex-col">
                        <h1 className="text-xl text-600 font-semibold">Products</h1>
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
        </div>
    )
}
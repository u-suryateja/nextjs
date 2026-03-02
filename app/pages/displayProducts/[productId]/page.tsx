"use client"
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function GetProductId() {
  const { productId } = useParams();

  const [productById, setProductById] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!productId) return;

    const fetchDetails = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `https://dummyjson.com/products/${productId}`
        );
        const data = await response.json();
        setProductById(data);
      } catch (error) {
        console.log("error while getting data", error);
      } finally {
        setLoading(false);
      }
    };

    fetchDetails();
  }, [productId]);

  return (
    <div className="min-h-screen">
      {loading && (
        <div className="flex justify-center items-center h-screen">
          Loading...
        </div>
      )}

      {!loading && productById && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8 max-w-[1200px] mx-auto">
          <div className="flex justify-center">
            <img
              src={productById.thumbnail}
              alt={productById.title}
              className="w-full max-w-[400px] object-cover"
            />
          </div>

          <div>
            <h1 className="text-2xl font-bold">
              {productById.title}
            </h1>
            <p className="mt-4 text-gray-600">
              {productById.description}
            </p>
            <p className="mt-4 text-xl text-600 font-semibold">
              ${productById.price}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
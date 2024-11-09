"use client"
import { ProductContext } from "@/context/ProductProvider";
import { Skeleton } from "@/components/ui/skeleton"
import { useContext } from "react";
import { useQuery } from "react-query";
import ProductCard from "./ProductCard";



export default function Home() {
  const { products } = useContext(ProductContext)

  const { data, isLoading, isError } = useQuery({
    queryKey: "products", queryFn: async () => {
      const res = await fetch("https://fakestoreapi.com/products")
      const data = await res.json();
      return data;
    }
  })

  return (
    <main>
      <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-4 px-12 py-4 my-20 gap-10 md:gap-7 ">
        {/* {
          products.map((product) => (
            <ProductCard product={product} key={product.id} />
          ))
        } */}
        {
          isLoading ? ([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20].map((item) => (
            <Skeleton key={item} className="w-full h-[400px] rounded-lg " />
          ))

          ) : isError ? (
            <p>Error</p>
          ) : (
            data.map((product) => (
              <ProductCard product={product} key={product.id} />
            ))
          )
        }
      </div>
    </main>
  );
}

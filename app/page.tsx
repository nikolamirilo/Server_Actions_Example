import { addNewProduct } from "@/serverActions/products";
import React, { cache } from "react";

export type Product = {
  id?: string;
  title: string;
  price: string;
};
const Home = async () => {
  const res = await fetch(
    "https://64b3123438e74e386d55d79b.mockapi.io/products",
    {
      cache: "no-cache",
      next: {
        tags: ["products"],
      },
    }
  );
  const data = await res.json();
  return (
    <div className="w-full h-full flex flex-col justify-start items-center p-12">
      <form action={addNewProduct} className="flex flex-col w-2/5 gap-2">
        <input
          type="text"
          name="product"
          placeholder="Enter product name"
          className="border-2  border-green-500 p-2  focus:outline-green-500"
        />
        <input
          type="text"
          name="price"
          placeholder="Enter product price"
          className="border-2  border-green-500 p-2 focus:outline-green-500"
        />
        <button className="bg-red-500 p-2 text-white">Add Product</button>
      </form>
      <div className="w-full h-full flex flex-col justify-start items-center p-12 gap-12">
        <h1 className="text-4xl font-bold">Products</h1>
        <div className="flex flex-wrap w-full min-h-screen gap-4">
          {data?.map((product: Product) => (
            <div
              className="flex flex-col border-2 w-64 border-green-500 items-center justify-center"
              key={product.id}
            >
              <h2>{product.title}</h2>
              <h2>{product.price}</h2>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;

"use server"

import { Product } from "@/app/page"
import { revalidateTag } from "next/cache"

export const addNewProduct = async (e:FormData) => {

    const title = e.get("product")?.toString()
    const price = e.get("price")?.toString()

    if(!title || !price) return

    const newProduct : Product = {
        title,
        price
    }

    await fetch("https://64b3123438e74e386d55d79b.mockapi.io/products", {
        method: "POST",
        body: JSON.stringify(newProduct),
        headers: {
            "Content-Type": "application/json"
        }
    })

    revalidateTag("products")
}
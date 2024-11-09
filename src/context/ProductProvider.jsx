"use client";
import React, { createContext, useState } from "react";

export const ProductContext = createContext();

const ProductProvider = ({ children }) => {
	const [products, setProducts] = useState([
		{
			id: 1,
			title: "Product 1",
			price: 100,
			image:
				"https://images.unsplash.com/photo-1720048169707-a32d6dfca0b3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzMXx8fGVufDB8fHx8fA%3D%3D",
		},
		{
			id: 2,
			title: "Product 2",
			price: 200,
			image:
				"https://images.unsplash.com/photo-1720048169707-a32d6dfca0b3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzMXx8fGVufDB8fHx8fA%3D%3D",
		},
		{
			id: 3,
			title: "Product 3",
			price: 300,
			image:
				"https://images.unsplash.com/photo-1720048169707-a32d6dfca0b3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzMXx8fGVufDB8fHx8fA%3D%3D",
		},
	]);
	return (
		<ProductContext.Provider value={{ products }}>
			{children}
		</ProductContext.Provider>
	);
};

export default ProductProvider;

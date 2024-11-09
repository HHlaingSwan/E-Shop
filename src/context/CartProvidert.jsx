"use client";

import { createContext, useState } from "react";

export const CartContext = createContext();

const CartProvidert = ({ children }) => {
	const [carts, setCarts] = useState([]);
	const addToCart = (product) => {
		const checkProduct = carts.find((item) => item.id === product.id);
		if (checkProduct) {
			product.quantity += 1;
		} else {
			product.quantity = 1;
		}
		setCarts([...carts, product]);
	};
	return (
		<CartContext.Provider value={{ carts, addToCart }}>
			{children}
		</CartContext.Provider>
	);
};

export default CartProvidert;

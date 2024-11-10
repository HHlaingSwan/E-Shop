"use client";

import { createContext, useState } from "react";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
	const [carts, setCarts] = useState([]);
	const addToCart = (product) => {
		const checkProduct = carts.find((pt) => pt.id === product.id);
		if (checkProduct) {
			// Update quantity immutably
			setCarts(
				carts.map((c_pt) =>
					c_pt.id === product.id
						? { ...c_pt, quantity: c_pt.quantity + 1 }
						: c_pt
				)
			);
		} else {
			// Add product with initial quantity
			setCarts([...carts, { ...product, quantity: 1 }]);
		}
	};
	const increaseQuantity = (id) => {
		setCarts(
			carts.map((item) =>
				item.id === id ? { ...item, quantity: item.quantity + 1 } : item
			)
		);
	};
	const decreaseQuantity = (id) => {
		setCarts(
			carts.map((item) =>
				item.id === id ? { ...item, quantity: item.quantity - 1 } : item
			)
		);
	};
	return (
		<CartContext.Provider
			value={{ carts, addToCart, increaseQuantity, decreaseQuantity }}>
			{children}
		</CartContext.Provider>
	);
};

export default CartProvider;

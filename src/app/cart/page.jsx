"use client";
import { CartContext } from "@/context/CartProvidert";
import React, { useContext } from "react";

const Cart = () => {
	const { carts } = useContext(CartContext);
	return (
		<div className='my-24 px-8'>
			<h1 className='text-2xl font-bold text-center'>Shopping Cart</h1>
			{carts.map((cart) => (
				<ol key={cart.id}>
					<li>
						{cart.title} / {cart.quantity}
					</li>
				</ol>
			))}
		</div>
	);
};

export default Cart;

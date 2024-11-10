"use client";
import { CartContext } from "@/context/CartProvider";
import React, { useContext } from "react";
import ShoppingCartList from "../ShoppingCartList";
import PaymentMethod from "../PaymentMethod";

const Cart = () => {
	const { carts } = useContext(CartContext);
	return (
		<div className='my-24 px-4 w-full h-full flex flex-col lg:flex-row '>
			{carts.length === 0 ? (
				<div className='w-full h-full flex justify-center items-center'>
					<h1 className='text-3xl font-bold '>Cart is empty</h1>
				</div>
			) : (
				<>
					<ShoppingCartList products={carts} />
					<PaymentMethod />
				</>
			)}
		</div>
	);
};

export default Cart;

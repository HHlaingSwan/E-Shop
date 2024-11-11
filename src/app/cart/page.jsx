"use client";
import { CartContext } from "@/context/CartProvider";
import React, { useContext, useEffect } from "react";
import ShoppingCartList from "../ShoppingCartList";
import PaymentMethod from "../PaymentMethod";
import Link from "next/link";

const Cart = () => {
	const { carts } = useContext(CartContext);
	return (
		<div className='my-28 px-4 w-full h-full flex flex-col lg:flex-row '>
			{carts.length === 0 ? (
				<div className='w-full h-full flex flex-col justify-center items-center'>
					<h1 className='text-3xl font-bold h-24 '>Cart is empty</h1>
					<Link href='/'>
						<button className='p-2 w-24 bg-black text-white rounded-lg '>
							Shop Now
						</button>
					</Link>
					<PaymentMethod />
				</div>
			) : (
				<>
					<div className='w-full flex flex-col xl:flex-row '>
						<ShoppingCartList products={carts} />
						<PaymentMethod />
					</div>
				</>
			)}
		</div>
	);
};

export default Cart;

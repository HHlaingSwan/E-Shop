"use client";
import { CartContext } from "@/context/CartProvidert";
import React, { useContext } from "react";

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
					<div className='w-full lg:w-2/3 p-10 '>
						<h1 className='text-3xl text-center mb-8 '>Shopping Cart List</h1>
						{carts.map((cart) => (
							<div
								className='flex justify-between items-center my-5 px-12 '
								key={cart.id}>
								<div className='flex gap-5 items-center'>
									<img
										src={cart.image}
										alt={cart.title}
										className='w-20 h-20 object-cover'
									/>
									<div>
										<h1>{cart.title}</h1>
										<p>${cart.price}</p>
									</div>
								</div>
								<div>
									<p>${cart.price * cart.quantity}</p>
									<p>{cart.quantity}</p>
								</div>
							</div>
						))}
					</div>
					<div className='w-full lg:w-1/3 p-10 '>
						<h1>Payment Method</h1>
					</div>
				</>
			)}
		</div>
	);
};

export default Cart;

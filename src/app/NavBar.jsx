"use client";
import { CartContext } from "@/context/CartProvider";
import Link from "next/link";
import React, { useContext } from "react";

const NavBar = () => {
	const { carts } = useContext(CartContext);
	return (
		<>
			<div className='flex justify-between z-50 fixed top-0  left-0 text-white items-center  p-5 md:p-10 bg-black   w-full h-24'>
				<div>
					<Link href='/'>
						<h1 className='text-2xl font-bold'>Next E-Commerce</h1>
					</Link>
				</div>
				<div>
					<Link href='/cart'>
						<h1 className='text-xl font-bold'>
							Cart{" "}
							<span className='text-red-600 text-lg text-start'>
								{carts.length}
							</span>
						</h1>
					</Link>
				</div>
			</div>
		</>
	);
};

export default NavBar;

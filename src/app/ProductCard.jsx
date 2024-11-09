import { Button } from "@/components/ui/button";
import { CartContext } from "@/context/CartProvidert";
import Image from "next/image";
import Link from "next/link";
import React, { useContext } from "react";

const ProductCard = ({ product }) => {
	const { addToCart } = useContext(CartContext);
	const handleClick = () => {
		addToCart(product);
	};
	return (
		<>
			<div className=' w-80 bg-base-100 p-5 shadow-xl'>
				<figure className='w-full h-64 overflow-hidden rounded-lg '>
					<Image
						className='object-fill w-full h-full'
						priority={false}
						src={product.image}
						alt={product.title}
						width={19200}
						height={1080}
					/>
				</figure>
				<div className=' mt-3 flex flex-col  gap-2'>
					<Link
						href={`/product/${product.id}`}
						className='h-20'>
						<h2 className='text-sm'>{product.title}</h2>
						<p>${product.price}</p>
					</Link>
					<Button
						className=' p-2 w-2/5 bg-black text-white'
						onClick={handleClick}
						variant='outline'>
						Buy Now
					</Button>
				</div>
			</div>
		</>
	);
};

export default ProductCard;

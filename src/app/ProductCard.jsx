import { Button } from "@/components/ui/button";
import { CartContext } from "@/context/CartProvider";
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
			<div className=' w-64  p-5 shadow-xl'>
				<figure className='w-full h-64 overflow-hidden rounded-lg '>
					<Image
						className='object-fill w-full h-full'
						priority={false}
						src={product.image}
						alt={product.title}
						width={1920}
						height={1080}
					/>
				</figure>
				<div className=' mt-3 flex flex-col  gap-2'>
					<Link
						href={`/product/${product.id}`}
						className='h-24'>
						<h2 className='text-sm'>{product.title}</h2>
						<p>${product.price}</p>
					</Link>
					<Button
						className=' p-2 w-2/5 bg-black text-white rounded-lg '
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

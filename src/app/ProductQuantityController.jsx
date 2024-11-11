import React, { useContext } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { CartContext } from "@/context/CartProvider";

const ProductQuantityController = ({ product }) => {
	const { increaseQuantity, decreaseQuantity } = useContext(CartContext);
	const increaseHandler = () => {
		increaseQuantity(product.id);
	};
	const decreaseHandler = () => {
		decreaseQuantity(product.id);
	};
	return (
		<>
			<div className='w-1/5 flex flex-row sm:flex-col items-center gap-2 '>
				<button
					onClick={increaseHandler}
					disabled={product.quantity === 15}
					className='cursor-pointer'>
					<ChevronUp />
				</button>
				<p>{product.quantity}</p>
				<button
					onClick={decreaseHandler}
					disabled={product.quantity === 1}
					className='cursor-pointer'>
					<ChevronDown />
				</button>
			</div>
		</>
	);
};

export default ProductQuantityController;

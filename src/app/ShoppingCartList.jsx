import { Trash } from "lucide-react";
import ProductQuantityController from "./ProductQuantityController";
import { useContext, useEffect } from "react";
import { CartContext } from "@/context/CartProvider";

const ShoppingCartList = ({ products }) => {
	const { deleteItem } = useContext(CartContext);
	useEffect(() => {
		console.log(`Updated products count: ${products.length}`);
	}, [products]);

	return (
		<>
			<div className='w-full xl:w-3/5  py-10 '>
				<h1 className='text-3xl font-bold text-center mb-8'>
					Shopping Cart List
				</h1>
				<div className='max-w-2xl mx-auto'>
					{products.map((product) => (
						<div
							className='flex sm:flex-row  flex-col  justify-between items-center gap-4 bg-white shadow-md rounded-lg my-5 p-5'
							key={product.id}>
							<div className='flex gap-5 items-center w-full md:w-2/3 '>
								<img
									src={product.image}
									alt={product.title}
									className='w-20 h-20 object-cover rounded-lg'
								/>
								<div className='text-center '>
									<h2 className='text-base md:text-lg font-semibold'>
										{product.title}
									</h2>
									<p className='text-sm text-gray-500'>
										${product.price.toFixed(2)}
									</p>
								</div>
							</div>
							<div className='flex justify-between items-center w-full md:w-1/3 '>
								<ProductQuantityController product={product} />
								<p className='font-semibold text-lg'>
									${(product.price * product.quantity).toFixed(2)}
								</p>
								<button
									onClick={() => deleteItem(product.id)}
									className='bg-red-500 flex justify-between hover:bg-red-600 text-white p-2 rounded-full transition-all duration-200 ease-in-out'>
									<Trash className='w-5 h-5' />
								</button>
							</div>
						</div>
					))}
					<div className='w-full flex justify-between items-center px-12'>
						<div className='text-xl font-mono'>
							Items:{""}
							{products.reduce((total, product) => total + product.quantity, 0)}
						</div>
						<div className='text-xl font-mono'>
							Total: $
							{products
								.reduce(
									(total, product) => total + product.price * product.quantity,
									0
								)
								.toFixed(2)}
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default ShoppingCartList;

import ProductQuantityController from "./ProductQuantityController";

const ShoppingCartList = ({ products }) => {
	return (
		<>
			<div className='w-full lg:w-3/5 py-10 '>
				<h1 className='text-3xl text-center mb-8 '>Shopping Cart List</h1>
				{products.map((product) => (
					<div
						className='flex justify-between items-center my-5 px-12 '
						key={product.id}>
						<div className='flex gap-5 items-center w-3/5'>
							<img
								src={product.image}
								alt={product.title}
								className='w-20 h-20 object-cover'
							/>
							<div>
								<h1 className='text-xs md:text-base'>{product.title}</h1>
								<p>${product.price}</p>
							</div>
						</div>
						<ProductQuantityController product={product} />
						<div className='w-1/5'>
							<p>${(product.price * product.quantity).toFixed(2)}</p>
						</div>
					</div>
				))}
			</div>
		</>
	);
};

export default ShoppingCartList;

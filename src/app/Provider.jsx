"use client";
import CartProvider from "@/context/CartProvider";
import ProductProvider from "@/context/ProductProvider";
import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

const Provider = ({ children }) => {
	const quaryClient = new QueryClient();
	return (
		<QueryClientProvider client={quaryClient}>
			<ProductProvider>
				<CartProvider>{children}</CartProvider>
			</ProductProvider>
			<ReactQueryDevtools initialIsOpen={false} />
		</QueryClientProvider>
	);
};

export default Provider;

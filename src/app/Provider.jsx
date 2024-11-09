"use client";
import CartProvidert from "@/context/CartProvidert";
import ProductProvider from "@/context/ProductProvider";
import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

const Provider = ({ children }) => {
	const quaryClient = new QueryClient();
	return (
		<QueryClientProvider client={quaryClient}>
			<ProductProvider>
				<CartProvidert>{children}</CartProvidert>
			</ProductProvider>
			<ReactQueryDevtools initialIsOpen={false} />
		</QueryClientProvider>
	);
};

export default Provider;

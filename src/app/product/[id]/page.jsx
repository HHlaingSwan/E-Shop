import React from "react";

const PageDatail = async ({ params }) => {
	console.log({ params });

	const id = await params.id;
	return <div>{id}</div>;
};

export default PageDatail;

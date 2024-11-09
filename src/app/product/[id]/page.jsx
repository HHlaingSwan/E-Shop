import React from "react";

const PageDatail = async ({ params }) => {
	const id = await params.id;
	return <div>{id}</div>;
};

export default PageDatail;

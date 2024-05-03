import React from "react";

interface Props {
	variant: "purple" | "orange";
	count: number;
}

const Astro: React.FC<Props> = ({ variant, count }) => {
	const stars = Array.from({ length: count }).map((_, index) => (
		<img
			key={index}
			src={variant === "purple" ? "/Star purple.png" : "/Star orange.png"}
			alt="Star"
		/>
	));

	return (
		<div className="flex flex-row justify-center items-center">{stars}</div>
	);
};

export default Astro;

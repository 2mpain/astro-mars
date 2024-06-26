import react from "@astrojs/react";

export type Variant =
	| "h1"
	| "h2"
	| "h3"
	| "h4"
	| "h5"
	| "body"
	| "body-small"
	| "small";

interface Props {
	variant: Variant;
	children: React.ReactNode;
	className?: string;
	as?: keyof JSX.IntrinsicElements;
}

const tags: Record<Variant, keyof JSX.IntrinsicElements> = {
	h1: "h1",
	h2: "h2",
	h3: "h3",
	h4: "h4",
	h5: "h5",
	body: "p",
	"body-small": "p",
	small: "span",
};

const sizes: Record<Variant, string> = {
	h1: "text-7xl sm:text-5xl",
	h2: "text-4xl sm:text-3xl",
	h3: "text-3xl sm:text-2xl",
	h4: "text-2xl sm:text-1xl",
	h5: "text-xl  sm:text-lg",
	body: "text-lg sm:text-md",
	"body-small": "text-md sm:text-sm",
	small: "text-sm sm:text-xs",
};

export const Typography = ({ variant, children, className, as }: Props) => {
	const sizeClasses = sizes[variant];
	const Tag = as || tags[variant];

	return <Tag className={`${sizeClasses} ${className}`}>{children}</Tag>;
};

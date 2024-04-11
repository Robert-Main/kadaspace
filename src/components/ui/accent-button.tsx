import { cn } from "@/lib/utils";
import { VariantProps, cva } from "class-variance-authority";
import * as React from "react";

const buttonVariants = cva(
	" rounded-full bg-primary-orange text-white font-[700] leading-[25.6px] tracking-[0.2px]",
	{
		variants: {
			variant: {
				default: "hover:text-red",
			},
			size: {
				default: "py-2 px-8",
			},
		},
		defaultVariants: {
			variant: "default",
			size: "default",
		},
	}
);

export interface ButtonProps
	extends React.ButtonHTMLAttributes<HTMLButtonElement>,
	VariantProps<typeof buttonVariants> {
	asChild?: boolean;
}

const AccentButton = React.forwardRef<HTMLButtonElement, ButtonProps>(
	({ className, variant, size, ...props }, ref) => {
		const Comp = "button";
		return (
			<Comp
				className={cn(buttonVariants({ variant, size, className }))}
				ref={ref}
				{...props}
			/>
		);
	}
);
AccentButton.displayName = "AccentButton";

export { AccentButton, buttonVariants };

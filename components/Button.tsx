import { forwardRef } from "react";
import { twMerge } from "tailwind-merge";

interface ButtonProbs 
    extends React.ButtonHTMLAttributes<HTMLButtonElement>{}

const Button = forwardRef<HTMLButtonElement, ButtonProbs>(({
    className, 
    children,
    disabled,
    type = "button",
    ...probs
}, ref) => {
    return (
        <button
            type={type}
            className={twMerge(`
                w-full
                rounded-full
                bg-green-500
                border-transparent
                px-3
                py-3
                disabled:cursor-not-allowed
                disabled:opacity-50
                font-bold
                text-black
                hover:opacity-75
                transition
            `,
                className
            )}
            disabled={disabled}
            ref={ref}
            {...probs}
        >
            {children}
        </button>
    )
}
)
Button.displayName = "Button";
export default Button;
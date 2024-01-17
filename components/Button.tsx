import { forwardRef } from "react";
import { twMerge } from "tailwind-merge";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLBodyElement> {}


const Button = forwardRef<HTMLButtonElement, ButtonProps>(({
    className,
    children,
    disabled,
    type = "button",
    ...props
}, ref) => {
    return (
        <button type={type} className={twMerge('w-full rounded-full bg-green-500')}>
            {children}
        </button>
    )
})

Button.displayName = "Button";


export default Button;
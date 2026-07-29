import { forwardRef } from "react";
import { Link } from 'react-router-dom'
import { BaseButton } from "./styles"

const Button = forwardRef((props, ref) => {

    const {
        children,
        variant = "primary",
        size = "md",
        to,
        ...rest
    } = props;

    // caso seja link
    if (to) {
        return (
            <BaseButton
            as={Link}
            ref={ref}
            to={to}
            variant={variant}
            size={size}
            >
            {children}
            </BaseButton>
        )
    }

    // Botão normmal
    return (
        <BaseButton
        as="button"
        ref={ref}
        type={props.type ?? "button"}
        variant={variant}
        size={size}
        {...rest}
        >
        {children}
        </BaseButton>
    )
    
});

Button.displayName = "Button"

export default Button

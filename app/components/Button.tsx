'use client';

import clsx from "clsx";

interface ButtonPros {
    type?: 'button' | 'submit' | 'reset' | undefined;
    fullWidth?: boolean;
    children?: React.ReactNode;
    onClick?: () => void;
    secondary?: boolean;
    danger?: boolean;
    disabled?: boolean;
}

const Button : React.FC<ButtonPros> = () => {
    return (
        <div>
            Hello Button
        </div>
    )
}

export default Button;
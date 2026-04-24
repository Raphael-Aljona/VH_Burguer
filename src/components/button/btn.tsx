import {ReactNode} from "react";

type ButtonProps = {
    children: ReactNode;
    type?: "button" | "submit" | "reset";
    variant?: "botao-principal" | "botao-secundario" | "botao-outline-claro" | "botao-outline-escuro";
    id?: string;
    onclick?: () => void;
};

const Button = ({children, type = "button", variant = "botao-principal", onclick}: ButtonProps) => {
    return (
        <button onClick={onclick} className={`botao ${variant}`} type={type}>
            {children}
        </button>
    );
};

export default Button;
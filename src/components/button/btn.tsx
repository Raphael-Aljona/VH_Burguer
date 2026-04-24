import {ReactNode} from "react";

type ButtonProps = {
    children: ReactNode;
    type?: "button" | "submit" | "reset";
    variant?: "botao-principal" | "botao-secundario" | "botao-outline-claro" | "botao-outline-escuro";
    id?: string;
};

const Button = ({children, type = "button", variant = "botao-principal"}: ButtonProps) => {
    return (
        <button className={`botao ${variant}`} type={type}>
            {children}
        </button>
    );
};

export default Button;
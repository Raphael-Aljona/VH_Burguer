import { ReactNode } from "react";

type ButtonProps = {
    children: ReactNode;
    type?: "button" | "submit" | "reset";
};

const Button = ({ children, type = "button" }: ButtonProps) => {
    return (
        <button className="botao-principal" type={type}>
            {children}
        </button>
    );
};

export default Button;
// ESTRUTURA PADRÃO

import Button from "@/components/button";

const Login = () => {
    return (
        <>
            <main>
                <img src="" alt=""/>
                <aside>
                    <h1>Login</h1>
                    <form action="">
                        <div className="campo_form">
                            <label htmlFor="email"></label>
                            <input type="text" name="email" placeholder="email@exemplo.com" required />
                        </div>
                        <div className="campo_form">
                            <label htmlFor="senha"></label>
                            <input type="password" name="senha" placeholder="********" required />
                        </div>
                        <a href="">Esqueceu sua senha?</a>
                        <Button></Button  >
                    </form>
                </aside>
            </main>
        </>
    )
}

export default Login
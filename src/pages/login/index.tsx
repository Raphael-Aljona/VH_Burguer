// ESTRUTURA PADRÃO

import Button from "@/components/button/btn";
import styles from "./login.module.css";
import {login} from "../api/authService"
import {useState} from "react";
import {values} from "eslint-config-next";

const Login = () => {
    const [password, setPassword] = useState<string>("");
    const [email, setEmail] = useState<string>("");

    function autenticar(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        try {
            login(email, password);
            console.log("Login successful!");
        }catch (e: any) {
            alert(e.message);
        }
    }

    return (
        <>
            <main className={styles.main}>
                <img className={styles.imagem_login} src="/imgs/hamburguer-login.png" alt=""/>
                <div className={styles.conteudo_principal}>
                    <h1>LOGIN</h1>
                    <form onSubmit={autenticar} className={styles.formulario_login} action="">
                        <div className={styles.campo_form}>
                            <label className={styles.label} htmlFor="email">E-mail</label>
                            <input className={styles.campo_texto} type="text" id="email" name="email" placeholder="email@exemplo.com" value={email} onChange={
                                event => setEmail(event.target.value)} required />
                        </div>
                        <div className={styles.campo_form}>
                            <label className={styles.label} htmlFor="senha">Senha</label>
                            <input className={styles.campo_texto} type="password" id="senha" name="senha" placeholder="********" value={password} onChange={
                                event => setPassword(event.target.value)} required />
                        </div>
                        <a className={styles.esqueceu_senha} href="">Esqueceu sua senha?</a>
                        <Button type={"submit"}>
                            Entrar
                        </Button  >
                    </form>
                </div>
            </main>
        </>
    )
}

export default Login
// ESTRUTURA PADRÃO

import Button from "@/components/button/btn";
import styles from "./login.module.css";
import {login} from "../api/authService"
import {useState} from "react";
import {useRouter} from "next/navigation";
import {ToastContainer, toast} from "react-toastify";

const Login = () => {
    const [password, setPassword] = useState<string>("");
    const [email, setEmail] = useState<string>("");

    const router = useRouter();
    const notificacao = (msg: string) => {
        toast.success(msg)
    }
    const notificaoErro = (msg: string) => {
        toast.error(msg)
    }

    console.log(password);
    console.log(email);

    async function autenticar(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        try {
            const response = await login(email, password);
            notificacao("Logado com sucesso!")
            router.push("/home");
        } catch (e: any) {
            alert(e.message);
            notificaoErro("O email ou senha está incorreto!")
            console.log("ta errado isso ai");
        }
    }

    return (
        <>
            <ToastContainer/>
            <main className={styles.main}>
                <img className={styles.imagem_login} src="/imgs/hamburguer-login.png" alt=""/>
                <div className={styles.conteudo_principal}>
                    <h1>LOGIN</h1>
                    <form onSubmit={autenticar} className={styles.formulario_login}>
                        <div className={styles.campo_form}>
                            <label className={styles.label} htmlFor="email">E-mail</label>
                            <input className={styles.campo_texto} type="text" id="email" name="email"
                                   placeholder="email@exemplo.com" value={email} onChange={
                                event => setEmail(event.target.value)} required/>
                        </div>
                        <div className={styles.campo_form}>
                            <label className={styles.label} htmlFor="senha">Senha</label>
                            <input className={styles.campo_texto} type="password" id="senha" name="senha"
                                   placeholder="********" value={password} onChange={
                                event => setPassword(event.target.value)} required/>
                        </div>
                        <a className={styles.esqueceu_senha} href="">Esqueceu sua senha?</a>
                        <Button type={"submit"}>
                            Entrar
                        </Button>
                    </form>
                </div>
            </main>
        </>
    )
}

export default Login
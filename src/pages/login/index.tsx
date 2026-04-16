// ESTRUTURA PADRÃO

import Button from "@/components/button/btn";
import styles from "./login.module.css";

const Login = () => {
    return (
        <>
            <main className={styles.main}>
                <img className={styles.imagem_login} src="/imgs/hamburguer-login.png" alt=""/>
                <div className={styles.conteudo_principal}>
                    <h1>LOGIN</h1>
                    <form className={styles.formulario_login} action="">
                        <div className={styles.campo_form}>
                            <label className={styles.label} htmlFor="email">E-mail</label>
                            <input className={styles.campo_texto} type="text" name="email" placeholder="email@exemplo.com" required />
                        </div>
                        <div className={styles.campo_form}>
                            <label className={styles.label} htmlFor="senha">Senha</label>
                            <input className={styles.campo_texto} type="password" name="senha" placeholder="********" required />
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
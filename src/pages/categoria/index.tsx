import SubHeader from "@/components/sub-header/sub-header";
import Footer from "@/components/footer/footer";
import styles from "./categoria.module.css"
import Button from "@/components/button/btn";
import {useState} from "react";
import {cadastrarCategoria} from "@/pages/api/categoriaService";
import {ToastContainer, toast} from "react-toastify"

const Categoria = () => {

    const [categoria, setCategorias] = useState<string>("")

    const notificacao = (msg: string) => toast.success(msg)
    const notificacaoErro = (msg: string) => toast.error(msg)

    async function cadastrar(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        try{
            await cadastrarCategoria(categoria);
            notificacao("Cadastrado com sucesso!");
        } catch(e: any) {
            notificacaoErro(e.message);
        }

    }

    return (
        <>
            <ToastContainer/>
            <SubHeader></SubHeader>
            <main>
                <section className={styles.secao_categoria}>
                    <div className={`layout_guide ${styles.container}`}>
                        <h1>Criar categoria</h1>
                        <form onSubmit={cadastrar} className={styles.form}>
                            <div className={styles.informacoes_campo}>
                                <label htmlFor="categoria">Nome Categoria</label>
                                <input id="categoria" className={styles.categoria} type="text" value={categoria}
                                       onChange={
                                           event => setCategorias(event.target.value)
                                       } placeholder="Premium"/>
                            </div>
                            <div className={styles.botoes}>
                                <Button type={"submit"} variant="botao-principal">Salvar</Button>
                                <Button variant="botao-outline-escuro">Cancelar</Button>
                            </div>
                        </form>

                    </div>
                </section>

            </main>
            <Footer></Footer>
        </>
    )
}

export default Categoria
import SubHeader from "@/components/sub-header/sub-header";
import Footer from "@/components/footer/footer";
import styles from "./categoria.module.css"
import Button from "@/components/button/btn";

const Categoria = () => {
    return (
        <>
            <SubHeader></SubHeader>
            <main>
                <section className={styles.secao_categoria}>
                    <div className={`layout_guide ${styles.container}`}>
                        <h1>Criar categoria</h1>
                        <div className={styles.informacoes_campo}>
                            <label htmlFor="categoria">Nome Categoria</label>
                            <input id="categoria" className={styles.categoria} type="text" placeholder="Premium"/>
                        </div>
                        <div className={styles.botoes}>
                            <Button variant="botao-principal">Salvar</Button>
                            <Button variant="botao-outline-escuro" >Cancelar</Button>
                        </div>
                    </div>
                </section>

            </main>
            <Footer></Footer>
        </>
    )
}

export default Categoria
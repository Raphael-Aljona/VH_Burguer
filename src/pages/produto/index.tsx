import styles from "./editar_produto.module.css"
import SubHeader from "@/components/sub-header/sub-header";
import Footer from "@/components/footer/footer";
import Button from "@/components/button/btn";
import Modal from "@/components/modal/modal";

const Produto = () => {

    return (
        <>
            <SubHeader></SubHeader>
            <main>
                <section id={styles.formulario} >
                    <div className={`layout_guide ${styles.container}`}>
                        <h1>CRIAR PRODUTO</h1>
                        <div className={styles.informacoes_campo}>
                            <label htmlFor="nome">Nome do Produto</label>
                            <input id="nome" className={styles.nome} type="text" placeholder="BBQ Produto"/>
                        </div>
                        <div className={styles.informacoes_campo}>
                            <label htmlFor="descricao">Descrição</label>
                            <textarea id="descricao" className={styles.descricao} placeholder="Hamburguer com molho barbecue defumado com cebola caramelizada."/>
                        </div>

                        <div className={styles.informacoes_campo}>
                            <label htmlFor="preco">Preço (R$)</label>
                            <input id="preco" className={styles.preco} type="text" placeholder="40,00"/>
                        </div>

                        <div className={styles.informacoes_campo}>
                            <label htmlFor="categoria">Categoria</label>
                            <select id="categoria" className={styles.categoria} >
                                <option value="" disabled selected>Selecione a categoria</option>
                                <option value="opcao1">Texto1</option>
                            </select>
                        </div>
                        <a href="">Adicionar Categoria</a>
                        <div className={styles.informacoes_campo}>
                            <label htmlFor="imagem">URL da imagem</label>
                            <input id="imagem" className={styles.imagem} type="text" placeholder="https://unsplash.com/pt-br/fotografias/cheseburger-de-"/>
                        </div>
                        <div className={styles.botoes}>
                            <Button type="button" variant="botao-secundario" id="btnOpen">Adicionar Promoção</Button>
                            <Button type="button" variant="botao-principal">Salvar</Button>
                        </div>
                        <Modal></Modal>
                    </div>
                </section>
            </main>
            <Footer></Footer>
        </>
    );
}

export default Produto;
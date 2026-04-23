import "./detalhe-produto.module.css"
import SubHeader from "@/components/sub-header/sub-header";
import Footer from "@/components/footer/footer";
import styles from "./detalhe-produto.module.css"

const DetalheProduto = () => {
    return (
        <>
            <main>
                <SubHeader></SubHeader>
                <section className={`${styles.container} layout_guide`}>
                    <article className={`${styles.detalhe}`}>
                        <h1>Detalhes do Monster</h1>
                        <img src="/imgs/HamburguerAlcatraComBacon_1-scaled.png" alt=""/>
                        <div className={styles.container_informacoes}>
                            <div className={styles.informacoes}>
                                <div className={styles.info_esquerda}>
                                    <p className={styles.subtitulo}>Nome do produto</p>
                                    <p>Monstro</p>
                                </div>
                                <div className={styles.info_direita}>
                                    <p className={styles.subtitulo}>Preço (R$)</p>
                                    <p><span>R$ 45,00</span> R$ 35,00</p>
                                </div>
                            </div>
                            <div className={styles.informacoes}>
                                <div className={styles.info_esquerda}>
                                    <p className={styles.subtitulo}>Descrição</p>
                                    <p>Um pão brioche macio segura a fera: duas (ou três) carnes altas e suculentas,
                                        queijo cheddar derretido escorrendo pelas laterais, bacon crocante, cebola
                                        caramelizada no ponto adocicado, alface fresca, tomate e um molho especial
                                        intenso que amarra tudo. Para completar o ataque, uma camada extra de onion
                                        rings ou molho defumado que transforma cada mordida numa explosão.</p>
                                </div>
                                <div className={styles.info_direita}>
                                    <p className={styles.subtitulo}>Categoria</p>
                                    <p>• Premium</p>
                                    <p>• Artesanal</p>
                                </div>
                            </div>
                        </div>
                    </article>

                </section>
                <Footer></Footer>
            </main>
        </>
    )
}

export default DetalheProduto;
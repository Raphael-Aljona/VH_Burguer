import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";
import Button from "@/components/button/btn";
import ListaProduto from "@/components/lista-produto/lista_produto"

import styles from "./home.module.css"

const Home = () => {
    return (
        <>
            <Header></Header>
            <main>
                <section id={styles.banner}>
                    <div className={`layout_guide ${styles.container}`}>
                        <h1>BEM-VINDO AO VH BURGUER</h1>
                        <img src="/imgs/foto_de_hamburgueres.png" alt=""/>
                        <div className={styles.buttons_banner}>
                            <Button type={"button"} variant={"botao-principal"}>Chamar atendente</Button>
                            <Button type={"button"} variant={"botao-secundario"} >Ver cardápio</Button>
                        </div>
                    </div>
                </section>
                <section id={styles.destaques}>
                    <div className={`layout_guide ${styles.container}`}>
                        <div className={styles.destaques_esquerda}>
                            <div className={styles.card_destaques}>
                                {/*<img src="/imgs/mais%20pedidos.png" alt=""/>*/}
                                <h2>MAIS PEDIDOS</h2>
                                <p>Os queridinhos da galera</p>
                            </div>
                        </div>
                        <div className={styles.destaques_direita}>
                            <div className={`${styles.card_destaques} ${styles.card_superior}`}>
                                <h2>MUITO BACON</h2>
                                <p>Lanches com</p>
                            </div>
                            <div className={`${styles.card_destaques} ${styles.card_inferior}`}>
                                <h2>SUPER COMBOS</h2>
                                <p>Se tiver muita fome</p>
                            </div>
                        </div>
                    </div>
                </section>
                <section id={styles.cardapio}>
                    <div className={`layout_guide ${styles.container}`}>
                        <h2>CARDÁPIO</h2>
                        <div className={styles.filtrar}>
                            <label htmlFor="Filtrar">Filtrar</label>
                            <select name="Filtrar" id="">
                                <option value=""></option>
                                <option value=""></option>
                                <option value=""></option>
                            </select>
                        </div>
                        <ListaProduto></ListaProduto>
                    </div>
                </section>
                <section id={styles.unidades}>
                    <div className={`layout_guide ${styles.container}`}>
                        <h2>NOSSAS UNIDADES</h2>
                        <ul>
                            <li>Centro - Av. Aurora, 742</li>
                            <li>Jardim - Av. das Palmeiras, 1280</li>
                            <li>Norte - Av. Horizonte, 305</li>
                            <li>Sul - Av. Nova Esperança, 910</li>
                        </ul>
                    </div>
                </section>
            </main>
            <Footer></Footer>
        </>
    )
}

export default Home
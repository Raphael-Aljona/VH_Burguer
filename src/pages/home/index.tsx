import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";
import Button from "@/components/button/btn";

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
                            <Button type={"button"}>Chamar atendente</Button>
                            <Button type={"button"}>Ver cardápio</Button>
                        </div>
                    </div>
                </section>
                <section id={styles.destaques}>

                </section>
                <section id={styles.cardapio}></section>
                <section id={styles.unidades}></section>
            </main>
            <Footer></Footer>
        </>
    )
}

export default Home
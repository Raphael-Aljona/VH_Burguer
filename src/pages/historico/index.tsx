import SubHeader from "@/components/sub-header/sub-header";
import Footer from "@/components/footer/footer";
import styles from "./historico.module.css"
import CardHistorico from "@/components/card-historico/card_historico";

const Historico = () => {
    return (
        <>
            <main>
                <SubHeader></SubHeader>
                <section className={styles.secao_historico}>
                    <div className={`layout_guide ${styles.container}`}>
                        <h1>Histórico de alterações: Monstro</h1>
                        <table>
                            <tbody>
                            <tr className={styles.subtitulos}>
                                <th>Data da alteração</th>
                                <th>Nome anterior</th>
                                <th>Preço Anterior</th>
                            </tr>
                            </tbody>
                        </table>
                        <CardHistorico></CardHistorico>
                    </div>
                </section>
                <Footer></Footer>
            </main>
        </>
    )
}

export default Historico
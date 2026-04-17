import styles from "./card_produto.module.css"

const card_produto = ()=>{
    return(
        <>
            <article className={styles.card}>
                <div className={styles.img_texto}>
                    <img className={styles.bgi} src="/imgs/HamburguerAlcatraComBacon_1-scaled.png" alt=""/>
                    <h3>Monster</h3>
                </div>

                <p className={styles.texto_card} >Hambúrguer brutal, suculento e exageradamente saboraso.</p>
                <p className={styles.preco}>R$ 35,00</p>
            </article>
        </>
    );
}

export default card_produto;
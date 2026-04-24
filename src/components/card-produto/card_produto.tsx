import styles from "./card_produto.module.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCircleInfo} from "@fortawesome/free-solid-svg-icons";
import {faEdit} from "@fortawesome/free-solid-svg-icons/faEdit";
import {faTrash} from "@fortawesome/free-solid-svg-icons/faTrash";
import {router} from "next/client";

const redirect = () => {
    router.push("/detalhe-produto");
}

const card_produto = () => {
    return (
        <>
            <article onClick={redirect} className={styles.card}>
                <div className={styles.img_texto}>
                    <img className={styles.bgi} src="/imgs/HamburguerAlcatraComBacon_1-scaled.png" alt=""/>
                    <h3>Monster</h3>
                </div>

                <p className={styles.texto_card}>Hambúrguer brutal, suculento e exageradamente saboroso.</p>
                <div className={styles.preco}>
                    <p className={styles.a}>R$ 35,00</p>
                    <div className={styles.icones}>
                        <FontAwesomeIcon icon={faCircleInfo}></FontAwesomeIcon>
                        <FontAwesomeIcon icon={faEdit}></FontAwesomeIcon>
                        <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>
                    </div>
                </div>
            </article>

        </>
    );
}

export default card_produto;
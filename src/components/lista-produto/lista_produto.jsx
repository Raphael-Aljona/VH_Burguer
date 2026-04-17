import styles from "./lista_produto.module.css";
import CardProduto from "@/components/card-produto/card_produto";


const ListaProduto = () => {
    return(
        <>
            <div className={styles.lista_produtos}>
                <CardProduto></CardProduto>
                <CardProduto></CardProduto>
                <CardProduto></CardProduto>
            </div>
            <div className={styles.lista_produtos}>
                <CardProduto></CardProduto>
                <CardProduto></CardProduto>
                <CardProduto></CardProduto>
            </div>
        </>
    );
}

export default ListaProduto;
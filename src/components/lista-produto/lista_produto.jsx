import styles from "./lista_produto.module.css";
import CardProduto from "@/components/card-produto/card_produto";
import Button from "@/components/button/btn";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSliders} from "@fortawesome/free-solid-svg-icons/faSliders";


const ListaProduto = () => {
    return (
        <>
            <div className={styles.botoes_topo}>
                <div className={styles.botao_esquerda}>
                    <Button>Filtrar <FontAwesomeIcon icon={faSliders}></FontAwesomeIcon></Button>
                </div>
                <div className={styles.botoes_direita}>
                    <Button>Todas as promoções</Button>
                    <Button>Adicionar produto</Button>
                </div>
            </div>
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
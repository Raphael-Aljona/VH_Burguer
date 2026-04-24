import Button from "@/components/button/btn";
import styles from "./modal.module.css"

const Modal = () => {
    return (
        <dialog id="dialog" className={styles.adicionar_promocao}>
            <h2>Adicionar Promoção</h2>
            <div className={styles.informacoes_campo}>
                <label htmlFor="promocao">Promoção</label>
                <input id="promocao" className={styles.promocao} type="text" placeholder="Selecione uma promoção"/>
            </div>
            <div className={styles.informacoes_campo}>
                <label htmlFor="data">Data de expiração</label>
                <input id="data" className={styles.data} type="text" placeholder="12/12/12"/>
            </div>
            <div className={styles.informacoes_campo}>
                <label htmlFor="valor_promocao">Novo valor</label>
                <input id="valor_promocao" className={styles.valor_promocao} type="text" placeholder="R$ xx,xx"/>
            </div>
            <div className={styles.botoes}>
                <Button type="button" variant="botao-outline" id="btnClose">Cancelar</Button>
                <Button type="button" variant="botao-principal">Salvar</Button>
            </div>
        </dialog>
    )
}

export default Modal;
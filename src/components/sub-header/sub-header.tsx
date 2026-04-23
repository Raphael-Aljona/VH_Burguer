import Link from "next/link";
import styles from "./sub_header.module.css"

const SubHeader = () => {
    return (
        <>
            <header className={styles.header}>
                <div className={`layout_guide ${styles.container}`}>
                    <img src="/imgs/Logo_footer.svg" alt=""/>
                    <Link className={styles.voltar} href="/home">Voltar</Link>
                </div>
            </header>
        </>
    )
}

export default SubHeader
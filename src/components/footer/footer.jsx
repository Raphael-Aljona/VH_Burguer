import styles from './footer.module.css';

const Footer = () => {
    return (
        <>
            <footer id={styles.footer}>
                <div className={`layout_guide ${styles.container}`}>
                    <div className={styles.conteudo}>
                        <img className={styles.logo_footer} src="/imgs/Logo_footer.svg" alt=""/>
                        <div className={styles.redes_sociais}>
                            <a href=""><img src="/imgs/tiktok.png" alt=""/></a>
                            <a href=""><img src="/imgs/face.png" alt=""/></a>
                            <a href=""><img src="/imgs/insta.png" alt=""/></a>
                            <a href=""><img src="/imgs/youtube.png" alt=""/></a>
                        </div>
                    </div>
                    <p id={styles.direito_autoral}>Copyright © 2025 VH Burguer | Todos os direitos reservados</p>
                </div>
            </footer>
        </>
    )

}

export default Footer
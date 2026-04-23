import styles from "./header.module.css"
import {useState} from "react";
import Link from "next/link";

const Header = () => {
    return (
        <>
            <header id={styles.header}>
                <div className={`layout_guide ${styles.container}`}>
                    <img id={styles.logo} src="/imgs/Logo%20VH%20Burguer.svg" alt=""/>
                    <nav className={styles.nav}>
                        <a className={styles.subtitulo} href="#destaques">Destaques</a>
                        <a className={styles.subtitulo} href="#cardapio">Cardápio</a>
                        <a className={styles.subtitulo} href="#unidades">Unidades</a>
                        <Link className={styles.subtitulo} href="/login">Login</Link>
                    </nav>
                    <button className={styles.burguer_btn}>
                        <img src="/imgs/icon-hamburguer.svg"
                             alt="Ícone que representa um hamburguer para acessar o menu lateral"/>
                    </button>
                </div>
            </header>
        </>
    );
}

export default Header;
import styles from "./editar_produto.module.css"
import SubHeader from "@/components/sub-header/sub-header";
import Footer from "@/components/footer/footer";
import Button from "@/components/button/btn";
import {init} from "next/dist/server/typescript/utils";
import {listarCategoria} from "@/pages/api/categoriaService";
import {addProduto} from "@/pages/api/produtoService";
import {useEffect, useState} from "react";
import categoria from "@/pages/categoria";

interface Categoria {
    categoriaID: number;
    nome: string;
}

const Produto = () => {

    const [categorias, setCategorias] = useState<Categoria[]>([]);

    const [nome, setNome] = useState<string>("");
    const [descricao, setDescricao] = useState<string>("");
    const [preco, setPreco] = useState<string>("");
    const [imagem, setImagem] = useState<File | null>(null);
    const [categoriaSelecionadas, setCategoriaSelecionadas] = useState<number[]>([]);

    const dados = {
        nome,
        descricao,
        preco,
        imagem,
        categoriaIds: categoriaSelecionadas,
    }

    async function listarCategorias() {
        const lista = await listarCategoria();

        setCategorias(lista);
    }

    async function adcionarProduto(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        try {
            await addProduto(dados);
        } catch (e: any) {
            console.log(e.message);
        }
    }

    useEffect(() => {
        listarCategorias();
    }, []);

    return (
        <>
            <SubHeader></SubHeader>
            <main>
                <section id={styles.formulario}>
                    <div className={`layout_guide ${styles.container}`}>
                        <h1>CRIAR PRODUTO</h1>
                        <form onSubmit={adcionarProduto} action="">
                            <div className={styles.informacoes_campo}>
                                <label htmlFor="nome">Nome do Produto</label>
                                <input id="nome" className={styles.nome} type="text" value={nome} onChange={
                                    event => setNome(event.target.value)
                                } placeholder="BBQ Produto"/>
                            </div>
                            <div className={styles.informacoes_campo}>
                                <label htmlFor="descricao">Descrição</label>
                                <textarea id="descricao" className={styles.descricao} value={descricao} onChange={
                                    event => setDescricao(event.target.value)
                                }
                                          placeholder="Hamburguer com molho barbecue defumado com cebola caramelizada."/>
                            </div>

                            <div className={styles.informacoes_campo}>
                                <label htmlFor="preco">Preço (R$)</label>
                                <input id="preco" className={styles.preco} type="text" value={preco}
                                       onChange={event => setPreco(event.target.value)} placeholder="40,00"/>
                            </div>

                            <div className={styles.informacoes_campo}>
                                <label htmlFor="categoria">Categoria</label>
                                <select multiple id="categoria" className={styles.categoria}
                                        onChange={(e) => {
                                            setCategoriaSelecionadas(
                                                Array.from(e.target.selectedOptions).map((option) => Number(option.value)))
                                        }}>
                                    <option value="" disabled selected>Selecione a categoria</option>
                                    {categorias.map((categoria) => (
                                        <option key={categoria.categoriaID}
                                                value={categoria.categoriaID}>{categoria.nome}</option>

                                    ) )}
                                </select>
                            </div>
                            <a href="categoria">Adicionar Categoria</a>
                            <div className={styles.informacoes_campo}>
                                <label htmlFor="imagem">URL da imagem</label>
                                <input id="imagem" className={styles.imagem} type="file" onChange={event => {
                                    if (event.target.files && event.target.files[0]) {
                                        setImagem(event.target.files[0]);
                                    }
                                }}
                                       placeholder="https://unsplash.com/pt-br/fotografias/cheseburger-de-"/>
                            </div>
                            <div className={styles.botoes}>
                                <Button type="button" variant="botao-secundario">Adicionar Promoção</Button>
                                <Button type="submit" variant="botao-principal" onclick={
                                    () => {
                                        console.log(dados)
                                    }
                                }>Salvar</Button>
                            </div>
                        </form>
                    </div>
                </section>
            </main>
            <Footer></Footer>
        </>
    );
}

export default Produto;
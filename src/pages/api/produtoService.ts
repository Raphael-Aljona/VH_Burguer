import {api} from "@/pages/api/api";

type Produto = {
    nome: string,
    descricao: string,
    preco: string,
    imagem: File | null,
    categoriaIds: number[]
}

export async function addProduto(dados: Produto) {
    try {
        const formData = new FormData();

        formData.append("Nome", dados.nome);
        formData.append("Descricao", dados.descricao);
        formData.append("Preco", dados.preco);
        if(dados.imagem){
            formData.append("Imagem", dados.imagem);
        }
        dados.categoriaIds.forEach(value => {
            formData.append("CategoriaIds", value.toString());
        })

        await api.post("Produto", formData);

        console.log(dados);

    } catch (err: any) {
        throw new Error(err.response.data)
    }
}
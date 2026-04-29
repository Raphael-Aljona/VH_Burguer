import {api} from './api'

export async function cadastrarCategoria(nome: string) {
    try{
        await api.post("Categoria", {nome})
        console.log("Cadastrado com sucesso")
    }catch(err: any){
        throw new Error(err.response.data)
    }
}

export async function listarCategoria() {
    try{
        const response = await api.get("Categoria")
        return response.data
    } catch(err: any){
        throw new Error(err.response.data)
    }
}
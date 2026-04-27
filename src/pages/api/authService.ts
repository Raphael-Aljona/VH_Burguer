import { api } from "./api"

export async function login(email: string, password: string) {
    try{
        const response = await api.post("Autenticacao/login", {
            email,
            password
        })

        console.log("Login realizado com sucesso");
        console.log(response)
    }catch (e) {
        throw new Error("Email ou senha incorretos")
    }
}

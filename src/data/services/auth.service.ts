import axios, { HttpStatusCode } from "axios"
import { ErrorBadRequest } from "../../utils/errors/badRequest.error"

export const register = async (login: string, email: string, password: string) => {
    try {
        await axios.post('http://localhost:8080/auth/register', { login, email, password })
    } catch (error) {
        if (axios.isAxiosError(error)) {
            if (error.status === HttpStatusCode.BadRequest) {
                throw new ErrorBadRequest('not valid data')
            }
            else {
                throw new Error('')
            }
        }
    }
}

export const login = async (email: string, password: string) => {
    try {
        await axios.post('http://localhost:8080/auth/register', { email, password })
    } catch (error) {
        if (axios.isAxiosError(error)) {
            if (error.status === HttpStatusCode.BadRequest) {
                throw new ErrorBadRequest('not valid data')
            }
            else {
                throw new Error('')
            }
        }        
    }
}
import { useState, type ChangeEvent, type MouseEvent } from "react"
import { useNavigate } from "react-router"
import { login } from "../../data/services/auth.service"
import { ErrorBadRequest } from "../../utils/errors/badRequest.error"

export function LoginPage() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const navigate = useNavigate()

    const click = async (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()

        try {
            await login(email, password)
        }
        catch (error) {
            if (error instanceof ErrorBadRequest) {
                alert('not valid data')
                return
            }
            alert('failed to register')
            return
        }
        navigate('/')
    }

    return (
        <>
            <h1 className="title">Здравствуйте!</h1>
            <form>
                <input type="email" placeholder="Почта" onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)} />
                <input type="password" placeholder="Пароль" onChange={(e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)} />
                <p>Нет аккаунта? <a onClick={() => navigate('/register')}>Зарегистрируйтесь!</a></p>
                <button type="submit" onClick={click}>Войти</button>
            </form>
        </>
    )
}

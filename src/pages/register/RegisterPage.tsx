import { useState, type ChangeEvent, type MouseEvent } from 'react'
import './registerPage.css'
import { register } from '../../data/services/auth.service'
import { ErrorBadRequest } from '../../utils/errors/badRequest.error'
import { useNavigate } from 'react-router'

export function RegisterPage() {
    const [login, setLogin] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [repeatPassword, setRepeatPassword] = useState('')

    const navigate = useNavigate()

    const click = async(e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()

        if (password !== repeatPassword) {
            alert('Пароли не одинаковые')
            return
        }

        try {
            await register(login, email, password)
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
            <h1 className='title'>Регистрация</h1>
            <form>
                <input type="text" placeholder='Логин' onChange={(e: ChangeEvent<HTMLInputElement>) => setLogin(e.target.value)} />
                <input type="email" placeholder='Почта' onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)} />
                <input type="password" placeholder='Пароль' onChange={(e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)} />
                <input type="password" placeholder='Подтверждение пароля' onChange={(e: ChangeEvent<HTMLInputElement>) => setRepeatPassword(e.target.value)} />
                <p>Есть аккаунт? <a onClick={() => navigate('/login')}>Войти</a></p>
                <button type='submit' onClick={click}>Зарегистрироваться</button>
            </form>
        </>
    )
}

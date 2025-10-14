import { BrowserRouter, Route, Routes } from 'react-router'
import './App.css'
import { RegisterPage } from './pages/register/RegisterPage'
import { LoginPage } from './pages/login/LoginPage'
import { IndexPage } from './pages/index/IndexPage'
import ProductPage from './pages/product/ProductPage'

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<IndexPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path='/login' element={<LoginPage />} />
      <Route path='/product' element={<ProductPage />} />
    </Routes>
  </BrowserRouter>
  )
}

export default App

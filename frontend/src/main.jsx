import { createRoot } from 'react-dom/client'
import './index.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import HomePage from './landing_page/home/HomePage'
import Signup from './landing_page/signup/Signup'
import Login from './landing_page/signup/Login'
import AboutPage from './landing_page/about/AboutPage'
import ProductPage from './landing_page/products/ProductPage'
import PricePage from './landing_page/pricing/PricePage'
import SupportPage from './landing_page/support/SupportPage'
import Navbar from './landing_page/Navbar'
import Footer from './landing_page/Footer'
import NotFound from './landing_page/NotFound'
import DashboardRedirect from './landing_page/DashboardRedirect'
import Logout from './landing_page/Logout'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <Navbar/>
  <Routes>
    <Route path="/" element={<HomePage/>}/>
    <Route path="/dashboard" element={<DashboardRedirect/>}/>
    <Route path="/logout" element={<Logout/>}/>
    <Route path="/signup" element={<Signup/>}/>
    <Route path="/login" element={<Login/>}/>
    <Route path="/about" element={<AboutPage/>}/>
    <Route path="/products" element={<ProductPage/>}/>
    <Route path="/pricing" element={<PricePage/>}/>
    <Route path="/support" element={<SupportPage/>}/>
    <Route path='*' element={<NotFound/>}/>
  </Routes>
  <Footer/>
  </BrowserRouter>
)

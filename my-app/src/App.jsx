import React from "react"
import { Route, Routes } from "react-router-dom"
import Home from "./Home"
import ProductList from "./ProductList"
import Product from "./Product"
import Register from "./Register"
import Login from "./Login"
import ShoppingCart from "./ShoppingCart"
import "./index.css"

export default function App() {
    return (
        <>
            <Routes>
                <Route path='/login' element={<Login />} />
                <Route path='/register' element={<Register />} />
                <Route path='/' exact element={ <Home /> } />
                <Route path='/product' exact element={<Product />} />
                <Route path='/productlist' exact element={<ProductList />} />
                <Route path='/shoppingcart' exact element={<ShoppingCart />} />
            </Routes>
        </>
    )
}
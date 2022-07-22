import React from 'react';
import { Route, Routes } from 'react-router-dom';
import App from './App';
import Store from './components/Store';
import Product from './components/Product';


const AppRoutes = () => (
    <App>
        <Routes>
            <Route path='/' element={<Store />} />
            <Route path='/Product' element={<Product />} />
        </Routes>
    </App>
)

export default AppRoutes;
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Products from "../pages/Products";
import Home from "../pages/Home";
import ProductsDetail from "../pages/Products/ProductsDetail";
import MainLayout from "../layouts/MainLayout";

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<MainLayout />}>
                    <Route path="/" element={<Home />} />
                    <Route path="/products" element={<Products />} />
                    <Route path="/products/:id" element={<ProductsDetail />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default AppRoutes;
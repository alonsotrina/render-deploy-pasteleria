import React from 'react';
import { Routes, Route } from "react-router-dom";
import { PageLayout, AdminlLayout } from "../layouts/Index";
import { Home, Register, Us, ProductDetail, Profile, NotFound, Dashboard, Orders } from "../pages/Index";
import { Category, Portions, Users, Products } from "../pages/Index";
import { useAuth } from '../hooks/useAuth';
import { AuthGuard } from '../guard/AutGuard';
import { ROLES } from '../utils/constants/roles';

const MainRoutes = () => {
    const { session } = useAuth()

    return (
        <Routes>
            <Route path="/" index element={<Home />} />


            <Route element={<PageLayout />}>
                <Route path="/products" element={<Products />} />
                <Route
                    path="/register"
                    element={
                        <AuthGuard
                            redirectTo="/"
                            isAllow={!session.token}
                        >
                            <Register />
                        </AuthGuard>
                    }
                />
                <Route path="/us" element={<Us />} />
                <Route path="/product-detail/:id" element={<ProductDetail />} />
                <Route
                    path="/profile"
                    element={
                        <AuthGuard
                            redirectTo="/"
                            isAllow={session?.token}
                        >
                            <Profile />
                        </AuthGuard>
                    }
                />
                 <Route
                    path="/orders"
                    element={
                        <AuthGuard
                            redirectTo="/"
                            isAllow={session?.token}
                        >
                            <Orders />
                        </AuthGuard>
                    }
                />
            </Route>

            {/* Ruta Admin */}
            <Route
                path="/admin"
                element={
                    <AuthGuard
                        redirectTo="/"
                        isAllow={session?.role == ROLES.ADMIN}
                    >
                        <AdminlLayout />
                    </AuthGuard>
                }
            >
                <Route
                    index
                    element={<Dashboard />}
                />
                <Route path="category" element={<Category />} />
                <Route path="portions" element={<Portions />} />
                <Route path="users" element={<Users />} />
                <Route path="products" element={<Products />} />
            </Route>

            <Route path='/*' element={<NotFound />} />
        </Routes>
    )
}

export default MainRoutes;
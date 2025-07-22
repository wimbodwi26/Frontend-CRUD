import { useContext } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import { AuthContext } from "../Context/AuthContext";

import Home from "../views/home/index.tsx";
import Register from "../views/home/auth/register.tsx";
import Login from "../views/home/auth/login.tsx";
import Dashboard from "../views/admin/dashboard/index.tsx";
import UsersIndex from "../views/admin/users/index.tsx";
import UserCreate from "../views/admin/users/create.tsx";
import UseEdit from "../views/admin/users/edit.tsx";

export default function AppRoutes() {
    const auth = useContext(AuthContext);

    const isAuthenticated = auth?.isAuthenticated ?? false;

    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={isAuthenticated ? <Navigate to="/admin/dashboard" replace /> : <Register />} />
            <Route path="/login" element={isAuthenticated ? <Navigate to="/admin/dashboard" replace /> : <Login />} />
            <Route path="/admin/dashboard" element={isAuthenticated ? <Dashboard /> : <Navigate to="/login" replace /> } />
            <Route path="/admin/users" element={isAuthenticated ? <UsersIndex /> : <Navigate to="/login" replace /> } />
            <Route path="/admin/users/create" element={isAuthenticated ? <UserCreate /> : <Navigate to="/login" replace /> } />
            <Route path="/admin/users/edit/:id" element={isAuthenticated ? <UseEdit /> : <Navigate to="/login" replace /> } />
        </Routes>
    );
}

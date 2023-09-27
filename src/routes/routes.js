import { Navigate } from "react-router";
import HomePage from "../pages/HomePage";
import TodoPage from "../pages/TodoPage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";


export const publicRoutes = [
    {path: '/login', element: <LoginPage />},
    {path: '/register', element: <RegisterPage />},
    {path: '/*', element: <Navigate to="/login" replace />},
]

export const authRoutes = [
    {path: '/', element: <HomePage />},
    {path: '/todo', element: <TodoPage />},
    {path: '/*', element: <Navigate to="/" replace />},
]

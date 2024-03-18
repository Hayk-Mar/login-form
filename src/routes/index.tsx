import LoginPage from "pages/LoginPage";
import ForgotPass from "pages/ForgotPassPage";
import ResetPass from "pages/ResetPassPage";
import Home from "pages/HomePage";
import { Navigate } from "react-router-dom";

// if you need to use lazy loading we can use lazy param from react-router-dom or install -> import loadable/components

export const openRoutes = [
    {
        path: "/login",
        element: <LoginPage />,
    },
    {
        path: "/forgot-password",
        element: <ForgotPass />,
    },
    {
        path: "/reset-password",
        element: <ResetPass />,
    },
    {
        path: "*",
        element: <Navigate to="/" />,
    },
];

export const privateRoutes = [
    {
        path: "/",
        element: <Home />,
    },
];

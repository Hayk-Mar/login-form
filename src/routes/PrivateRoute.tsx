import { useEffect } from "react";
import { Navigate, Outlet, useLocation, useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { useAuth } from "services/useAuth";
import { userAuthState } from "store/userAuth";

const PrivateRoute = () => {
    const userData = localStorage.getItem("userAuth");
    const setUserAuth = useSetRecoilState(userAuthState);
    const { refreshToken, logout } = useAuth();
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        if (!userData) return;
        const auth = JSON.parse(userData);

        if (new Date(auth.refresh_token_expire).getTime() < (new Date().getTime() / 1000) && location.pathname !== '/login') {
            logout();
            return navigate('/login');
        }

        if(new Date(auth.token_expire).getTime() < (new Date().getTime() / 1000)) {
            refreshToken(auth);
        }
        
        setUserAuth(auth);
    }, []);

    return userData ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;

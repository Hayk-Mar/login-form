import Template from "components/Template";
import { useNavigate } from "react-router-dom";
import { useAuth } from "services/useAuth";

const Home = () => {
    const { logout } = useAuth();
    const navigate = useNavigate();

    const logoutHandling = () => {
        logout();
        navigate("/login");
    };

    return (
        <Template title="You can only logout ;)">
            <button className="btn submit-btn" onClick={logoutHandling}>
                Logout
            </button>
        </Template>
    );
};

export default Home;

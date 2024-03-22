import { Routes, Route, BrowserRouter } from "react-router-dom";
import { RecoilRoot } from "recoil";
import { openRoutes, privateRoutes } from "routes";
import PrivateRoute from "routes/PrivateRoute";
import { Toaster } from "react-hot-toast";

const App = () => {
    return (
        <RecoilRoot>
            <BrowserRouter>
                <Routes>
                    {openRoutes.map((route) => (
                        <Route {...route} key={route.path} />
                    ))}

                    <Route element={<PrivateRoute />}>
                        {privateRoutes.map((route) => (
                            <Route {...route} key={route.path} />
                        ))}
                    </Route>
                </Routes>
            </BrowserRouter>
            <Toaster />
        </RecoilRoot>
    );
};

export default App;

import { HashRouter, Routes, Route } from "react-router-dom";
import { RecoilRoot } from "recoil";
import { openRoutes, privateRoutes } from "routes";
import PrivateRoute from "routes/PrivateRoute";
import { Toaster } from "react-hot-toast";

const App = () => {
    return (
        <RecoilRoot>
            <HashRouter>
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
            </HashRouter>
            <Toaster />
        </RecoilRoot>
    );
};

export default App;

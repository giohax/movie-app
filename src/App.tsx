import Navbar from "./components/navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Search from "./pages/Search/Search";
import ListItemDetail from "./components/listItemDetail/ListItemDetail";

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Navbar />}>
                    <Route index element={<Home />} />
                    <Route path="search" element={<Search />} />
                    <Route
                        path="search/:movieId"
                        element={<ListItemDetail />}
                    />
                </Route>
            </Routes>
        </>
    );
}

export default App;

import React, { useContext, useEffect, useState } from "react";
import Featured from "./components/featured/Featured";
import List from "./components/list/List";
import Navbar from "./components/navbar/Navbar";
import { MoviesCtx, MoviesCtxProvider } from "./context/MoviesContext";

function App() {
    const [searchInput, setSearchInput] = useState<string>("");

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchInput(e.target.value);
    };

    const tryRequire = (id: string) => {
        try {
            return require(`./images/hero/${id}.jpeg`);
        } catch {
            return require(`./images/hero/defaultImage.jpeg`);
        }
    };

    return (
        <div className="App">
            {/* <input type="text" value={searchInput} onChange={handleSearch} />
            <ul>
                {movies &&
                    searchInput.length > 0 &&
                    movies
                        .filter((movie) =>
                            movie.title.toLowerCase().includes(searchInput)
                        )
                        .map((movie) => (
                            <li key={movie.id}>
                                <h1>Title: {movie.title}</h1>
                                <img
                                    src={tryRequire(movie.id)}
                                    alt="hero image"
                                />
                                <div>
                                    Genres:{" "}
                                    {movie.genres.map((genre) => (
                                        <p key={genre}>{genre}</p>
                                    ))}
                                </div>
                            </li>
                        ))}
            </ul> */}
            <MoviesCtxProvider>
                <AppInternal />
            </MoviesCtxProvider>
        </div>
    );
}

function AppInternal() {
    const movies = useContext(MoviesCtx);
    return (
        <>
            <Navbar />
            <Featured />
            <List />
            <List />
            <List />
            <List />
            <List />
            <List />
        </>
    );
}

export default App;

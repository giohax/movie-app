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

    const shuffleMovies = () => {
        return movies?.sort(() => 0.5 - Math.random()).slice(0, 10);
    };

    return (
        <>
            <Navbar />
            <Featured />
            {/* Recommended for you */}
            <List title="Recommended for you" movies={shuffleMovies()} />

            {/* New to Movieflix */}
            <List title="New to Movieflix" movies={shuffleMovies()} />

            {/* Continue Watching */}
            <List title="Continue Watching" movies={shuffleMovies()} />

            {/* Because You Watch Avatar */}
            <List title="Because You Watch Avatar" movies={shuffleMovies()} />

            {/* Critically Acclaimed */}
            <List title="Critically Acclaimed" movies={shuffleMovies()} />

            {/* Watch Again */}
            <List title="Watch Again" movies={shuffleMovies()} />
        </>
    );
}

export default App;

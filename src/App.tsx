import React, { useEffect, useState } from "react";

function App() {
    const [movies, setMovies] = useState<Movie[] | null>(null);
    const [searchInput, setSearchInput] = useState<string>("");

    const URL = "https://code-challenge.spectrumtoolbox.com/api/movies";

    type Movie = {
        id: string;
        title: string;
        genres: string[];
    };

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchInput(e.target.value);
    };

    useEffect(() => {
        fetch(URL, {
            method: "GET",
            headers: {
                Authorization: "Api-Key q3MNxtfep8Gt",
            },
        })
            .then((res) => res.json())
            .then((data) => setMovies(data.data));
    }, []);

    console.log(
        movies?.filter((movie) =>
            movie.title.toLowerCase().includes(searchInput)
        )
    );

    return (
        <div className="App">
            <input type="text" value={searchInput} onChange={handleSearch} />

            <ul>
                {movies &&
                    movies
                        .filter((movie) =>
                            movie.title.toLowerCase().includes(searchInput)
                        )
                        .map((movie) => (
                            <li key={movie.id}>
                                <h1>Title: {movie.title}</h1>
                                <div>
                                    Genres:{" "}
                                    {movie.genres.map((genre) => (
                                        <p key={genre}>{genre}</p>
                                    ))}
                                </div>
                            </li>
                        ))}
            </ul>
        </div>
    );
}

export default App;

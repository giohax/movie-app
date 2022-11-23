import React, { useEffect, useState } from "react";

function App() {
    const [movies, setMovies] = useState<Movie[] | null>(null);

    const URL = "https://code-challenge.spectrumtoolbox.com/api/movies";

    type Movie = {
        id: string;
        title: string;
        genres: string[];
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

    return (
        <div className="App">
            <ul>
                {movies?.map((movie) => (
                    <li key={movie.id}>{movie.title}</li>
                ))}
            </ul>
        </div>
    );
}

export default App;

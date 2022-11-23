import React, { useState } from "react";
import "./search.scss";

const Search = () => {
    const [searchInput, setSearchInput] = useState<string>("");

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchInput(e.target.value);
    };
    return (
        <div className="search">
            <input
                type="text"
                value={searchInput}
                onChange={handleSearch}
                className="search__input"
            />
            {/* <ul>
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
        </div>
    );
};

export default Search;

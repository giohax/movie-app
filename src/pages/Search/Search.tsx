import React, { useState, useContext } from "react";
import "./search.scss";
import ListItem from "../../components/listItem/ListItem";
import { MoviesCtx } from "../../context/MoviesContext";

const Search = () => {
    const [searchInput, setSearchInput] = useState<string>("");

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchInput(e.target.value);
    };

    const movies = useContext(MoviesCtx);

    return (
        <div className="search">
            <input
                type="text"
                value={searchInput}
                onChange={handleSearch}
                className="search__input"
            />

            <div className="search__result">
                {movies &&
                    searchInput.length > 0 &&
                    movies
                        .filter((movie) =>
                            movie.title.toLowerCase().includes(searchInput)
                        )
                        .map((movie) => <ListItem movie={movie} />)}
            </div>
        </div>
    );
};

export default Search;

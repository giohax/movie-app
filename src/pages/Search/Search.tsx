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

    const getMoviesByTitleOrGenre = () => {
        if (movies) {
            return movies
                .filter(
                    (movie, index) =>
                        movie.title.toLowerCase().includes(searchInput) ||
                        movie.genres
                            .reduce((acc, cur) => acc + cur, "")
                            .toLowerCase()
                            .includes(searchInput)
                )
                .map((movie) => <ListItem movie={movie} />);
        }
    };

    const getMoviesByTitleAndGenre = () => {};

    return (
        <div className="search">
            <input
                type="text"
                value={searchInput}
                onChange={handleSearch}
                className="search__input"
                placeholder="Search by title or genre"
            />

            <div className="search__result">
                {movies && searchInput.length > 0 && getMoviesByTitleOrGenre()}
            </div>
        </div>
    );
};

export default Search;

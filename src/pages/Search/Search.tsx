import React, { useState, useContext, useRef } from "react";
import "./search.scss";
import ListItem from "../../components/listItem/ListItem";
import { MoviesCtx } from "../../context/MoviesContext";
import { Outlet } from "react-router-dom";

const Search = () => {
    const [searchInput, setSearchInput] = useState<string>("");
    const genreKey = useRef<string>("");

    const moviesObj = useContext(MoviesCtx);

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchInput(e.target.value);
    };

    const getMoviesByTitleOrGenre = () => {
        const sanitized = (data: string) =>
            data.toLowerCase().trim().split(" ").join("");

        if (moviesObj?.movies) {
            if (moviesObj.genres.has(sanitized(searchInput))) {
                genreKey.current = sanitized(searchInput);
            }

            return moviesObj.movies
                .filter(
                    (movie) =>
                        //filter by genre or title
                        sanitized(movie.title).includes(
                            sanitized(searchInput)
                        ) ||
                        sanitized(
                            movie.genres.reduce((acc, cur) => acc + cur, "")
                        ).includes(sanitized(searchInput)) ||
                        //filter by genre + title
                        (movie.genres.some(
                            (genre) => sanitized(genre) === genreKey.current
                        ) &&
                            sanitized(movie.title).includes(
                                sanitized(searchInput).replace(
                                    genreKey.current,
                                    ""
                                )
                            ))
                )
                .map((movie) => <ListItem key={movie.id} movie={movie} />);
        }
    };

    const noResults = () => {
        return (
            <div className="search__result--none">
                <span>{`No results were found for "${searchInput}"`}</span>
            </div>
        );
    };

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
                {moviesObj &&
                    searchInput.length > 0 &&
                    getMoviesByTitleOrGenre()}
                {moviesObj && getMoviesByTitleOrGenre()?.length === 0
                    ? noResults()
                    : null}
            </div>
        </div>
    );
};

export default Search;

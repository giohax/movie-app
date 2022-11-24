import React, { useContext } from "react";
import { MoviesCtx } from "../../context/MoviesContext";
import Featured from "../../components/featured/Featured";
import List from "../../components/list/List";

const Home = () => {
    const moviesObj = useContext(MoviesCtx);

    const shuffleMovies = () => {
        return moviesObj?.movies?.sort(() => 0.5 - Math.random()).slice(0, 10);
    };

    return (
        <>
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
};

export default Home;

import React, { createContext, useEffect, useState } from "react";

export type Movie = {
    id: string;
    title: string;
    genres: string[];
};

type CtxProviderProps = {
    children: React.ReactNode;
};

type CtxProps = {
    movies: Movie[] | null;
    genres: Set<string>;
};

export const MoviesCtx = createContext<CtxProps | null>(null);

export function MoviesCtxProvider({ children }: CtxProviderProps) {
    const [movies, setMovies] = useState<Movie[] | null>(null);
    const [genres, setGenres] = useState<Set<string>>(new Set());
    const URL = "https://code-challenge.spectrumtoolbox.com/api/movies";

    const value = {
        movies,
        genres,
    };

    useEffect(() => {
        fetch(URL, {
            method: "GET",
            headers: {
                Authorization: "Api-Key q3MNxtfep8Gt",
            },
        })
            .then((res) => res.json())
            .then((data) => {
                setMovies(data.data);
                return data.data;
            })
            .then((movies) => {
                const set = new Set<string>();
                movies.forEach((movie: Movie) => {
                    movie.genres.forEach((genre) =>
                        set.add(genre.toLowerCase().trim().split(" ").join(""))
                    );
                });
                setGenres(new Set([...Array.from(set)]));
            });
    }, []);

    return <MoviesCtx.Provider value={value}>{children}</MoviesCtx.Provider>;
}

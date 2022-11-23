import React, { createContext, useEffect, useState } from "react";

export type Movie = {
    id: string;
    title: string;
    genres: string[];
};

type CtxProviderProps = {
    children: React.ReactNode;
};

export const MoviesCtx = createContext<Movie[] | null>(null);

export function MoviesCtxProvider({ children }: CtxProviderProps) {
    const [movies, setMovies] = useState<Movie[] | null>(null);
    const URL = "https://code-challenge.spectrumtoolbox.com/api/movies";

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

    return <MoviesCtx.Provider value={movies}>{children}</MoviesCtx.Provider>;
}

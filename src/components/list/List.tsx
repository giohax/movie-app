import React, { useState, useRef } from "react";
import ListItem from "../listItem/ListItem";
import "./list.scss";
import { Movie } from "../../context/MoviesContext";

type ListProps = {
    title: string;
    movies: Movie[] | undefined;
};

const List = ({ title, movies }: ListProps) => {
    const [isMoved, setIsMoved] = useState(false);
    const [slideNumber, setSlideNumber] = useState(0);

    const listRef = useRef<HTMLDivElement>(null);

    const handleClick = (direction: "left" | "right") => {
        setIsMoved(true);
        if (listRef.current) {
            let distance = listRef.current.getBoundingClientRect().x - 50;
            if (direction === "left" && slideNumber > 0) {
                setSlideNumber(slideNumber - 1);
                listRef.current.style.transform = `translateX(${
                    1275 + distance
                }px)`;
            }
            if (direction === "right" && slideNumber < 5) {
                setSlideNumber(slideNumber + 1);
                listRef.current.style.transform = `translateX(${
                    -1275 + distance
                }px)`;
            }
        }
    };

    return (
        <div className="list">
            <span className="list__title">{title}</span>
            <div className="list__wrapper">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-5 h-5"
                    onClick={() => handleClick("left")}
                >
                    <path
                        fillRule="evenodd"
                        d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z"
                        clipRule="evenodd"
                    />
                </svg>

                <div className="list__container" ref={listRef}>
                    {movies?.map((movie) => (
                        <ListItem key={movie.id} movie={movie} />
                    ))}
                </div>

                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-5 h-5"
                    onClick={() => handleClick("right")}
                >
                    <path
                        fillRule="evenodd"
                        d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                        clipRule="evenodd"
                    />
                </svg>
            </div>
        </div>
    );
};

export default List;

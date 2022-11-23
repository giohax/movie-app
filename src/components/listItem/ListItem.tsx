import "./listItem.scss";
import React from "react";
import { Movie } from "../../context/MoviesContext";

type ListItemProps = {
    movie: Movie;
};

const ListItem = ({ movie }: ListItemProps) => {
    let heroImage: string;

    try {
        heroImage = require(`../../images/hero/${movie.id}.jpeg`);
    } catch {
        heroImage = require(`../../images/hero/defaultImage.jpeg`);
    }

    return (
        <div className="listItem">
            <img src={heroImage} />
        </div>
    );
};

export default ListItem;

import "./listItem.scss";
import React from "react";
import { Movie } from "../../context/MoviesContext";
import { Link } from "react-router-dom";

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
        <Link to={`/search/${movie.id}`}>
            <div className="listItem">
                <img src={heroImage} />
            </div>
        </Link>
    );
};

export default ListItem;

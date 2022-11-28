import React, { useContext, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import "./listItemDetail.scss";
import { MoviesCtx } from "../../context/MoviesContext";
import { useParams } from "react-router-dom";

const ListItemDetail = () => {
    const moviesObj = useContext(MoviesCtx);
    const [description, setDescription] = useState("");
    const [title, setTitle] = useState("");
    const { id } = useParams();
    const URL = `https://code-challenge.spectrumtoolbox.com/api/movies/${id}`;

    useEffect(() => {
        fetch(URL, {
            method: "GET",
            headers: {
                Authorization: "Api-Key q3MNxtfep8Gt",
            },
        })
            .then((res) => res.json())
            .then((data) => {
                setDescription(data.data.description);
                setTitle(data.data.title);
            });
    }, []);

    const getHeroImage = () => {
        let heroImage: string;

        try {
            heroImage = require(`../../images/hero/${id}.jpeg`);
        } catch {
            heroImage = require(`../../images/hero/defaultImage.jpeg`);
        }
        return heroImage;
    };

    return (
        <div className="listItemDetail">
            <img src={getHeroImage()} />
            <div className="listItemDetail__overlay"></div>
            <div className="listItemDetail__info">
                <div className="listItemDetail__title">
                    <span>{title ? title : "Untitled"}</span>
                </div>
                <div className="listItemDetail__actions">
                    <button className="btn btn--play">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="w-5 h-5"
                        >
                            <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                        </svg>
                        PLAY
                    </button>
                </div>
                <span className="listItemDetail__desc">
                    {description ? description : "Description N/A"}
                </span>
            </div>
        </div>
    );
};

export default ListItemDetail;

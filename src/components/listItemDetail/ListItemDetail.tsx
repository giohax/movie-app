import React from "react";
import { createPortal } from "react-dom";
import "./listItemDetail.scss";
import featuredImage from "../../images/hero/SP015622350000.jpeg";

const ListItemDetail = () => {
    return (
        <div className="listItemDetail">
            <img src={featuredImage} />
            <div className="listItemDetail__info">
                <div className="listItemDetail__title">
                    <span>The Marksman</span>
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
                        Play
                    </button>
                </div>
                <span className="listItemDetail__desc">
                    Jim is a former Marine who lives a solitary life as a
                    rancher along the Arizona-Mexican border. But his peaceful
                    existence soon comes crashing down when he tries to protect
                    a boy on the run from members of a vicious cartel.
                </span>
            </div>
        </div>
    );
};

export default ListItemDetail;

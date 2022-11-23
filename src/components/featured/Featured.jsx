import React from "react";
import "./featured.scss";
import featuredImage from "../../images/hero/SP015622350000.jpeg";

const Featured = () => {
    return (
        <div className="featured">
            <img src={featuredImage} />
            <div className="featured__info">
                <span className="featured__info__desc">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Perspiciatis molestias possimus impedit alias quam ex
                    aliquid fugiat nam delectus, quia eos doloremque molestiae
                    animi adipisci sint? Itaque similique iste vel.
                </span>
                <div className="featured__info__buttons">
                    <button className="featured__info__buttons__play">
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
                    <button className="featured__info__buttons__more">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="w-5 h-5"
                        >
                            <path
                                fillRule="evenodd"
                                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z"
                                clipRule="evenodd"
                            />
                        </svg>
                        Info
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Featured;

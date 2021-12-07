import React from "react";
import PropTypes from "prop-types";

import "./Paginator.css";

const Paginator = ({currentPage, onChange, totalPages}) => {

    const onClickPrev = () => {
        const nextStage = currentPage - 1;

        if(nextStage > 0)
            onChange(nextStage);
    };

    const onClickNext = () => {
        const nextStage = currentPage + 1;

        if(nextStage <= totalPages)
            onChange(nextStage);
    };

    return(
    <div className="container paginator">
        <button onClick={onClickPrev}>Prev</button>

        <p>
            Page <span>{currentPage}</span> of {totalPages}
        </p>

        <button onClick={onClickNext}>Next</button>
    </div>
    );
};

Paginator.propTypes = {
    currentPage: PropTypes.number.isRequired,
    onChange: PropTypes.func.isRequired,
    totalPages: PropTypes.number.isRequired
};

export default Paginator;

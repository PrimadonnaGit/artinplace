import React from "react";
import PropTypes from "prop-types";
import "./magazine.css";
import more from "./imgs/magazines/magazine-icon.png";

function Magazine({id, title, src}){
    return (
        <div className="magazine">
            <div className="magazine-img">
                <img id={id} src={src} alt={title} title={title} />
                <img id="more" src={more} alt={{}}></img>
            </div>
        </div>
    );
}

Magazine.prototype = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired,
}

export default Magazine;
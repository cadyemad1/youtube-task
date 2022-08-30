import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

import './Loader.scss';

const Loader = () =>{
    return ( 
        <div className="loader">
        <div className="loader sm-show">
        <FontAwesomeIcon icon={faSpinner} />
        <h6>Loading..</h6>
        </div>

        <div className="lg-show-loader">
            <div className="loading-bar-container">
               <div className="loading-bar"></div>
            </div>

        </div>
        </div>
)}
export default Loader;
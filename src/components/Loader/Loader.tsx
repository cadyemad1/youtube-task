import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

import './Loader.scss';

const Loader = () =>{
    return ( 
        <div className="loader">
        <FontAwesomeIcon icon={faSpinner} />
        <h6>Loading..</h6>
        </div>
)}
export default Loader;
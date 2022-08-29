import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube } from "@fortawesome/free-brands-svg-icons";

import './Logo.scss'

const Logo = () =>{
    return(
<FontAwesomeIcon size="2x" className="logo" icon={faYoutube} />    )
}

export default Logo;
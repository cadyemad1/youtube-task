import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube } from "@fortawesome/free-brands-svg-icons";

import './Logo.scss'

const Logo = () =>{
    return(
        <>
         <img className="logo-img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpDf4TtjpzUV11nELiyadril9gSLfxSongqcScRwP2&s" width="130px"/>
         <FontAwesomeIcon size="2x" className="logo" icon={faYoutube} />  
        </>
 )}

export default Logo;
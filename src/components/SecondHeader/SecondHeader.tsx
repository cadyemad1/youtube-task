import {useContext} from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from "@fortawesome/free-solid-svg-icons";
import {AppContextProps} from '../../Types';

import Context from '../../context';

import './SecondHeader.scss';


const SecondHeader = () =>{
    const {totalResults}: AppContextProps = useContext(Context);
    
    if(!totalResults) return null;

    return(
        <div className='wrapper'>
            <div className="container">
                <p>About {totalResults} filtered results</p>
                <div className='filter'>
                <FontAwesomeIcon icon={faBars} />
                <p>FILTER</p>
                </div>
            </div>
        </div>
    )
}

export default SecondHeader
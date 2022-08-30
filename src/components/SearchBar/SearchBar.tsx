import React, {useState } from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

import './SearchBar.scss';
import {SearchProps} from '../../Types'



const Search = ({onSearch}:SearchProps) =>{
    const [searchValue,setSearchValue] = useState('');
    const [prevSearchValue,setprevSearchValue] = useState('');
    const [isInputChanged, setIsInputChanged] = useState(false);

    const handleSearchValue= (event:React.ChangeEvent<HTMLInputElement>) => {
        setSearchValue(event.target.value);
      };

    const handleClick = () =>{
        if(!searchValue) return;
        setIsInputChanged(!isInputChanged);
        onSearch(searchValue,prevSearchValue,setprevSearchValue);
    }
const handleKeyPress = (e:React.KeyboardEvent<HTMLInputElement>) =>{
   if(e.code !== "Enter") return;
   setIsInputChanged(!isInputChanged);
   onSearch(searchValue,prevSearchValue,setprevSearchValue);
}

const renderInput = () =><input type='search' value={searchValue} onChange={handleSearchValue} onKeyDown={(e)=>handleKeyPress(e)}/>

    return(
        <div className="search-bar">
            <div className="sm-show">
        {isInputChanged
        ?<h4 className="search-text">{searchValue}</h4> 
        :renderInput()}
            </div>
            <div className="lg-show">
            {renderInput()}
            </div>
        <button className="search-btn" onClick={handleClick}>
        <FontAwesomeIcon className="search-icon" icon={faMagnifyingGlass}/>
        </button>
    </div>
    )}
export default Search;
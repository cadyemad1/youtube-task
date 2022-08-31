import {useState ,ChangeEvent,KeyboardEvent} from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

import './SearchBar.scss';
import {SearchProps} from '../../Types'



const Search = ({onSearch}:SearchProps) =>{
    const [inputValue,setInputValue] = useState('');
    const [isInputChanged, setIsInputChanged] = useState(false);

    const handleSearchValue = (event:ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
      };

    const handleClick = () =>{
        if(!inputValue) return;
        setIsInputChanged(!isInputChanged);
        onSearch(inputValue);
    }

const handleKeyPress = (e:KeyboardEvent<HTMLInputElement>) =>{
   if(e.code !== "Enter") return;
   setIsInputChanged(!isInputChanged);
   onSearch(inputValue);
}

const renderInput = () =><input type='search' value={inputValue} onChange={handleSearchValue} onKeyDown={(e)=>handleKeyPress(e)}/>

    return(
        <div className="search-bar">
            <div className="sm-show">
        {isInputChanged
        ?<h4 className="search-text">{inputValue}</h4> 
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
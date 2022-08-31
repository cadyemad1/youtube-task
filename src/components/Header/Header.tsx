
import './Header.scss';

import Search from "../SearchBar/SearchBar";
import Logo from "../Logo/Logo";
import {SearchProps} from '../../Types'

const Header = ({onSearch}:SearchProps) =>{
    return (
        <div className="header">
            <div className="header-content">

       <Logo/>
        <Search onSearch={onSearch}/>
            </div>
        </div>
    )
}

export default Header;
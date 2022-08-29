import React from "react";

import './Header.scss';

import Search from "../SearchBar/SearchBar";
import Logo from "../Logo/Logo";

const Header = ({onSearch}:any) =>{

    return (
        <div className="header">
       <Logo/>
        <Search onSearch={onSearch}/>
        </div>
    )
}

export default Header;
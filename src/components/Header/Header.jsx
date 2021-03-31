import React from 'react';
import s from './Header.module.css';
import logo from '../../img/logo.svg';

const Header = ()=> {
    return(
        <div>
            <header className={s.header}>
                <h1>Social NetWork...</h1>
                <div className={s.logoImg}><img draggable='false' src={logo} alt="logo"/></div>
            </header>
        </div>
    );
}
export default Header;
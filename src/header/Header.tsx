import React from 'react';
import style from './Header.module.css'
import styleContainer from './../common/styles/Container.module.css'

import Nav from "../nav/Nav";

const Header = () => {
    return (
        <div className={style.header}>
            <div className={`${styleContainer.container} ${style.headerContainer}`}>
                <Nav/>
            </div>
        </div>
    );
};

export default Header;

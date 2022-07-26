import React from 'react';
import style from './Nav.module.css'

const Nav = () => {
    return (
        <div className={style.nav}>
            <a className={style.link} href="">General</a>
            <a className={style.link} href="">Skills</a>
            <a className={style.link} href="">Portfolio</a>
            <a className={style.link} href="">Contact</a>
        </div>
    );
};

export default Nav;

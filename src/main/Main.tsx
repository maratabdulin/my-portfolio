import React from 'react';
import style from './Main.module.css'
import styleContainer from './../common/styles/Container.module.css'
import avatarImg from './../common/pictures/avatar.webp'

const Main = () => {
    return (
        <div className={style.mainBlock}>
            <div className={`${styleContainer.container} ${style.mainContainer}`}>
                <div className={style.introduction}>
                    <p>Hi there</p>
                    <h1 className={style.title}>I am Abdulin Marat</h1>
                    <p>A frontend developer</p>
                </div>
                <div className={style.photoContainer}>
                    <img width={250} height={250} src={avatarImg} alt="avatar"/>
                </div>
            </div>
        </div>
    );
};

export default Main;

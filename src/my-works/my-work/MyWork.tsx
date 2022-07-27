import React, {FC} from 'react';
import style from './MyWork.module.css'

type MyWorkPropsType = {
    key: string
    title: string
    description: string
    imageUrl?: string
}

const MyWork: FC<MyWorkPropsType> = (props) => {
    return (
        <div key={props.key} className={style.work}>
            <div className={style.image}>
                <a className={style.link} href="#">push to watch</a>
            </div>
            <h3 className={style.title}>{props.title}</h3>
            <p className={style.description}>{props.description}</p>
        </div>
    );
};

export default MyWork;

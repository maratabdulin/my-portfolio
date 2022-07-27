import React from 'react';
import styles from './MyWorks.module.css'
import styleContainer from "../common/styles/Container.module.css";
import {v1} from "uuid";
import MyWork from "./my-work/MyWork";

type WorkType = {
    id: string
    title: string
    description: string
    imageUrl?: string
}

const myWorks: Array<WorkType> = [
    {id: v1(), title: 'Todolist', description: 'my first project'},
    {id: v1(), title: 'Social network', description: 'my second project'},
]

const MyWorks = () => {
    return (
        <div className={styles.myWorksBlock}>
            <div className={`${styleContainer.container} ${styles.myWorksContainer}`}>
                <h2 className={styles.title}>My Works</h2>
                <div className={styles.worksWrapper}>
                    {
                        myWorks.map(el => <MyWork key={el.id} title={el.title} description={el.description}/>)
                    }
                </div>
            </div>
        </div>
    );
};

export default MyWorks;

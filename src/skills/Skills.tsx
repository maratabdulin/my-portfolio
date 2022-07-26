import React from 'react';
import styles from './Skills.module.css'
import styleContainer from './../common/styles/Container.module.css'
import Skill from "./skill/Skill";
import {v1} from "uuid";

type SkillType = {
    id: string
    title: string
    content: string
    style?: string
}

const skillsInfo: Array<SkillType> = [
    {id: v1(), title: 'HTML', content: 'this is my first skill'},
    {id: v1(), title: 'CSS', content: 'this is my second skill'},
    {id: v1(), title: 'JS', content: 'this is my third skill'},
    {id: v1(), title: 'React', content: 'this is my most important skill'},
]

const Skills = () => {
    return (
        <div className={styles.skillsBlock}>
            <div className={`${styleContainer.container} ${styles.skillsContainer}`}>
                <h2 className={styles.title}>My Skills</h2>
                <div className={styles.skills}>
                    {skillsInfo.map(el => <Skill key={el.id} title={el.title} content={el.content}/>)}
                </div>
            </div>
        </div>
    );
};

export default Skills;

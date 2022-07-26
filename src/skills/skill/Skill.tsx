import React, {FC} from 'react';
import style from './Skill.module.css'

type SkillPropsType = {
    key: string
    title: string
    content: string
    iconStyle?: string
}

const Skill: FC<SkillPropsType> = (props) => {
    return (
        <div key={props.key} className={style.skill}>
            <div className={style.icon}></div>
            <h3 className={style.title}>{props.title}</h3>
            <div className={style.content}>{props.content}</div>
        </div>
    );
};

export default Skill;

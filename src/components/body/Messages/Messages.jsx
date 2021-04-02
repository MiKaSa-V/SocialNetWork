import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Messages.module.css';

const Message = (props) => {
    let path = "/messages/" + props.id;
    return (
        <div className={s.item}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    );
}

const TextMes = (props)=> {
    return (
        <div className={s.mes}>{props.text}</div>
    );
}

const Messages = (props) => {
    return (
        <div className={s.content}>
            <div className={s.messages}>
                <div className={s.mesItem}>
                    <Message name="Apple" id="1"/>
                    <Message name="Orange" id="2"/>
                    <Message name="Strawberry" id="3"/>
                    <Message name="Grape" id="4"/>
                    <Message name="Banana" id="5"/>
                </div>
            </div>
            <div className={s.textMes}>
                <TextMes text="Yo"/>
                <TextMes text="hello"/>
                <TextMes text="good"/>
                <TextMes text="ok"/>
            </div>
        </div>
    );
}
export default Messages;
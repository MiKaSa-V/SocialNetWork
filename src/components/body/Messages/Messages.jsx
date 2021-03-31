import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Messages.module.css';

const Messages = (props) => {
    return (
        <div className={s.content}>
            <div className={s.messages}>
                <div className={s.mesItem}>
                    <div className={s.item + " " + s.activeMes}>
                        <NavLink to='/messages'>Apple</NavLink>
                    </div>
                    <div className={s.item}>
                        <NavLink to='/messages'>Orange</NavLink>
                    </div>
                    <div className={s.item}>
                        <NavLink to='/messages'>Strawberry</NavLink>
                    </div>
                    <div className={s.item}>
                        <NavLink to='/messages'>Grape</NavLink>
                    </div>
                    <div className={s.item}>
                        <NavLink to='/messages' >Banana</NavLink>
                    </div>
                </div>
            </div>
            <div className={s.textMes}>
            <div className={s.mes}>hi</div>
            <div className={s.mes}>hello</div>
            <div className={s.mes}>good</div>
            <div className={s.mes}>ok</div>
            </div>
        </div>
    );
}
export default Messages;
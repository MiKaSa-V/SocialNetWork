import React from 'react';
import { NavLink } from 'react-router-dom';
import s from'./NavBar.module.css';

const NavBar = () => {
  return (
    <div>
      <nav className={s.navbar}>
        <div className={`${s.linkBar} ${s.active}`}>
          <NavLink to="profile" activeClassName={s.activeLink}>Profile</NavLink>
        </div>
        <div className={s.linkBar}>
          <NavLink to="messages" activeClassName={s.activeLink}>Messages</NavLink>
        </div>
        <div className={s.linkBar}>
          <NavLink to="news" activeClassName={s.activeLink}>News</NavLink>
        </div>
        <div className={s.linkBar}>
          <NavLink to="music" activeClassName={s.activeLink}>Music</NavLink>
        </div>
        <div className={s.linkBar}>
          <NavLink to="settings" activeClassName={s.activeLink}>Settings</NavLink>
        </div>
      </nav>
    </div>
  );
}
export default NavBar;
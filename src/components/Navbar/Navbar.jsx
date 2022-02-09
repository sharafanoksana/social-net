import React from "react";
import classes from "./Navbar.module.css";
import {NavLink} from "react-router-dom";
import Friends from "./Friends/Friends";

const Navbar = (props) => {

    return (
        <nav className={classes.nav}>
            <ul className={classes.nav__list}>
                <li className={classes.item}>
                    <NavLink to={'/profile'}>Profile</NavLink>
                </li>
                <li className={classes.item}>
                    <NavLink to={'/dialogs'}>Messages</NavLink>
                </li>
                <li className={classes.item}>
                    <NavLink to={'/news'}>News</NavLink>
                </li>
                <li className={classes.item}>
                    <NavLink to={'/music'}>Music</NavLink>
                </li>
                <li className={classes.item}>
                    <NavLink to={'/settings'}>Settings</NavLink>
                </li>
            </ul>
            <Friends friends={props.friends}/>
        </nav>
    );
}

export default Navbar;
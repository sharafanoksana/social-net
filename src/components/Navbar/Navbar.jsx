import React from "react";
import classes from "./Navbar.module.css";
import {NavLink} from "react-router-dom";
import Friends from "./Friends/Friends";
import StoreContext from "../../StoreContext";
import FriendsContainer from "./Friends/FriendsContainer";

const Navbar = () => {

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
            <FriendsContainer/>
        </nav>
    );
}

export default Navbar;
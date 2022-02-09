import React from "react";
import classes from "./Header.module.css";

const Header = () => {
    return (
        <header className={classes.header}>
            <img
                src={'https://img.icons8.com/dotty/80/000000/books.png'}
             alt={'иконка сайта - стопка книг'}/>
        </header>
    );
}

export default Header;
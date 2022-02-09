import React from "react";
import classes from "./Friends.module.css";

function FriendItem(props) {
    return (
        <div className={classes.friendItem}>
            <img src={props.avatar} className={classes.avatar}/>
            <div><p>{props.name}</p></div>
        </div>
    );
}
export default FriendItem;
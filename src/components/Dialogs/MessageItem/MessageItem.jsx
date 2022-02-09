import React from "react";
import classes from "../Dialogs.module.css";

const MessageItem = (props) => {
    return(
        <div className={props.idUser === 1 ? classes.message1 : classes.message}>
            {props.message}
            {props.idUser}
        </div>
    );
}
export default MessageItem;
import React, {useRef} from "react";
import classes from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import MessageItem from "./MessageItem/MessageItem";
// import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/dialogsReducer";

const Dialogs = (props) => {
    // let state = props.dialogsData;

    let dialogsItems = props.dialogsData.map((dialog) => {
        return (<DialogItem id={dialog.id} name={dialog.name} avatar={dialog.avatar}/>);
    });

    let messages = props.messeges.map((item) => {
       return (
           <MessageItem message={item.message} idUser={item.idUser}/>
       );
    });

    let onSendMessageClick = () => {
        props.addMessage();
    }

    let onNewMessageChange = (event) => {
        let text = event.target.value;
         props.onNewMessageChange(text);
    }

    let newMessageText = props.newMessageText;

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogsItems}
            </div>
            <div className={classes.messagesItems}>
                {messages}
                <div>
                    <textarea
                        onChange={onNewMessageChange}
                        value={newMessageText}
                        placeholder={'Enter your message'}
                        name="myMessage"
                        id="myMessage"
                        cols={90}
                        rows={1}
                    />
                </div>
                <div>
                    <button onClick={onSendMessageClick}>Send</button>
                </div>
            </div>
        < /div>
    );
}
export default Dialogs;
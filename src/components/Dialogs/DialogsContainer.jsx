import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/dialogsReducer";
import React from "react";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {
    let state = props.store.getState().dialogsPage;

    let onSendMessageClick = () => {
        props.store.dispatch(addMessageActionCreator());
    }

    let onNewMessageChange = (text) => {
        props.store.dispatch(updateNewMessageTextActionCreator(text));
    }

  return (
      <Dialogs onNewMessageChange={onNewMessageChange}
               addMessage={onSendMessageClick}
               dialogsData={state.dialogsData}
               newMessageText={state.newMessageText}
               messeges={state.messageData}
      />
  );
}
export default DialogsContainer

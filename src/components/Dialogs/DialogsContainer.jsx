import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/dialogsReducer";
import React from "react";
import Dialogs from "./Dialogs";
import StoreContext from "../../StoreContext";

const DialogsContainer = () => {
    return (
        <StoreContext.Consumer>
            { store => {
                let state = store.getState().dialogsPage;

                let onSendMessageClick = () => {
                    store.dispatch(addMessageActionCreator());
                }

                let onNewMessageChange = (text) => {
                    store.dispatch(updateNewMessageTextActionCreator(text));
                }
                return (
                    <Dialogs onNewMessageChange={onNewMessageChange}
                             addMessage={onSendMessageClick}
                             dialogsData={state.dialogsData}
                             newMessageText={state.newMessageText}
                             messeges={state.messageData}
                    />);
            }}
        </StoreContext.Consumer>
    );
}
export default DialogsContainer

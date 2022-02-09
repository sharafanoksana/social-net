const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let initialState = {
        dialogsData: [
            {
                id: 1,
                name: 'Oksana',
                avatar: 'https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?size=338&ext=jpg'
            },
            {
                id: 2,
                name: 'Max',
                avatar: 'https://html5css.ru/w3images/avatar2.png'
            },
            {
                id: 3,
                name: 'Olga',
                avatar: 'https://html5css.ru/w3images/avatar6.png'
            },
            {
                id: 4,
                name: 'Pavel',
                avatar: 'https://png.pngtree.com/png-vector/20191101/ourmid/pngtree-businessman-avatar-icon-flat-style-png-image_1917273.jpg'
            },
            {
                id: 5,
                name: 'Oleg',
                avatar: 'https://html5css.ru/howto/img_avatar.png'
            }
        ],
        messageData: [
            {id: 1, message: 'Hi!', idUser: 1},
            {id: 2, message: 'How are you?', idUser: 2},
            {id: 3, message: 'I\'m fine )', idUser: 1},
            {id: 4, message: 'Ok', idUser: 2},
        ],
        newMessageText: ''
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            let newMessage = {
                id: 5,
                message: state.newMessageText,
                idUser: 1
            }
            state.messageData.push(newMessage);
            state.newMessageText = "";
            break;
        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageText = action.newMessage;
            break;
        default:
            return state;
    }
    return state;
}

export const addMessageActionCreator = () => ({type: SEND_MESSAGE});
export const updateNewMessageTextActionCreator = (text) =>
    ({type: UPDATE_NEW_MESSAGE_TEXT, newMessage: text});

export default dialogsReducer;
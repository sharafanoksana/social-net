// import profileReducer from "./profileReducer";
// import dialogsReducer from "./dialogsReducer";
// import sidebarReducer from "./sidebarReducer";
//
// let store = {
//     _state: {
//         profilePage: {
//             postData: [
//                 {id: 1, message: 'Hi, how are you?', likesCount: 1},
//                 {id: 2, message: 'Hi', likesCount: 0},
//                 {id: 3, message: '?', likesCount: 110},
//                 {id: 4, message: 'Hi, how are you?', likesCount: 101},
//                 {id: 5, message: 'It`s my first post!', likesCount: 15}
//             ],
//             newPostText: 'My newPostText'
//         },
//         dialogsPage: {
//             dialogsData: [
//                 {
//                     id: 1,
//                     name: 'Oksana',
//                     avatar: 'https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?size=338&ext=jpg'
//                 },
//                 {
//                     id: 2,
//                     name: 'Max',
//                     avatar: 'https://html5css.ru/w3images/avatar2.png'
//                 },
//                 {
//                     id: 3,
//                     name: 'Olga',
//                     avatar: 'https://html5css.ru/w3images/avatar6.png'
//                 },
//                 {
//                     id: 4,
//                     name: 'Pavel',
//                     avatar: 'https://png.pngtree.com/png-vector/20191101/ourmid/pngtree-businessman-avatar-icon-flat-style-png-image_1917273.jpg'
//                 },
//                 {
//                     id: 5,
//                     name: 'Oleg',
//                     avatar: 'https://html5css.ru/howto/img_avatar.png'
//                 }
//             ],
//             messageData: [
//                 {id: 1, message: 'Hi!', idUser: 1},
//                 {id: 2, message: 'How are you?', idUser: 2},
//                 {id: 3, message: 'I\'m fine )', idUser: 1},
//                 {id: 4, message: 'Ok', idUser: 2},
//             ],
//             newMessageText: ''
//         },
//         sidebar: {
//             friendData: [
//             {
//                 id: 2,
//                 name: 'Max',
//                 avatar: 'https://html5css.ru/w3images/avatar2.png'
//             },
//             {
//                 id: 3,
//                 name: 'Olga',
//                 avatar: 'https://html5css.ru/w3images/avatar6.png'
//             },
//             {
//                 id: 4,
//                 name: 'Pavel',
//                 avatar: 'https://png.pngtree.com/png-vector/20191101/ourmid/pngtree-businessman-avatar-icon-flat-style-png-image_1917273.jpg'
//             },
//             {
//                 id: 2,
//                 name: 'Max',
//                 avatar: 'https://html5css.ru/w3images/avatar2.png'
//             },
//             {
//                 id: 3,
//                 name: 'Olga',
//                 avatar: 'https://html5css.ru/w3images/avatar6.png'
//             },
//             {
//                 id: 2,
//                 name: 'Max',
//                 avatar: 'https://html5css.ru/w3images/avatar2.png'
//             },
//             {
//                 id: 3,
//                 name: 'Olga',
//                 avatar: 'https://html5css.ru/w3images/avatar6.png'
//             }
//         ]
//         }
//     },
//
//     _callSubscriber() {
//         console.log('State was changed');
//     },
//
//     subscribe(observer) {
//         this._callSubscriber = observer;
//     },
//     getState() {
//         return this._state;
//     },
//
//     dispatch(action) {
//         this._state.profilePage = profileReducer(this._state.profilePage, action);
//         this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
//         this._state.sidebar = sidebarReducer(this._state.sidebar, action);
//         this._callSubscriber(this._state)
//     }
// }
//
// export default store;
// window.store = store;

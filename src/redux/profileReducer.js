const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    postData: [
        {id: 1, message: 'Hi, how are you?', likesCount: 1},
        {id: 2, message: 'Hi', likesCount: 0},
        {id: 3, message: '?', likesCount: 110},
        {id: 4, message: 'Hi, how are you?', likesCount: 101},
        {id: 5, message: 'It`s my first post!', likesCount: 15}
    ],
    newPostText: 'My newPostText'
}

const profileReducer = (state = initialState, action) => {
    let stateCopy = {
        ...state,
        postData: [...state.postData]
    };
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 7,
                message: stateCopy.newPostText,
                likesCount: 0
            };
            stateCopy.postData.push(newPost);
            stateCopy.newPostText = '';
            return stateCopy
        };
        case UPDATE_NEW_POST_TEXT: {
            stateCopy.newPostText = action.newText;
            return stateCopy;
        };
        default:
            return state;
    }
}

export const addPostActionCreator = () => ({type: ADD_POST});

export const updateNewPostTextActionCreator = (text) =>
    ({type: UPDATE_NEW_POST_TEXT, newText: text});

export default profileReducer;
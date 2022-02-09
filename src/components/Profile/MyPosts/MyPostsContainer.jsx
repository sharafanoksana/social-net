import React from "react";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";

const MyPostsContainer = (props) => {

    let state = props.store.getState();

    let addPost = () => {
        props.store.dispatch(addPostActionCreator());
    };

    let onPostChange = (text) => {
        props.store.dispatch(updateNewPostTextActionCreator(text));
    };

    return (
        <MyPosts addPost={addPost}
                 updateNewPostText={onPostChange}
                 posts={state.profilePage.postData}
                 newPostText={state.profilePage.newPostText}/>
    );
}
export default MyPostsContainer;
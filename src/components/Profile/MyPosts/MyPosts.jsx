import React, {useRef} from "react";
import classes from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {

    let postElements = props.posts.map((p) => {
        return <Post message={p.message} likesCount={p.likesCount} key={p.id}/>
    });

    let newPostElement = useRef(null);

    let onAddPost = () => {
        props.addPost();
    };

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    };

    return (
        <div className={classes.postBlock}>
            <div className={classes.item}>
                <h3>My post</h3>
                <div>
                    <textarea
                        ref={newPostElement}
                        onChange={onPostChange}
                        value={props.newPostText}
                        name="myPost"
                        id="myPost"
                        cols="30"
                        rows="3"
                    />
                </div>
                <div className={classes.buttonBlock}>
                    <button onClick={onAddPost}>Add post</button>
                </div>
            </div>
            {postElements}
        </div>
    );
}
export default MyPosts;
import React from "react";
import FriendItem from "./FriendItem";
import classes from './Friends.module.css'

const Friends = (props) => {
    console.log(props)
    let friends = props.friends.map((el) => {
        return (<FriendItem avatar={el.avatar} name={el.name}/>)
    });
    return(
        <div className={classes.friends}>
            <h3>My friends</h3>
            <div className={classes.listFriends}>
                {friends}
            </div>
        </div>
    );
}
export default Friends;

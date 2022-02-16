import React from "react";
import FriendItem from "./FriendItem";
import classes from './Friends.module.css'

const Friends = (props) => {

    let friends = props.friends.map((el) => {
        return (<FriendItem avatar={el.avatar} name={el.name} key={el.id}/>)
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

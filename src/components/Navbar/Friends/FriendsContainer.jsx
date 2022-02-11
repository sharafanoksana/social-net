import React from "react";
import Friends from "./Friends";
import StoreContext from "../../../StoreContext";

const FriendsContainer = () => {

    return (
        <StoreContext.Consumer>
            { store => {
                const friends = store.getState().sidebar.friendData;
                return (
                    <Friends friends={friends}/>
                )
            }
            }
        </StoreContext.Consumer>
    );
}
export default FriendsContainer;

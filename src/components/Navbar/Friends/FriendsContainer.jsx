import React from "react";
import Friends from "./Friends";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        friends: state.sidebar.friendData
    }
}
// let mapDispatchToProps = (dispatch) => {
//     return {
//
//     }
// }

const FriendsContainer = connect(mapStateToProps)(Friends);
export default FriendsContainer;

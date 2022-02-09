import React from "react";
import classes from "./ProfileInfo.module.css";

const ProfileInfo = (props) => {
    return (
        <div>
            <img alt={'фото профиля'}
                 src={'https://bigpicture.ru/wp-content/uploads/2019/04/grandbeauty27.jpg'}
                 src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4VbecijYYukz6zhHgOmdSJePIJE_QqCEETA&usqp=CAU'}
            />
            <div className={classes.description}>
                ava+ description
            </div>
        </div>
    );
}

export default ProfileInfo;
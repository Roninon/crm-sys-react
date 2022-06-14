import React from 'react';
import classes from './AppButton.module.css';

function AppButton(props) {
    return (
        <button className={classes.post__button}>{props.name}</button>
    );
}

export default AppButton;
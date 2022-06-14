import React from 'react';
import classes from './AppButton.module.css';

function AppButton({ ...props }) {
    return (
        <div>
            <button className={classes.post__button}>
                {props.name}
            </button>
        </div>
    );
}

export default AppButton;
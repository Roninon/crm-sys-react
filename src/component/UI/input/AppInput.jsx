import React from 'react';
import classes from './AppInput.module.css'

function AppInput(props) {
    return (
        <input
            className={classes.input}
            type='text'
            value={props.value}
            {...props}
        />
    );
}

export default AppInput;
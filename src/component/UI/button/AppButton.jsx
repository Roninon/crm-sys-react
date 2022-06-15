import React from 'react';
import classes from './AppButton.module.css';

function AppButton({children, ...props}) {
    return (
        <div>
            <button {...props} className={classes.post__button}>
                {children}
            </button>
        </div>
    );
}

export default AppButton;
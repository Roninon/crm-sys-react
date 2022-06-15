import React from 'react';
import AppButton from './UI/button/AppButton';

const PostItem = (props) => {
    return (
        <div className='post'>
            <div className="post__content">
                <strong>{props.id}. {props.title}</strong>
                <p>{props.body}</p>
            </div>
            <AppButton>Удалить</AppButton>

        </div>
    );
}

export default PostItem;
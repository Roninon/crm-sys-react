import React from 'react';

function PostItem() {
    return (
        <div className='post'>
            <div className="post__content">
                <strong>1. Название мартшрута</strong>
                <p>Описание</p>
            </div>
            <div>
                <button className="post__button">Удалить</button>
            </div>

        </div>
    );
}

export default PostItem;
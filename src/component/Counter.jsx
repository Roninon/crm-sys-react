import React, {useState} from 'react';

const Counter = function() {

    const [count, setCount] = useState(0)
    const [value, setValue] = useState('')
    
    function increment() {
        setCount(count + 1)
    }

    function decrement() {
        setCount(count - 1)
    }

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
    )
}

export default Counter;
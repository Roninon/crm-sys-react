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
        <div>
            <h1>{count}</h1>
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
            <hr/>
            <h2>1</h2>
            <h3>{value}</h3>
            <input
                type='text'
                value={value}
                onChange={event => setValue(event.target.value)}
            />
        </div>
    )
}

export default Counter;
import React, { useState } from 'react';
import TestPage from './component/TestPage';
import PostList from './component/PostList'
import AppButton from './component/UI/button/AppButton';
import AppInput from './component/UI/input/AppInput';
import './styles/App.css'

function App() {

    const [posts, setPosts] = useState([
        { id: 1, title: 'Javascript', body: 'Описание JS' },
        { id: 2, title: 'Python', body: 'Описание Py' },
        { id: 3, title: 'Lua', body: 'Описание Lua' },
        { id: 4, title: 'Lua', body: 'Описание Lua' },
    ]);

    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');

    const addNewRoute = (e) => {
        e.preventDefault();
        const newPost = {
            id: Date.now(),
            title,
            body
        }
        console.log(newPost)
    }

    return (
        <div className="App">
            <TestPage />
            <form>
                <AppInput onChange={e => setTitle(e.target.value)} value={title} placeholder="Название маршрута" />
                <AppInput onChange={e => setBody(e.target.value)} value={body} placeholder="Исполнитель" />
                <AppButton onClick={addNewRoute}>Создать маршрут</AppButton>
            </form>


            <PostList posts={posts} title={'Список маршрутов'} />
        </div>
    );
}

export default App;

import React, { useState } from 'react';
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

    return (
        <div className="App">
            <form>
                <AppInput value={''} placeholder={'Название маршрута'}/>
                <AppInput value={''} placeholder={'Исполнитель'}/>
                <AppButton className='form__AppButton'/>
            </form>


            <PostList posts={posts} title={'Список маршрутов'}/>
        </div>
    );
}

export default App;

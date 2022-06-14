import React, {useState} from 'react';
import PostItem from './component/PostItem'
import './styles/App.css'

function App() {

    const [posts, setPosts] = useState([
        {id: 1, title: 'Javascript', body: 'Описание JS'},
        {id: 2, title: 'Python', body: 'Описание Py'},
        {id: 3, title: 'Lua', body: 'Описание Lua'},
        {id: 4, title: 'Lua', body: 'Описание Lua'},
        {id: 5, title: 'Lua', body: 'Описание Lua'},
        {id: 6, title: 'Lua', body: 'Описание Lua'},
    ]);

    return (
        <div className="App">
            <h1 style={{textAlign: 'center'}}>
                Список маршрутов
            </h1>
            {posts.map(post => 
                <PostItem title={post.title} body={post.body} key={post.id} id={post.id}/>
            )},

        </div>
    );
}

export default App;

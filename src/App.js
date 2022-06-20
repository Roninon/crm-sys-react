import React, { useEffect, useState } from 'react';
import TestPage from './component/TestPage';
import PostList from './component/PostList'
import AppButton from './component/UI/button/AppButton';
import AppInput from './component/UI/input/AppInput';
import TestCard from './component/TestCard';
import getUsersFromApi from './api/api'
import Container from '@mui/material/Container';
import {Grid} from '@mui/material';
import './styles/App.css'


function App() {

    const [posts, setPosts] = useState([getUsersFromApi()]);
    // { id: 1, controllerName: 'Javascript', controllerRoute: 'Описание Маршрута', controllerId: 1 },
    // { id: 2, controllerName: 'Python', controllerRoute: 'Описание Маршрута', controllerId: 2 },
    // { id: 3, controllerName: 'Lua', controllerRoute: 'Описание Маршрута', controllerId: 3 },
    // { id: 4, controllerName: 'Lua', controllerRoute: 'Описание Маршрута', controllerId: 4 },
    // { id: 5, controllerName: 'Javascript', controllerRoute: 'Описание Маршрута', controllerId: 5 },
    // { id: 6, controllerName: 'Python', controllerRoute: 'Описание Маршрута', controllerId: 6 },
    // { id: 7, controllerName: 'Lua', controllerRoute: 'Описание Маршрута', controllerId: 7 },
    // { id: 8, controllerName: 'Lua', controllerRoute: 'Описание Маршрута', controllerId: 8 },
    // { id: 9, controllerName: 'Javascript', controllerRoute: 'Описание Маршрута', controllerId: 9 },
    // { id: 10, controllerName: 'Python', controllerRoute: 'Описание Маршрута', controllerId: 10 },
    // { id: 11, controllerName: 'Lua', controllerRoute: 'Описание Маршрута', controllerId: 11 },
    // { id: 12, controllerName: 'Lua', controllerRoute: 'Описание Маршрута', controllerId: 12 },

    const [users, setUsers] = useState([]);

    // const userSeeter = async () => {
    //     setUsers(await getUsersFromApi())
    // }
    useEffect(() => {
        getUsersFromApi().then(setUsers)
    }, [])

    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');

    const addNewRoute = (e) => {
        e.preventDefault();
        const newPost = {
            id: Date.now(),
            title,
            body
        }
    }

    return (
        <div className="App">
            <div className="empty-box">

            </div>
            <TestPage />
            {/* <form>
                <AppInput onChange={e => setTitle(e.target.value)} value={title} placeholder="Название маршрута" />
                <AppInput onChange={e => setBody(e.target.value)} value={body} placeholder="Исполнитель" />
                <AppButton onClick={addNewRoute}>Создать маршрут</AppButton>
            </form> */}
            <Container maxWidth="md">
                <Grid container direction={"column"} spacing={2}>
                    {users.map((user) => (
                        <Grid item key={user.id}>
                            <TestCard
                                sx={{marginBottom: "15px"}}
                                email={user.email}
                                name={user.name}
                                city={user.address.city}
                                phone={user.phone}
                                id={user.id}
                            />
                        </Grid>
                    ))}
                </Grid>
                {/* <PostList className={PostList} posts={posts} title={'Список маршрутов'} /> */}
            </Container>
            <div className="empty-box"></div>



        </div>
    );
}

export default App;

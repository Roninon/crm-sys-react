import React, { useEffect, useState } from 'react';
import TestPage from './component/TestPage';
import TestCard from './component/TestCard';
import getUsersFromApi from './api/api'
import Container from '@mui/material/Container';
import {Grid} from '@mui/material';
import './styles/App.css'
import { authLogin, authMe } from './api/auth';
import LoginPage from './component/LoginPage';

function Appw() {
    
    useEffect(() => {
        authLogin({
            login: 'root',
            password: '123'
        }).then(async (res) => {
            localStorage.setItem('token', res.result.token)
            alert(JSON.stringify(await authMe()))

        })
    }, [])
    return 'test'
}

function App() {
    return (
        <LoginPage/>
    )
}

function App2() {

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

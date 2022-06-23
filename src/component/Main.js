import React, { useEffect, useState } from 'react';
import NavBar from './NavBar';
import TestCard from './TestCard';
import getUsersFromApi from '../api/api'
import Container from '@mui/material/Container';
import { Grid } from '@mui/material';
import '../styles/App.css';

const Main = () => {

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
        <>
            <div className="empty-box">
            </div>
            <NavBar />
            <Container maxWidth="md">
                <Grid container direction={"column"} spacing={2}>
                    {users.map((user) => (
                        <Grid item key={user.id}>
                            <TestCard
                                sx={{ marginBottom: "15px" }}
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
        </>
    );
};

export default Main;
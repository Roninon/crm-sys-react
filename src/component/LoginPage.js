import { Button, Chip, Grid, Paper, TextField, Tooltip } from '@mui/material';
import { Container } from '@mui/system';
import React, { useEffect, useState } from 'react';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import { authLogin, authMe } from '../api/auth';
import { Link } from 'react-router-dom';

function makeEventSetter(setter) {
    return event => setter(event.target.value)
}

const LoginPage = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    function handleSubmit(event) {
        event.preventDefault();
        // if (event.target.type === "text") {
        //     setUsername(event.target.value)
        // };

        // if (event.target.type === "password") {
        //     setPassword(event.target.value)
        // }
    }

    function postAuth() {
        console.log({
            login: username,
            password: password
        })
        authLogin({
            login: username,
            password: password
        }).then(async (res) => {
            if (res.result) {
                console.log(res)
                localStorage.setItem('token', res.result.token)
                console.log(JSON.stringify(await authMe()))

            } else if (res.problem) {
                console.log(res.problem)
            } else {
                console.log("wrong answer from server")
            }


        })
    }

    useEffect(() => {

    }, []);


    return (
        <div>
            <Container maxWidth="sm">
                <form onSubmit={handleSubmit} sx={{ displat: "flex", justifyContent: "space-around" }}>
                    <Grid
                        container
                        direction="column"
                        justifyContent="center"
                        sx={{ minHeight: "100vh", maxWidth: "260px" }}
                    >
                        <Paper
                            elevation={2}
                            sx={{ padding: "15px" }}
                        >
                            <Grid
                                container
                                direction="column"
                                spacing={2}
                            >
                                <Grid item>
                                    <TextField
                                        onChange={makeEventSetter(setUsername)}
                                        size='large'
                                        id="filled-basic"
                                        label="Логин"
                                        variant="outlined"
                                        type="text"
                                        autoFocus
                                    />
                                </Grid>
                                <Grid item>
                                    <TextField
                                        size='large'
                                        id="filled-basi"
                                        label="Пароль"
                                        variant="outlined"
                                        type="password"
                                        onChange={makeEventSetter(setPassword)}
                                    />
                                </Grid>
                                <Grid item>
                                    <Link to="/">
                                        <Button onClick={postAuth} type="submit" variant='outlined'>Войти</Button>
                                    </Link>
                                    <Tooltip title="Тестовая версия сайта" arrow>
                                        <Chip
                                            icon={<HelpOutlineIcon />}
                                            label="Бета"
                                            sx={{ float: "right" }}
                                        />
                                    </Tooltip>
                                </Grid>
                            </Grid>
                        </Paper>
                    </Grid>
                </form>
            </Container>
        </div>
    );
};

export default LoginPage;
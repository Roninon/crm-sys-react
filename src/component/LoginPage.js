import { Button, Chip, Grid, Paper, TextField, Tooltip } from '@mui/material';
import { Container } from '@mui/system';
import React, { useState } from 'react';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';

const LoginPage = () => {

    const [login, setLogin] = useState({
        username: '',
        password: '',
    });


    return (
        <div>
            <Container maxWidth="sm">
                <Grid
                    container
                    direction="column"
                    justifyContent="center"
                    sx={{ minHeight: "100vh" }}
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
                                    size='large'
                                    id="filled-basic"
                                    label="Логин"
                                    variant="outlined"
                                    autoFocus
                                />
                                {login.username}
                            </Grid>
                            <Grid item>
                                <TextField
                                    size='large'
                                    id="filled-basic"
                                    label="Пароль"
                                    variant="outlined"
                                    type="password"
                                    value={value => setLogin(value)}
                                />
                            </Grid>
                            <Grid item>
                                <Button variant='outlined'>Войти</Button>
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
            </Container>
        </div>
    );
};

export default LoginPage;
import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { CardHeader, IconButton } from '@mui/material';
import { DeleteForever, Edit } from '@mui/icons-material';
import Tooltip from '@mui/material/Tooltip';
import Divider from '@mui/material/Divider';
import ButtonGroup from '@mui/material/ButtonGroup'
import LinearProgress from './LinearProgress'


export default function BasicCard(props) {

    return (
        <>
            <Card sx={{ minWidth: 275 }}>
                <CardHeader
                    action={
                        <ButtonGroup
                            variant="text"
                            orientation="horizontal"
                            size="small"
                            aria-label="small button group">
                            {[ // Edit button on card
                                <Tooltip key={1} title="Изменить данные " enterDelay={700} leaveDelay={100} arrow>
                                    <Button
                                        color="primary"
                                        onClick={() => { console.log(props.id) }}
                                        startIcon={
                                            <Edit color="primary" />
                                        }
                                    >
                                        Изменить
                                    </Button>
                                </Tooltip>,
                                // Delete button on card
                                <Tooltip key={2} title="Удалить менеджера" enterDelay={700} leaveDelay={100} arrow>
                                    <Button
                                        sx={{ color: "#D14343" }}
                                        onClick={() => { console.log('DELETE', props.id) }}
                                        startIcon={
                                            <DeleteForever sx={{ color: "#D14343" }} />
                                        }
                                    >
                                        Удалить
                                    </Button>
                                </Tooltip>
                            ]}
                        </ButtonGroup>
                    }
                    title={props.name}
                    subheader={'Телефон - ' + props.phone}
                >
                </CardHeader>

                <Divider /> {/* ---------------------- */}

                <CardContent>
                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                        {props.title}
                    </Typography>

                    <Typography variant="h5" component="div">
                        {props.title}
                    </Typography>

                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                        adjective
                    </Typography>

                    <Typography variant="body2">
                        well meaning and kindly.
                        <br />
                        {'"a benevolent smile"'}
                    </Typography>
                </CardContent>

                <CardActions>
                    {/* <LinearProgress/> */}
                </CardActions>

            </Card>
            {/* <DialogEdit props={open} /> */}
        </>
    );
}

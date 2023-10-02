import { Box, Button, Card, CardActions, CardContent, CardMedia, IconButton, Modal, Stack, Typography } from "@mui/material"
import { players } from "../shared/ListOfPlayers"
import Grid from '@mui/material/Unstable_Grid2'
import { MoreVertRounded } from "@mui/icons-material"
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Players() {
    // const [openingPlayer, setOpeningPlayer] = useState(undefined);

    return (
        <Grid container spacing={2}>
            {players.map(player => (
                <Grid xs={12} sm={6} md={4}>
                    <Card>
                        <CardMedia
                            component="img"
                            alt={player.name}
                            image={player.img}
                        />
                        <CardContent sx={{ pb: 0 }}>
                            <Stack direction='row' justifyContent='space-between'>
                                <Typography gutterBottom align="left" variant="h5" component="div">
                                    {player.name}
                                </Typography>
                                <IconButton sx={{ marginLeft: "auto" }}>
                                    <MoreVertRounded />
                                </IconButton>
                            </Stack>
                        </CardContent>
                        <CardActions>
                            <Button size="small" component={Link} to={`/detail/${player.id}`}>Detail</Button>
                        </CardActions>
                    </Card>
                </Grid>
            ))
            }

            {/* Modal for displaying details of selected player */}
            {/* <Modal
                open={openingPlayer}
                onClose={() => setOpeningPlayer(undefined)}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    minWidth: '300px'
                }}>
                    {openingPlayer ? (
                        <Card>
                            <CardMedia
                                component="img"
                                alt={openingPlayer.name}
                                image={openingPlayer.img}
                            />
                            <CardContent sx={{ pb: 0 }}>
                                <Stack direction='row' justifyContent='space-between'>
                                    <Typography gutterBottom align="left" variant="h5" component="div">
                                        {openingPlayer.name}
                                    </Typography>
                                    <IconButton sx={{ marginLeft: "auto" }}>
                                        <MoreVertRounded />
                                    </IconButton>
                                </Stack>
                                <Typography>
                                    {openingPlayer.info}
                                </Typography>
                            </CardContent>
                        </Card>
                    ) : ""}
                </Box>
            </Modal> */}
        </Grid >
    )
}
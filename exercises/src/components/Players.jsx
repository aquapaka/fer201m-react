import { Button, Card, CardActions, CardContent, CardMedia, IconButton, Stack, Typography } from "@mui/material"
import { players } from "../shared/ListOfPlayers"
import Grid from '@mui/material/Unstable_Grid2'
import { MoreVertRounded } from "@mui/icons-material"

export default function Players() {
    return (
        <Grid container spacing={2}>

            {players.map(player => (
                <Grid xs={12} sm={6} md={4}>
                    <Card>
                        <CardMedia
                            component="img"
                            alt={player.name}
                            height="200"
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
                            <Button size="small">Detail</Button>
                        </CardActions>
                    </Card>
                </Grid>
            ))
            }
        </Grid >
    )
}
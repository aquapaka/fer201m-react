import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material'
import { Film } from '../shared/ListOfFilms'
import { Link } from 'react-router-dom'

export default function FilmCard({ film }: { film: Film }) {
    return (
        <Card sx={{ position: "relative" }} component={Link} to={`/details/${film.id}`}>
            <CardActionArea>
                <CardMedia component={"img"} image={film.image} alt={film.title} />
            </CardActionArea>
            <CardContent sx={{ position: "absolute", bottom: "0", color: "white" }}>
                <Typography gutterBottom variant="h5" component="div">
                    {film.title} ({film.year})
                </Typography>
                <Typography variant="body2">
                    {film.nation}
                </Typography>
            </CardContent>
        </Card>
    )
}
import { CardMedia, Container, Grid, Typography } from "@mui/material";
import { useParams } from 'react-router-dom';
import { Films } from "../shared/ListOfFilms";

export default function FilmDetailPage() {
    const { id } = useParams();
    const film = Films.find(film => film.id === Number(id));

    return (
        <Container>
            {film && (
                <Grid container pt={"10vh"}>
                    <Grid xs={12} sm={4}>
                        <CardMedia component={"img"} image={film.image} alt={film.title} />
                    </Grid>
                    <Grid xs={12} sm={8} sx={{ mt: { xs: '16px', sm: '0' }, pl: { sm: '32px' } }}>
                        <Typography variant="h4">
                            {film.title} ({film.year})
                        </Typography>
                        <Typography variant="h6" py={"16px"}>
                            {film.nation}
                        </Typography>
                        <Typography variant="body1">
                            {film.details}
                        </Typography>
                    </Grid>
                </Grid>
            )
            }
        </Container >
    )
}
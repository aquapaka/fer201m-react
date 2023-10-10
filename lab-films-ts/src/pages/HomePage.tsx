import { Container, Stack, Button, Box, Typography, Card, CardActionArea, CardMedia, CardContent } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2'
import FilmCard from '../components/FilmCard'
import { Films } from '../shared/ListOfFilms'

export default function HomePage() {
    return (
        <Container>
            <Stack spacing={3} textAlign={"center"} pt={"180px"}>
                <Typography variant='h2' sx={{ color: "#C3073F", fontWeight: "bold" }}>
                    Films Discovery
                </Typography>
                <Typography variant='body1' sx={{ color: "gray" }}>
                    Embark on a cinematic journey like never before with our film discovery website, where every click unveils a world of movies waiting to be explored.
                </Typography>
                <Box>
                    <Button variant='outlined' color='error'>
                        Explore
                    </Button>
                </Box>
            </Stack>
            <Grid container spacing={2} mt={"180px"}>
                {Films.map(film => (
                    <Grid xs={12} md={4}>
                        <FilmCard film={film} />
                    </Grid>
                ))}
            </Grid>
        </Container>
    )
}
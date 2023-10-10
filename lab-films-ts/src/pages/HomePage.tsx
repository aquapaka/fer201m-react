import { Container, Stack, Button, Box, Typography, Card, CardActionArea, CardMedia, CardContent } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2'
import FilmCard from '../components/FilmCard'
import { Films } from '../shared/ListOfFilms'

export default function HomePage() {
    return (
        <Container>
            <Stack spacing={3} textAlign={"center"} pt={"30vh"}>
                <Typography variant='h2' sx={{ color: "#C3073F", fontWeight: "bold" }}>
                    Films Discovery
                </Typography>
                <Typography variant='body1' sx={{ color: "gray" }}>
                    Embark on a cinematic journey like never before with our film discovery website, where every click unveils a world of movies waiting to be explored.
                </Typography>
                <Box>
                    <Button href='#FilmList' variant='outlined' color='error'>
                        Explore
                    </Button>
                </Box>
            </Stack>
            <Grid container spacing={4} mt={"30vh"} id="FilmList">
                {Films.map(film => (
                    <Grid xs={12} sm={6} md={4} sx={{
                        transition: 'all 300ms ease-in-out',
                        ':hover': {
                            scale: '105%',
                        }
                    }}>
                        <FilmCard film={film} />
                    </Grid>
                ))}
            </Grid>
        </Container>
    )
}
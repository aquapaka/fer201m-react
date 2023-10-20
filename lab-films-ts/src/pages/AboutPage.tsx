import { Box, Container, ImageList, ImageListItem, Typography } from "@mui/material";
import { Films } from "../shared/ListOfFilms";

export default function AboutPage() {
    return (
        <Container>
            <Box minHeight={'95vh'} pt={8} mx={'auto'} maxWidth={'md'}>
                <Typography variant="h3">About Us</Typography>
                <Typography mt={2} variant="body2">Welcome to our film enthusiast haven, where the magic of cinema comes alive! At Films.com, we are passionate about storytelling, creativity, and the mesmerizing power of movies. Founded by a group of dedicated film lovers, our platform is a celebration of the diverse world of cinema.</Typography>
                <ImageList variant="masonry" cols={9} gap={8}>
                    {Films.map((item) => (
                        <ImageListItem key={item.image}>
                            <img
                                srcSet={`${item.image}?w=248&fit=crop&auto=format&dpr=2 2x`}
                                src={`${item.image}?w=248&fit=crop&auto=format`}
                                alt={item.title}
                                loading="lazy"
                            />
                        </ImageListItem>
                    ))}
                </ImageList>
                <Typography mt={2} variant="body2">Whether you're a casual moviegoer, an aspiring filmmaker, or a seasoned cinephile, our website is your ultimate destination for all things film-related. Here, we curate a carefully selected collection of reviews, in-depth analyses, and behind-the-scenes glimpses into the captivating universe of movies.</Typography>
            </Box>
        </Container>
    )
}
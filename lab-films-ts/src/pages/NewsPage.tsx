import { Accordion, AccordionDetails, AccordionSummary, Box, Button, Container, TextField, Typography } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

export default function NewsPage() {
    return (
        <Container>
            <Box minHeight={'95vh'} pt={8} mx={'auto'} maxWidth={'sm'}>
                <Typography variant="h3">News</Typography>
                <Typography my={1} variant="body2">Explore the latest in news about films here. From exclusive interviews to breaking stories, stay in the know about upcoming releases and industry trends. Your go-to source for all things cinematic!</Typography>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography>Lion King Crosses Over With Human Centipede</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography variant="body2">
                            The Lion King crosses over with The Human Centipede in a truly revolting image that casually ruins childhoods. The Lion King began as an animated Disney movie in 1994, touting timeless themes of family, responsibility, and the circle of life, which make it a culturally relevant and enduring classic. The Human Centipede, on the other hand, is a controversial horror film from 2009 that is infamous for its grotesque concept of surgically connecting people mouth-to-anus.
                        </Typography>
                        <Typography variant="body2">
                            A new image shared by Marc Bernardin on Instagram combines an innocent scene from The Lion King with the horrors of The Human Centipede. The revolting result, as seen below, is guaranteed to casually anyone's childlike innocence:                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography>The Most Popular Horror Movie Of 2023</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography variant="body2">
                            The most popular horror movie of 2023 is revealed by a new study to actually be 2022's The Menu, with some other surprising entries making up the rest of the top 10 list. Directed by Mark Mylod, The Menu stars Anya Taylor-Joy, Nicholas Hoult, and Ralph Fiennes, chronicling one couple's twisted visit to a secluded fine-dining establishment run by a sinister chef.
                        </Typography>
                        <Typography variant="body2">
                            According to a new study conducted by Reelgood, which ranks movies based on streaming interactions and general engagement, The Menu is the most popular horror movie of 2023. The movies don't have to have been released in 2023 to place, with the study ranking the films based on each title's top two most popular weeks between January 1 and October 10. The rest of the list, in ascending order up to 10, includes: The Pale Blue Eye, No One Will Save You, Nope, Renfield, M3GAN, Infinity Pool, Evil Dead Rise, Knock at the Cabin, and I See You.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography>X-Men: First Class Director Wants To Reboot Star Wars After 46 Years</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography variant="body2">
                            X-Men: First Class director Matthew Vaughn wants to reboot the Star Wars franchise. The Star Wars franchise launched in 1977, and it had a transformative effect on popular culture. 46 years later, it's still going strong, although it did technically undergo something of a partial reboot back in 2014. Then, Disney decided to erase all the various tie-in novels and comics from canon, branding them "Legends" so they were less restricted by existing content and could start again.                        </Typography>
                        <Typography variant="body2">
                            Speaking to Josh Horowitz, Kingsman director Matthew Vaughn has revealed there'd only one way he'd ever do a Star Wars movie: If he got the opportunity to reboot the franchise. "For me, doing a Star Wars movie is to play with the characters that I loved," he explains. In his view, Star Wars is the Skywalker family, and he believes that's what Lucasfilm has gotten wrong with their desire to expand the franchise. "Bond, do you mind Bond? You ask me who's gonna play the next Wolverine? Why are these characters so hallowed that, from '77, you can't redo it for a new audience?" Vaughn is no stranger to reboots, having essentially rebooted the X-Men franchise with 2011's X-Men: First Class, and he'd find the idea of a Star Wars reboot thrilling.                        </Typography>
                    </AccordionDetails>
                </Accordion>
            </Box>
        </Container>
    )
}
import { Box, Button, Container, TextField, Typography } from "@mui/material";

export default function ContactPage() {
    return (
        <Container>
            <Box minHeight={'95vh'} pt={8} mx={'auto'} maxWidth={'sm'}>
                <form>
                    <Typography variant="h3">Contact Us</Typography>
                    <Typography mt={2} variant="body2">Having question? Enter your information to contact us</Typography>
                    <TextField sx={{ mt: 2 }} id="standard-basic" fullWidth label="Name" variant="standard" />
                    <TextField sx={{ mt: 2 }} id="standard-basic" fullWidth label="Email" variant="standard" />
                    <TextField sx={{ mt: 2 }} id="standard-basic" fullWidth label="Your question" variant="standard" multiline rows={4} />
                    <Button color='error' sx={{ mt: 4 }} fullWidth variant="outlined">Send</Button>
                </form>
            </Box>
        </Container>
    )
}
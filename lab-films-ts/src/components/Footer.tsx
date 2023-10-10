import { Box, Typography } from "@mui/material";

export default function Footer() {
    return (
        <Box sx={{
            textAlign: 'center',
            padding: '12px'
        }}>
            <Typography variant="body2" color="gray">
                Developed by aquapaka 2023
            </Typography>
        </Box>
    )
}
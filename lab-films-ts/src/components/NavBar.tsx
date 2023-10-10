import { Menu } from "@mui/icons-material";
import { AppBar, Box, Button, IconButton, Toolbar, Typography } from "@mui/material";
import { Link } from "react-router-dom";

type navItemType = {
    name: string,
    path: string
}

const navItems: navItemType[] = [
    {
        name: "Home",
        path: "/"
    },
    {
        name: "News",
        path: "/news"
    },
    {
        name: "About",
        path: "/about"
    },
    {
        name: "Contact",
        path: "/contact"
    },
]

export default function NavBar() {
    return (
        <Box>
            <AppBar component="nav" sx={{ background: "none", boxShadow: "none" }}>
                <Toolbar>
                    <IconButton color="inherit" aria-label="open drawer" edge="start" sx={{ display: { sm: 'none' } }}>
                        <Menu />
                    </IconButton>
                    <Typography variant="h6" component={Link} to="/" sx={{ textDecoration: 'none', flexGrow: 1, color: "#C3073F", fontWeight: "bold" }}>
                        FILMS
                    </Typography>
                    <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                        {navItems.map((item) => (
                            <Button component={Link} to={item.path} key={item.path} color="inherit">
                                {item.name}
                            </Button>
                        ))}
                    </Box>
                </Toolbar>
            </AppBar>
        </Box >
    )
}
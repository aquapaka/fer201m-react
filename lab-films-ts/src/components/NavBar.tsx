import { Menu } from "@mui/icons-material";
import { AppBar, Box, Button, Divider, Drawer, IconButton, List, ListItem, ListItemButton, ListItemText, Toolbar, Typography } from "@mui/material";
import { useState } from "react";
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
    const [mobileOpen, setMobileOpen] = useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    return (
        <Box>
            <AppBar component="nav" sx={{ background: "none", boxShadow: "none" }}>
                <Toolbar>
                    <IconButton color="inherit" aria-label="open drawer" edge="start" sx={{ display: { sm: 'none' } }} onClick={handleDrawerToggle}>
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
                    <nav>
                        <Drawer
                            container={document.body}
                            variant="temporary"
                            open={mobileOpen}
                            onClose={handleDrawerToggle}
                            ModalProps={{
                                keepMounted: true, // Better open performance on mobile.
                            }}
                            sx={{
                                display: { xs: 'block', sm: 'none' },
                                '& .MuiDrawer-paper': { boxSizing: 'border-box', width: '240px' },
                            }}
                        >
                            <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
                                <Typography variant="h6" sx={{ my: 2 }}>
                                    MUI
                                </Typography>
                                <Divider />
                                <List>
                                    {navItems.map((item) => (
                                        <ListItem sx={{ color: 'white' }} component={Link} to={item.path} key={item.path} disablePadding>
                                            <ListItemButton sx={{ textAlign: 'center' }}>
                                                <ListItemText primary={item.name} />
                                            </ListItemButton>
                                        </ListItem>
                                    ))}
                                </List>
                            </Box>
                        </Drawer>
                    </nav>
                </Toolbar>
            </AppBar>
        </Box >
    )
}